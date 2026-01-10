import React from 'react';
import Layout from '@theme/Layout';

export default function Contact() {
  return (
    <Layout title="Contact" description="Contact Page">
      <main style={{maxWidth: '600px', margin: '3rem auto', padding: '0 1rem'}}>
        <h1>Contact Me</h1>
        <p>Have a question? Drop me a message below.</p>
        
        <form action="https://formspree.io/f/xwvveapo" method="POST">
          <div style={{marginBottom: '1rem'}}>
            <label style={{display: 'block', fontWeight: 'bold'}}>Your Email</label>
            <input type="email" name="email" required style={{width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc'}} />
          </div>
          <div style={{marginBottom: '1rem'}}>
            <label style={{display: 'block', fontWeight: 'bold'}}>Message</label>
            <textarea name="message" rows="5" required style={{width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc'}}></textarea>
          </div>
          <button type="submit" className="button button--primary button--lg">Send Message</button>
        </form>
      </main>
    </Layout>
  );
}