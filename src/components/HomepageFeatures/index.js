import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Technical Writer',
    Svg: require('@site/static/img/technical-writer.svg').default,
    description: (
      <>
        My style is simple and clear 
      </>
    ),
  },
  {
    title: 'Programmer',
    Svg: require('@site/static/img/programmer.svg').default,
    description: (
      <>
        Pragmatic and always learning
      </>
    ),
  },
  {
    title: 'Sound Artist',
    Svg: require('@site/static/img/sound-artist.svg').default,
    description: (
      <>
        I love noise and counterpoint
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--left">
        <Svg className={styles.featureSvg} role="img" />
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
