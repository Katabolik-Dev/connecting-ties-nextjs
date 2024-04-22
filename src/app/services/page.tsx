

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/ui/navbar/Navbar"
import Banner from '@/ui/banner/Banner'
import Footer from '@/ui/footer/Footer'
import Services from '@/ui/services/Services'


export default function page () {
  return (
    <main className="main">
      <Banner />
      <Navbar/>
      <Services />
      <Footer/>
    </main>
  )
}

