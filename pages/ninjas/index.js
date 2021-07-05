import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {
            ninjas: data
        }
    }
}

export default function Ninjas({ ninjas }) {
    return (
        <>
            <Head>
                <title>
                    Ninjas | NinjaTurtle
                </title>
                <meta name="keywords" content="nextjs, react" />
            </Head>
            <div>
                <h1>All Ninjas</h1>
                <ul className={styles['ninja-list']}>
                    {ninjas.map(ninja => (
                        <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
                            <li>
                                {ninja.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>

        </>
    )
}
