'use client'

import React from 'react'
import styles from './component.module.css'

export default function Services() {
  return (
    <section className={`${styles['services-grid']}`}>
        <header className={`${styles['services-header']}`}>
            <p className={`${styles['services-header-content-text']}`}>
            Connecting Ties offers services and advocates for the disabled and elderly within the Valdez area and Copper River Basin.
            </p>
        </header>
        <div className={`${styles['service']}`}>
            <h1 className={`${styles['service-header']}`}>SERVICE</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nemo modi, cupiditate nesciunt obcaecati natus laborum illo voluptate tenetur unde? Accusantium dolorum, officiis quia cum saepe veniam ea laudantium nemo.</p>
        </div>
        <div className={`${styles['service']}`}>
            <h1 className={`${styles['service-header']}`}>SERVICE</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nemo modi, cupiditate nesciunt obcaecati natus laborum illo voluptate tenetur unde? Accusantium dolorum, officiis quia cum saepe veniam ea laudantium nemo.</p>
        </div>
        <div className={`${styles['service']}`}>
            <h1 className={`${styles['service-header']}`}>SERVICE</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nemo modi, cupiditate nesciunt obcaecati natus laborum illo voluptate tenetur unde? Accusantium dolorum, officiis quia cum saepe veniam ea laudantium nemo.</p>
        </div>
        
    </section>
  )
}
