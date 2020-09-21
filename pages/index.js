import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'
import AnimatedText from '../components/animatedText'

export default function Home() {
  return (
    <div>
      <Layout title="QuantumML - Stay undetected, forever.">
        <main className={styles.main}>
          <div className={styles.pageWidth}>
            <AnimatedText />
            <section className={styles.welcomeButtonSection}>
              <button className={styles.startBtn}>Start Hacking</button>
              <button className={styles.demoBtn}>Demo</button>
            </section>
            <h1 className={styles.description}>
              QuantumML is the only truly undetected cheat for Escape From Tarkov.
              It combines an obsessive focus on security with performance.
              <br /> The one and only cloud-based hack.
            </h1>
          </div>
        </main>
      </Layout>
    </div>

  )
}
