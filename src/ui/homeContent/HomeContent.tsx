'use client'

import styles from './component.module.css'
import { Merriweather_Sans } from 'next/font/google';
import Link from 'next/link';

const merriweather = Merriweather_Sans({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-merriweather-sans'
})



export default function HomeContent(){

    const domain = 'https://connecting-ties-api.vercel.app'

    return (
        <>
        <section className="card-grid">

            <div id="mission" className="card">
                <div className={`card-content ${merriweather.variable}`}>
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
            </div>             

            <div id="vision" className="card">
            <div className="card-image">
                    <img src="/solomon.jpg"
                        alt="image"
                        className="responsive"
                        loading="lazy"
                        />
                </div>
                <div className={`card-content ${merriweather.variable}`}>
                    <h1 className={`card-header ${styles.header}`}>Our Vision</h1>
                    <p className="card-text">
                    Working to help increase the community’s understanding of individuals with disabilities. Through our programs we strive to enhance the sense of dignity and independence that comes from being part of a community. Let’s all work together to make our  community a strong and inclusive environment for everyone.
                    </p>
                </div>
            </div>  

            <div id="second-time-around" className="card">
                <div className={`card-content ${merriweather.variable}`}>
                            <h1 className={`card-header ${styles.header}`}>Second Time Around</h1>
                            <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores repudiandae cum voluptates, laudantium cupiditate asperiores ducimus quae est inventore sit saepe eius delectus odio nesciunt explicabo enim maxime consectetur nisi? 
                            </p>
                            <p className="card-text">
                                <Link className={`link `} href="/second-time-around">
                                    Learn More
                                </Link>
                            </p>
                            
                </div>
                <div className="card-image">
                    <img src="/moose.jpg"
                        alt="image"
                        className="responsive"
                        loading="lazy"
                        />
                </div>
            </div> 

            <div id="vision" className="card">
                <div className="card-image">
                    <img src="/island.jpg"
                        alt="image"
                        className="responsive"
                        loading="lazy"
                        />
                </div>
                <div className={`card-content ${merriweather.variable}`}>
                    <h1 className={`card-header ${styles.header}`}>Careers</h1>
                    <p className="card-text">
                        Looking to make a positive impact in the Valdez or Copper River Basin areas? We are looking for compassionate and skilled workers to provide care and advocacy for those with disabilities.
                    </p>
                    <p className="card-text">
                    <Link className={`link `} href="/careers">
                        Learn More
                    </Link>
                    </p>
                </div>
            </div>  

        </section>
        </>
    ) 
}