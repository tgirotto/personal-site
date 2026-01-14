---
sidebar_position: 3
---

# Processing orders

Below is the function running the MVP of the transaction engine.

```
async run() {
  // Fetch supabase client
  const { supabase } = this.supabaseService;

  // Lock the next order atomically
  const nextOrderRes = await supabase.rpc(`lock_next_order`);
  const nextOrderId = nextOrderRes[`data`];

  // If there are already orders being processed return
  if (!nextOrderId) return;
  
  // Otherwise fetch the details of the order
  const { data } = await supabase
    .from('orders')
    .select('*')
    .eq('id', nextOrderId);
  
  const order = data[0];
  // This is the base condition of the recursion
  if (!order) return;
  const { data: senderWalletResult } = await await supabase
    .from('wallets')
    .select(`*,profiles(id,username)`)
    .eq('id', order.sender_wallet_id)
    .limit(1);
  const senderWallet = senderWalletResult[0];
  if (!senderWallet) console.info(`Could not find sender wallet`);
  const { data: receiverWalletResult } = await await supabase
    .from('wallets')
    .select(`*,profiles(id)`)
    .eq('id', order.receiver_wallet_id)
    .limit(1);
  const receiverWallet = receiverWalletResult[0];
  if (!receiverWallet) console.info(`Could not find receiver wallet`);
  const absAmount = Math.abs(order.amount);

  // If it's a non stripe user and the balance is not enough
  if (
    senderWallet.profiles.username !== `service@stripe.com` &&
    senderWallet.balance < absAmount
  ) {
    // update the sender transaction
    await supabase
      .from('transactions')
      .update({
        amount: absAmount * -1,
        balance_before: senderWallet.balance,
        balance_after: senderWallet.balance,
      })
      .eq('order_id', order.id)
      .eq('wallet_id', senderWallet.id);
    // update the receiver transaction
    await supabase
      .from('transactions')
      .update({
        amount: absAmount,
        balance_before: receiverWallet.balance,
        balance_after: receiverWallet.balance,
      })
      .eq('order_id', order.id)
      .eq('wallet_id', receiverWallet.id);
    await supabase
      .from('orders')
      .update({ order_status: `FAILED` })
      .eq('id', order.id);
    return this.run();
  }

  const senderBalanceBefore = senderWallet.balance;
  const receiverBalanceBefore = receiverWallet.balance;
  const senderBalanceAfter = senderBalanceBefore - absAmount;
  const receiverBalanceAfter = receiverBalanceBefore + absAmount;

  // Update the sender transaction
  await supabase
    .from('transactions')
    .update({
      amount: absAmount * -1,
      balance_before: senderBalanceBefore,
      balance_after: senderBalanceAfter,
    })
    .eq('order_id', order.id)
    .eq('wallet_id', senderWallet.id);

  // Update the receiver transaction
  await supabase
    .from('transactions')
    .update({
      amount: absAmount,
      balance_before: receiverBalanceBefore,
      balance_after: receiverBalanceAfter,
    })
    .eq('order_id', order.id)
    .eq('wallet_id', receiverWallet.id);

  // We want to recalculate the balances at every iteration, so history is continuously checked
  // calculate the new balances for sender and receiver.
  const newSenderBalanceResult = await supabase.rpc(
    `calculate_balance_by_wallet_id`,
    { wallet_id: senderWallet.id },
  );
  const newSenderBalanceFromCalc = Number(newSenderBalanceResult[`data`]);
  const newReceiverBalanceResult = await supabase.rpc(
    `calculate_balance_by_wallet_id`,
    { wallet_id: receiverWallet.id },
  );
  const newReceiverBalanceFromCalc = Number(newReceiverBalanceResult[`data`]);
  if (newSenderBalanceFromCalc - absAmount !== senderBalanceAfter)
    console.info(`Something went wrong in the sender math`);
  if (newReceiverBalanceFromCalc + absAmount !== receiverBalanceAfter)
    console.info(`Something went wrong in the receiver math`);
  const updateTime = new Date();

  // Update sender balance
  await supabase
    .from('wallets')
    .update({ balance: senderBalanceAfter, updated_at: updateTime })
    .eq('id', senderWallet.id);

  // Update receiver balance
  await supabase
    .from('wallets')
    .update({ balance: receiverBalanceAfter, updated_at: updateTime })
    .eq('id', receiverWallet.id);

  // At the very end we update the orders table, so the next iteration can pick up the
  // next pending order
  await supabase
    .from('orders')
    .update({ order_status: `SUCCESSFUL` })
    .eq('id', order.id);

  // If the order was successful, we also check whether we need to add to the contacts
  // 1. we look in the contacts table for the pair belongs_to_id, refers_to_id
  // 2. if the result is null, then we create the contact
  const { data: contacts } = await supabase
    .from('contacts')
    .select('*')
    .eq('belongs_to_id', senderWallet.profiles.id)
    .eq('refers_to_id', receiverWallet.profiles.id);

  // If the are no existing contacts yet, then add the a new contact pair
  if (!contacts.length) {
    await supabase.from('contacts').insert([
      {
        belongs_to_id: senderWallet.profiles.id,
        refers_to_id: receiverWallet.profiles.id,
      },
    ]);
  }
  // run this function again in case there are more pending orders
  return this.run();
}
```

### Atomic Concurrency Control
The process begins with a call to the lock_next_order RPC. This is a critical architectural choice that prevents race conditions. In a distributed environment where multiple workers might be running this code, the database-level lock ensures that no two workers attempt to process the same order simultaneously. This maintains a strict "first-in, first-out" (FIFO) execution flow.

### Exception handling via "Stripe Service" bypass

The code includes a specific business logic check:

```
senderWallet.profiles.username !== `service@stripe.com`
```

This identifies the system's "liquidity source." While standard users are blocked if they have insufficient funds, the Stripe service account is allowed to have a negative balance. This is essential for injecting "new" money into the internal ledger when a user tops up via an external payment processor.

### Dual-Layer Balance Verification

The function doesn't just trust the application-side math; it performs a "handshake" check:

1. It calculates the expected balance in Typescript (senderBalanceAfter).

2. It triggers a database RPC (calculate_balance_by_wallet_id) to sum all historical transactions.

3. It compares them. This acts as a continuous audit, ensuring the denormalized balance field in the wallets table always matches the sum of the immutable transactions ledger.

### Recursive processing loop

Instead of using a while loop, the function uses tail-recursion (return this.run()).

If an order is processed (or fails), the function calls itself to check for the next PENDING order. The "base case" (termination) occurs when lock_next_order returns null, indicating the queue is empty.This ensures that a single worker can clear the entire queue without needing a complex external task scheduler.

### Side-effect management (Social Graph)

Beyond the financial movement, the function handles secondary business logic—specifically, updating the contacts table. By automatically linking the sender and receiver after a successful transaction, the system builds a "social graph" of users, improving the UX for future payments without requiring a separate "Add Friend" step.

### Room for improvement

Note for improvement: Currently, the function performs multiple separate await supabase.update() calls. If the server crashes midway (e.g., after updating the sender but before updating the receiver), the ledger could become desynchronized. To reach "Bank Grade" reliability, these operations should ideally be wrapped in a single PostgreSQL Transaction (BEGIN/COMMIT) or consolidated into a single RPC.