import Link from 'next/link';


export default function Navbar(){
    return (
        <nav className="navbar">
            {/* Change to Connecting-Ties logo */}
            <Link className="navbar-link" href="/">
                home
            </Link>
            <Link className="navbar-link" href="/contact">
                services
            </Link>
            <Link className="navbar-link" href="/mission">
                our mission
            </Link>
            <Link className="navbar-link" href="/contact">
                contact us
            </Link>
            <Link className="navbar-link" href="/contact">
                Second Time Around
            </Link>
        </nav>
    ) 
}