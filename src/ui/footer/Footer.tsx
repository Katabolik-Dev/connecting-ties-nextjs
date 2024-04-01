import { FaFacebookSquare } from "react-icons/fa";

export default function Footer(){
    return (
        <footer className="footer">
            <section className="social-media" >
                <h1 className="footer-section-title">Follow Us</h1>
                <nav className="social-media-links">
                    <a href="https://www.facebook.com/ConnectingTiesIncAlaska/"><span id="facebook-link"><FaFacebookSquare /></span></a>
                    <a href=""><span></span></a>
                    <a href=""><span></span></a>  
                </nav>
            </section>
            <section className="contact-us">
                <h1 className="footer-section-title">Contact Us</h1>
                <ul>
                    <h3>Connecting Ties, Inc.</h3>
                    <p>128 Chenega Avenue</p>
                    <p>Valdez, AK 99686</p>
                    <p>(907)835-3274</p>
                    <br />
                    <p>Email: admin2@cties.org</p>
                </ul>                   
            </section>
           
        </footer>
    )
}