
import styles from './component.module.css'
import { Merriweather_Sans } from 'next/font/google';

const merriweather = Merriweather_Sans({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-merriweather-sans'
})

export default function Careers(){

    return (
        <section className={`${merriweather.variable} ${styles.careersPage} `}>
                <header className={`${styles.careersPageHeader}`}>
                    Careers
                </header>
                <section className={`${styles.careersIntro}`}>
                    <p> 
                    Looking for a meaningful career that helps your local community? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum mollitia, deleniti dolorum aliquam corporis id error eligendi animi explicabo nam, non numquam natus eos minima hic alias voluptas ducimus! Eveniet.
                    </p>
                </section>
                <section className={`${styles.careersGrid}`} >
                    <article className={` ${styles.careersCard}`}>
                        <header className={`${styles.careersHeader}`}>
                            <div className={`${styles.careersHeaderSection}`}>
                            <h1 className={`${styles.positionTitle}`}>
                                Service Manager
                            </h1>
                            <h3 className={`${styles.positionLocation}`}>
                                Valdez, AK
                            </h3>
                            </div >
                            <div className={`${styles.careersHeaderSection}`}>
                                <h3>
                                    Posted: 04/12/2024
                                </h3>
                            </div>
                        </header>
                        <details className={`${styles.careerDetails}`}>
                            <summary className={`${styles.careerSummary}`}>
                                Position Details
                            </summary>
                            <div className={`${styles.careerText}`}>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit necessitatibus dignissimos explicabo quae! Molestias, architecto. Maiores adipisci at alias ea laudantium molestias voluptate, fugiat, cumque eos hic nam voluptas porro!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestias sit, fugiat consequuntur laboriosam, ab unde fugit explicabo dignissimos sed ea dolore magnam. Vel velit quos tempora? Alias, quidem eaque.
                                </p>
                                <ul className={`${styles.careerList}`}>
                                    <li>
                                        Supervise a team of dedicated professionals
                                    </li>
                                    <li>
                                        Assist others with their service needs
                                    </li>
                                    <li>
                                        Position Detail
                                    </li>
                                </ul>
                                <p>
                                For more information, please contact us at (907) 835-3274
                                </p>
                            </div>
                        </details>
                    </article>

                    <article className={` ${styles.careersCard}`}>
                        <header className={`${styles.careersHeader}`}>
                            <div className={`${styles.careersHeaderSection}`}>
                            <h1 className={`${styles.positionTitle}`}>
                                Service Associate
                            </h1>
                            <h3 className={`${styles.positionLocation}`}>
                                Glennallen, AK
                            </h3>
                            </div >
                            <div className={`${styles.careersHeaderSection}`}>
                                <h3>
                                    Posted: 04/13/2024
                                </h3>
                            </div>
                        </header>
                        <details className={`${styles.careerDetails}`}>
                            <summary className={`${styles.careerSummary}`}>
                                Position Details
                            </summary>
                            <div className={`${styles.careerText}`}>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit necessitatibus dignissimos explicabo quae! Molestias, architecto. Maiores adipisci at alias ea laudantium molestias voluptate, fugiat, cumque eos hic nam voluptas porro!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestias sit, fugiat consequuntur laboriosam, ab unde fugit explicabo dignissimos sed ea dolore magnam. Vel velit quos tempora? Alias, quidem eaque.
                                </p>
                                <ul className={`${styles.careerList}`}>
                                    <li>
                                        Supervise a team of dedicated professionals
                                    </li>
                                    <li>
                                        Assist others with their service needs
                                    </li>
                                    <li>
                                        Position Detail
                                    </li>
                                </ul>
                                <p>
                                For more information, please contact us at (907) 835-3274
                                </p>
                            </div>
                        </details>
                    </article>
                </section>
        </section>
    )
}