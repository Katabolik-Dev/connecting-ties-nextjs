import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/ui/navbar/Navbar"
import Banner from '@/ui/banner/Banner'
import Footer from '@/ui/footer/Footer'
import HomeContent from '@/ui/homeContent/HomeContent'

export default function Home() {
  return (
    <main className="main">
      <Banner />
      <Navbar/>
      <HomeContent />
      <Footer/>
    </main>
  );
}
