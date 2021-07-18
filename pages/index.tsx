import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { routes } from '../config/routes'

export default function Home() {
  return (
    <Link href={routes.PAGE_1}>
      <div className={styles.card}>
        <h2>Documentation &rarr;</h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </div>
    </Link>
  )
}
