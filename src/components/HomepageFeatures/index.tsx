import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'DevOps',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Backend development',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Internet of things',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Mobile development',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Low-code',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Streamline your business processes with low-code platforms like n8n, Make or Zaper.
      </>
    ),
  },
  {
    title: 'Product development',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureColumn)}>
      <div className={styles.featureCard}>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

function SlidingBanner() {
  const baseUrl = useBaseUrl('/');
  
  const bannerImages = [
    // require('@site/static/img/docusaurus.png').default,
    require('@site/static/img/docker.png').default,
    `${baseUrl}img/nestjs.svg`,
    
    require('@site/static/img/opentofu.png').default,
    // Add more images here:
    // require('@site/static/img/another-image.png').default,
    // `${baseUrl}img/another-svg.svg`,
  ];

  // Duplicate images for seamless infinite loop
  const duplicatedImages = [...bannerImages, ...bannerImages];

  return (
    <section className={styles.bannerSection}>
      <div className="container">
        <div className={styles.bannerContainer}>
          <div className={styles.bannerContent}>
            {duplicatedImages.map((image, index) => (
              <div key={index} className={styles.bannerSlide}>
                <img src={image} alt={`Banner ${index + 1}`} className={styles.bannerImage} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      {/* <section className={styles.additionalSection}>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <p>I'm a software engineer with a passion for building products that help people live better lives. I'm currently working at NXT Grid, a company that is building a platform for minigrids in Nigeria.</p>
              <p>I'm also a co-founder of Starthub, a company that is building a platform for minigrids in Nigeria.</p>
              <p>I'm also a co-founder of Starthub, a company that is building a platform for minigrids in Nigeria.</p>
            </div>
          </div>
        </div>
      </section> */}
      {/* <SlidingBanner /> */}
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      
    </>
  );
}
