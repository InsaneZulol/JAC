import Link from 'next/link'
import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import styles from '../styles/layout.module.scss'
import { useRef, useState } from 'react';
import { useScrollPosition } from './hooks/useScrollPosition';

export default function Layout({
    children,
    title = 'QuantumML - Stay undetected, forever.',
}) {
    const [navPos, setNavPos] = useState("default");
    const rendersCount = useRef(0)

    useScrollPosition(
        ({ prevPos, currPos }) => {
            if (currPos.y > 10) setNavPos("scrolled")
            else setNavPos("default");
        },
        [navPos],
        150
    );

    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header>
                <nav className={navPos === "scrolled" ? styles['navbarScrolled--frosty'] : styles['navbarTop--default']}>
                    <div className="nav-left">
                        <Link href="/">
                            <img src="/qml-logo.svg" alt="Quantum Logo" style={{ margin: 3 }} className={styles.logo} />
                        </Link>
                    </div>
                    <div className="nav-mid">
                        <Link href="/solutions">
                            <a>Solutions</a>
                        </Link>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                        <Link href="/pricing">
                            <a>Pricing</a>
                        </Link>
                    </div>
                    <div className="nav-right">
                        <Link href="/support">
                            <a>Support</a>
                        </Link>
                        <Link href="/documentation">
                            <a>Docs</a>
                        </Link>
                        <Link href="/xd">
                            <a>Sign up</a>
                        </Link>
                    </div>
                </nav>
            </header>

            {children}

            <footer className={styles.footer}>
                <a href="https://quantum.com" target="_blank" rel="noopener noreferrer">
                    Made by
          <img src="/qml-logo.svg" alt="Vercel Logo" style={{ margin: 3 }} className={styles.logo} />
          Quantum. All rights reserved.
        </a>
            </footer>
        </div>
    )
}