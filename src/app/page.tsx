import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/ui/navbar/Navbar"
import Header from '@/ui/header/Header'
import Footer from '@/ui/footer/Footer'
import News from '@/ui/news/News'

export default function Home() {
  return (
    <main className="main">
      <Header/>
      <Navbar/>
      <News />
      <Footer/>
    </main>
  );
}
