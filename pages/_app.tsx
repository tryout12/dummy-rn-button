import '../styles/globals.css'
import Image from 'next/image'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import styles from '../styles/Home.module.css'
import getConfig from 'next/config'
import { pageHead } from '../config/pageHead'
import { fallback } from '../config/pageHead/default'

const { publicRuntimeConfig: { baseUrl } } = getConfig()

function MyApp({ Component, pageProps, router }: AppProps) {
  const { pathname } = router;
  const head = pageHead[pathname] || fallback;
  console.log('pathname',pathname)
  return (
    <div className={styles.container}>
      <Head>
        <title>{head.title}</title>
        <meta name="description" content={head.description} />
        <link rel="icon" href={`${baseUrl}/favicon.ico`} />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Component {...pageProps} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
export default MyApp
