'use client'

import Link from 'next/link';

import { usePathname } from 'next/navigation'


export default function Navbar(){

    const pathname = usePathname();

    return (
        <>
        <nav className="navbar">
            <Link className={`${pathname === '/' ? 'navbar-link-active' : 'navbar-link-inactive'} `} href="/">
                Home
            </Link>
            <Link className={`navbar-link ${pathname === '/services' ? 'navbar-link-active' : 'navbar-link-inactive'}`} href="/services">
                Services
            </Link>
            <Link className={`navbar-link ${pathname === '/donate' ? 'navbar-link-active' : 'navbar-link-inactive'}`} href="/donate">
                Donate
            </Link>
        </nav>
        </>
    ) 
}