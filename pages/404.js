import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function NotFoundPage() {
    const router = useRouter();
    const [seconds, setSeconds] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        }, 1000);
        const timeout = setTimeout(() => {
            router.push('/');
        }, 5000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        }
    }, [])

    return (
        <div className="not-found">
            <h1>404</h1>
            <h3>Page not found</h3>
            <p>Go back to the <Link href="/">Home</Link> page</p>
            <p>Redirecting back to home page in {seconds} seconds...</p>
        </div>
    )
}
