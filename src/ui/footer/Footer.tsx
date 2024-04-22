import { FaFacebookSquare } from "react-icons/fa";

export default function Footer(){
    return (
        <footer className="footer">
            <div className="footer-grid">    
            <h1 className="footer-section-title">Follow Us</h1>
            <h1 className="footer-section-title">Contact Us</h1>
            <section className="social-media" >
                <nav className="social-media-links">
                    <a href="https://www.facebook.com/ConnectingTiesIncAlaska/"><span id="facebook-link"><FaFacebookSquare /></span></a>
                    <a href=""><span></span></a>
                    <a href=""><span></span></a>  
                </nav>
            </section>
            <section className="contact-us">
                <ul>
                    <h3>Connecting Ties, Inc.</h3>
                    <p>128 Chenega Avenue</p>
                    <p>Valdez, AK 99686</p>
                    <p>(907)835-3274</p>
                    <br />
                    <p>Email: admin2@cties.org</p>
                </ul>                   
            </section>
            <section className="disclaimer">
                <p className="disclaimer-text">Copyright © 2024 | All Rights Reserved Connecting Ties, LLC. | Designed by Katabolik Dev</p>
            </section>
            </div>
        </footer>
    )
}