import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { routes } from '../config/routes'

export default function Page1() {
  return (
    <Link href={routes.HOME}>
      <div className={styles.card}>
        <h2>Documentation &rarr;</h2>
        <h2>Page 1 &rarr;</h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </div>
    </Link>
  )
}