import Link from "next/link"
import { FaFacebookSquare } from "react-icons/fa";

export default function Header(){
    return (
        <header className="header">
            <Link href="donate">
                <div id="donate-button">
                DONATE
                </div>
            </Link>
        </header>
    )
}