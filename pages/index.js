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
              <button className={styles.welcomeButtonSection__startBtn}>Start Hacking</button>
              <button className={styles.welcomeButtonSection__demoBtn}>Demo</button>
            </section>
            <h1 className={styles.description}>
              QuantumML is the only truly undetected cheat for Escape From Tarkov.
              It combines an obsessive focus on security with performance.
              <br /> The one and only cloud-based hack.
            <div className={styles.tinyHeader}>LEARN THE QUANTUM<span style={{ color: "lightgreen", opacity: "50%", fontSize: 18 }}>ML</span> WAY </div>
            
            </h1>
          </div>
        </main>
      </Layout>
    </div>

  )
}
