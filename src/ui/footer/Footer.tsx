import { FaFacebookSquare } from "react-icons/fa";

export default function Footer(){
    return (
        <footer className="footer">
            <section className="social-media" >
                <h1>Follow Us</h1>
                <nav className="social-media-links">
                    <a href="https://www.facebook.com/ConnectingTiesIncAlaska/"><span id="facebook-link"><FaFacebookSquare /></span></a>
                    <a href=""><span></span></a>
                    <a href=""><span></span></a>  
                </nav>
            </section>
            <section className="contact-us">
                <h1>Contact Us</h1>                   
            </section>
           
        </footer>
    )
}