import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { routes } from '../config/routes'
import { pageData } from '../config/pageData'

export default function Home({tiles}:any) {
  return (
    <>
      {
        tiles.map((item:string,index:number) => (
          <Link key={index} href={routes.PAGE_1}>
            <div className={styles.card}>
              <h2>{item} &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </div>
          </Link>
        ))
      }
    </>
  )
}

export async function getStaticProps(context:any) {
  const { tiles } = pageData['home']
  return {
    props: { tiles }
  }
}
