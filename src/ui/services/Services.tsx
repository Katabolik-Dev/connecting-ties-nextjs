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
    <section className="services-grid">
      <div className="service-card">
        <h1>Service</h1>
         <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste saepe odio temporibus fugit laborum minus, minima quisquam, enim perferendis magnam ducimus sed? Quas ab, ducimus assumenda placeat quasi provident sunt!
         </p>
      </div>
      <div className="service-card">
        <h1>Service</h1>
         <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste saepe odio temporibus fugit laborum minus, minima quisquam, enim perferendis magnam ducimus sed? Quas ab, ducimus assumenda placeat quasi provident sunt!
         </p>
      </div>
      <div className="service-card">
        <h1>Service</h1>
         <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste saepe odio temporibus fugit laborum minus, minima quisquam, enim perferendis magnam ducimus sed? Quas ab, ducimus assumenda placeat quasi provident sunt!
         </p>
      </div>
      <div className="service-card">
        <h1>Service</h1>
         <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste saepe odio temporibus fugit laborum minus, minima quisquam, enim perferendis magnam ducimus sed? Quas ab, ducimus assumenda placeat quasi provident sunt!
         </p>
      </div>
      <div className="service-card">
        <h1>Service</h1>
         <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste saepe odio temporibus fugit laborum minus, minima quisquam, enim perferendis magnam ducimus sed? Quas ab, ducimus assumenda placeat quasi provident sunt!
         </p>
      </div>
      <div className="service-card">
        <h1>Service</h1>
         <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste saepe odio temporibus fugit laborum minus, minima quisquam, enim perferendis magnam ducimus sed? Quas ab, ducimus assumenda placeat quasi provident sunt!
         </p>
      </div>
      
    </section>
  )
}
