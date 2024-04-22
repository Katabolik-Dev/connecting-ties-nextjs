'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const getLinkClass = (path) => (pathname === path ? 'navbar-link-active' : 'navbar-link-inactive');

    return (
        <nav className="navbar">
            <Link className={getLinkClass('/')} href="/">
                Home
            </Link>
            <Link className={`navbar-link ${getLinkClass('/services')}`} href="/services">
                Services
            </Link>
            <Link className={`navbar-link ${getLinkClass('/donate')}`} href="/donate">
                Donate
            </Link>
        </nav>
    );
}
