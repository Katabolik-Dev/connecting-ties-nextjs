'use client'

import Link from 'next/link';
import {useState, useEffect} from 'react';
import axios from 'axios'; 
import Image from 'next/image'
import styles from './component.module.css'
import { Cormorant } from 'next/font/google';

const cormorant = Cormorant({
    weight: '400',
    subsets: ["latin"],
    variable: '--font-cormorant'
})




export default function Hero(){

    const domain = 'https://connecting-ties-api.vercel.app'



    return (
        <>
        <section className="card-grid">             

                    <div className={`card-content ${cormorant.variable}`}>
                        <h1 className={`card-header ${styles.header}`}>Our Mission</h1>
                        <p className="card-text">
                        Connecting Ties, Inc. is a non-profit corporation dedicated to ensuring that individuals with disabilities and their families have equal opportunity to be fully included in the community of their choice, where education, employment, housing, recreation, and family support services are available, and to be treated with the same respect and dignity afforded any member of the community. 
                        </p>
                    </div>
                    <div className="card-image">
                        <img src="/glennallen.jpg"
                            alt="image"
                            className="responsive"
                            loading="lazy"
                            />
                    </div>
                    <div className="card-image">
                        <img src="/glennallen.jpg"
                            alt="image"
                            className="responsive"
                            loading="lazy"
                            />
                    </div>
                    <div className={`card-content ${cormorant.variable}`}>
                        <h1 className={`${styles.header}`}>Our Vision</h1>
                        <p className="card-text">
                        Working to help increase the community’s understanding of individuals with disabilities. Through our programs we strive to enhance the sense of dignity and independence that comes from being part of a community. Let’s all work together to make our  community a strong and inclusive environment for everyone.
                        </p>
                    </div>
        </section>
        </>
    ) 
}