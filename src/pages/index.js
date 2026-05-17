import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const topicCards = [
  {
    eyebrow: 'Identity',
    title: 'Entra ID',
    description:
      'Identity architecture, access patterns, tenant operations, troubleshooting notes, and practical admin guidance.',
    to: '/docs/entra-id/overview',
  },
  {
    eyebrow: 'Learning',
    title: 'Languages',
    description:
      'Study notes across Chinese, Japanese, English, and Spanish, with patterns that make language learning sustainable.',
    to: '/docs/languages/overview',
  },
  {
    eyebrow: 'Field notes',
    title: 'Workflows',
    description:
      'Playbooks, operating habits, and the practical systems behind daily technical work.',
    to: '/docs/workflows/overview',
  },
  {
    eyebrow: 'Writing',
    title: 'Projects',
    description:
      'Build logs, retrospectives, and the lessons that connect technical work with long-term learning.',
    to: '/docs/projects/overview',
  },
];

const featuredGuides = [
  {
    title: 'Start here',
    description:
      'A front door to identity notes, language learning logs, and the topics that matter enough to keep refining.',
    to: '/docs/intro',
  },
  {
    title: 'Identity in practice',
    description:
      'Capture the operational side of Entra ID work so repeated issues become reusable guidance.',
    to: '/docs/entra-id/overview',
  },
  {
    title: 'Language learning in public',
    description:
      'Document what helps you keep multiple languages active while making steady progress in Spanish.',
    to: '/docs/languages/overview',
  },
];

const principles = [
  'Turn repeated Entra ID questions into clear reference notes.',
  'Treat language learning like a long-term system, not a streak.',
  'Write for your future self first, then let the site help other people too.',
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="A personal knowledge site for notes, guides, and project writeups.">
      <main>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}>Personal knowledge site</p>
                <Heading as="h1" className={styles.heroTitle}>
                  Identity notes, language logs, and what keeps compounding.
                </Heading>
                <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
                <div className={styles.heroActions}>
                  <Link className="button button--primary button--lg" to="/docs/intro">
                    Start reading
                  </Link>
                  <Link className="button button--secondary button--lg" to="/blog">
                    Browse writing
                  </Link>
                </div>
              </div>

              <aside className={styles.heroPanel}>
                <p className={styles.panelLabel}>Start here</p>
                <Heading as="h2" className={styles.panelTitle}>
                  A documentation-first site for technical identity work and language learning
                </Heading>
                <p className={styles.panelText}>
                  Use this site as a stable place for Entra ID field notes, multilingual
                  study logs, technical explainers, and the ideas worth revisiting later.
                </p>
                <div className={styles.panelTags}>
                  <span>Entra ID</span>
                  <span>Chinese</span>
                  <span>Japanese</span>
                  <span>English</span>
                  <span>Spanish</span>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.sectionEyebrow}>Explore by topic</p>
                <Heading as="h2" className={styles.sectionTitle}>
                  Start from the areas you already live in
                </Heading>
              </div>
              <p className={styles.sectionLead}>
                The homepage now centers on identity and language learning first, while
                keeping the Microsoft Learn-style structure that can expand into new areas later.
              </p>
            </div>

            <div className={styles.topicGrid}>
              {topicCards.map((card) => (
                <Link key={card.title} className={styles.topicCard} to={card.to}>
                  <p className={styles.cardEyebrow}>{card.eyebrow}</p>
                  <Heading as="h3" className={styles.cardTitle}>
                    {card.title}
                  </Heading>
                  <p className={styles.cardDescription}>{card.description}</p>
                  <span className={styles.cardLink}>Open section</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className="container">
            <div className={styles.learningGrid}>
              <div>
                <p className={styles.sectionEyebrow}>Featured paths</p>
                <Heading as="h2" className={styles.sectionTitle}>
                  Build a site that grows with both work and curiosity
                </Heading>
                <p className={styles.sectionLead}>
                  A strong knowledge site should support operational memory for your work
                  and reflective learning for the languages and interests you are building over time.
                </p>
              </div>

              <div className={styles.guideList}>
                {featuredGuides.map((guide) => (
                  <Link key={guide.title} className={styles.guideCard} to={guide.to}>
                    <Heading as="h3" className={styles.guideTitle}>
                      {guide.title}
                    </Heading>
                    <p className={styles.guideDescription}>{guide.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.principles}>
              <div>
                <p className={styles.sectionEyebrow}>Why this works</p>
                <Heading as="h2" className={styles.sectionTitle}>
                  A practical foundation for your personal knowledge base
                </Heading>
                <p className={styles.sectionLead}>
                  This keeps the site close to your real life: identity work on one side,
                  language learning on the other, with enough structure to keep both useful.
                </p>
              </div>

              <div className={styles.principleList}>
                {principles.map((principle, index) => (
                  <div key={principle} className={styles.principleItem}>
                    <span className={styles.principleMarker}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p>{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
