import Link from "next/link"
import styles from './component.module.css'
import { Cormorant } from 'next/font/google';

const cormorant = Cormorant({
    weight: '400',
    subsets: ["latin"],
    variable: '--font-cormorant'
})


export default function Banner(){
    return (
        <header className={`banner ${cormorant.variable} `}>
            <div className="banner-image">
                <div className={`banner-image-title ${styles.title}`}>CONNECTING TIES</div>
            </div>
        </header>
    )
}
