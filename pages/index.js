import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Home | NinjaTurtle
        </title>
        <meta name="keywords" content="nextjs, react" />
      </Head>
      <div>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>This is a home page.</p>
        <p className={styles.text}>This is a home page.</p>
        <p className={styles.text}>This is a home page.</p>
        <p className={styles.text}>This is a home page.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>
            see ninja list
          </a>
        </Link>

      </div>
    </>
  )
}
