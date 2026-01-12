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
    title: 'Backend development',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        I have helped develop a financial transaction engine for the sale of energy in mini-grids in Sub Saharan Africa. It is currently
        used by thousands of customers.
      </>
    ),
  },
  {
    title: 'Internet of things',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        I have built an experimental remote monitoring system for refrigeration units in supermarkets and hospitals in Italy.
      </>
    ),
  },
  {
    title: 'DevOps',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        I have built an "npm for actions" that uses OpenTofu, Docker and Digital Ocean to deploy complex cloud architectures.
      </>
    ),
  },
  {
    title: 'Mobile development',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        I have built a Google Pay clone for Venezuela using React Native and a Flutter-based mobile, offline-first ERP system for small businesses in Sub Saharan Africa.
      </>
    ),
  },
  {
    title: 'ETL',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        I have built data pipelines to track the performance of solar assets in remote communities in Sub Saharan Africa using Timescale and NestJS.
      </>
    ),
  },
  {
    title: 'Industrial automation',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        I have developed experimental JavaScript and Node.js to control industrial heat pumps in commercial and industrial settings.
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
