import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/ui/navbar/Navbar"
import Banner from '@/ui/banner/Banner'
import Footer from '@/ui/footer/Footer'
import Hero from '@/ui/hero/Hero'

export default function Home() {
  return (
    <main className="main">
      <Banner />
      <Navbar/>
      <Hero />
      <Footer/>
    </main>
  );
}
