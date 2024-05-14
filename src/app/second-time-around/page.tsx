import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/ui/navbar/Navbar"
import Banner from '@/ui/banner/Banner'
import Footer from '@/ui/footer/Footer'
import SecondTimeAround from '@/ui/second-time-around/Second-Time-Around'


export default function page () {
  return (
    <main className="main">
      <Banner />
      <Navbar/>
      <SecondTimeAround />
      <Footer/>
    </main>
  )
}
