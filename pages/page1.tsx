import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { routes } from '../config/routes'
import { pageData } from '../config/pageData'
import { useTheme } from '../providers/ThemeProvider'

export default function Page1() {
  const { tiles } = pageData['page1']
  const [theme] = useTheme();
  return (
    <>
      {
        tiles.map((item,index) => (
          <Link key={index} href={routes.HOME}>
            <div className={styles.card} style={{backgroundColor: theme === 'light' ? 'yellow' : 'green'}}>
              <h2>{item} &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </div>
          </Link>
        ))
      }
    </>
  )
}