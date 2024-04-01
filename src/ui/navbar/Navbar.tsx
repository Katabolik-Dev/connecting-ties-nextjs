import Link from 'next/link';


export default function Navbar(){
    return (
        <nav className="navbar">
            {/* Change to Connecting-Ties logo */}
            <Link className="navbar-link" href="/">
                home
            </Link>
            <Link className="navbar-link" href="/services">
                services
            </Link>
            <Link className="navbar-link" href="/mission">
                mission
            </Link>

        </nav>
    ) 
}