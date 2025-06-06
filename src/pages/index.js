import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

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
        <div className='row'>
          <HomepageFeatures />
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/resume/work-experience">
              Get to know me &#8594;
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
      title="Home"
      description="The personal website of Igor Coelho A. S. Marques. Communicator, writer, programmer, and musician from Ottawa, Canada.">
      <HomepageHeader />
    </Layout>
  );
}
