import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

export default function Header() {
    return (
        <header>
            <div className = "logo">
                <Image src = "/vercel.svg" height = {77} width = {128} />
            </div>
            <nav>
                <Navbar />
            </nav>
        </header>
    )
}
