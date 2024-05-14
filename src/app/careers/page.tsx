

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/ui/navbar/Navbar"
import Banner from '@/ui/banner/Banner'
import Footer from '@/ui/footer/Footer'
import Careers from '@/ui/careers/Careers'


export default function page () {
  return (
    <main className="main">
      <Banner />
      <Navbar/>
      <Careers />
      <Footer/>
    </main>
  )
}

