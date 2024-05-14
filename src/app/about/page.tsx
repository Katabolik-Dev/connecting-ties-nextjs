import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/ui/navbar/Navbar"
import Banner from '@/ui/banner/Banner'
import Footer from '@/ui/footer/Footer'
import About from '@/ui/about/About'


export default function page () {
  return (
    <main className="main">
      <Banner />
      <Navbar/>
      <About />
      <Footer/>
    </main>
  )
}
