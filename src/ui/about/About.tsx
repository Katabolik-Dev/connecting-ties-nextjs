import styles from './component.module.css'
import { Merriweather_Sans } from 'next/font/google';

const merriweather = Merriweather_Sans({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-merriweather-sans'
})


export default function About(){

    return(
        <section className="card-grid">
            <article className="card">
                <section className={`card-content ${merriweather.variable}`}>
                    <h1 className={`card-header ${styles.header}`}>
                        Our Beginnings
                    </h1>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, in eaque! Blanditiis, officia eius quis ut autem enim exercitationem error maxime quos at expedita quo et culpa fugiat laudantium. Mollitia. 
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime minima fugiat sint, ipsum assumenda in eligendi voluptatibus nesciunt vero, numquam facilis quos placeat sapiente, similique quia itaque illum omnis optio.
                    </p>
                </section>
                <div className="card-image">
                    <img src="/island.jpg"
                        alt="image"
                        className="responsive"
                        loading="lazy"
                        />
                </div>
            </article>
            <article className="card">
                <div className="card-image">
                    <img src="/solomon.jpg"
                        alt="image"
                        className="responsive"
                        loading="lazy"
                        />
                </div>
                <section className={`card-content ${merriweather.variable}`}>
                    <h1 className={`card-header ${styles.header}`}>
                        Our Future
                    </h1>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, in eaque! Blanditiis, officia eius quis ut autem enim exercitationem error maxime quos at expedita quo et culpa fugiat laudantium. Mollitia. 
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime minima fugiat sint, ipsum assumenda in eligendi voluptatibus nesciunt vero, numquam facilis quos placeat sapiente, similique quia itaque illum omnis optio.
                    </p>
                </section>
                
            </article>
        </section>
    )
}