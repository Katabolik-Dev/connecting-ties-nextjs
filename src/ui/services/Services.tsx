'use client'

import React from 'react'
import styles from './component.module.css'
import { Cormorant } from 'next/font/google';

const cormorant = Cormorant({
    weight: '400',
    subsets: ["latin"],
    variable: '--font-cormorant'
})

export default function Services() {
  return (
    <section className={`${cormorant.variable} ${styles['services-grid']}`}>
        <header className={`${styles['services-header']}`}>
            Services
        </header>
    </section>
  )
}
