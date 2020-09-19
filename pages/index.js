import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Layout title="QuantumML - Stay undetected, forever.">
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Quantum</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.js</code>
          </p>
        </main>
      </Layout>
    </div>

  )
}
