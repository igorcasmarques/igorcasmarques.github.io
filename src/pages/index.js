import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import CurrentlyReading from '../components/currently-reading';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttonContainer}>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/resume/intro">
              Resume
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/portfolio/intro">
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The personal website of Igor Coelho A. S. Marques, an Ottawa-based technical writer, programmer, and musician.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <CurrentlyReading />
    </Layout>
  );
}
