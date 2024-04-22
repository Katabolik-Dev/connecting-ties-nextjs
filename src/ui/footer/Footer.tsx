import { FaFacebookSquare } from "react-icons/fa";

export default function Footer(){
    return (
        <footer className="footer">
            <div className="footer-grid">    
            <h1 id="contact-us-title" className="footer-section-title">Contact Us</h1>
            <h1 className="footer-section-title">Follow Us</h1>
                <ul className="address">
                    <h3 className="address-header">Valdez Office</h3>
                    <p>128 Chenega Avenue</p>
                    <p>P.O. Box 2017</p>
                    <p>Valdez, AK 99686</p>
                    <p><b>Phone:</b> (907)835-3274</p>
                    <p><b>Fax:</b> (907) 835-3512 </p>
                    <b>Email:</b><a href="mailto:m.dickman@cties.org"> m.dickman@cties.org</a>
                </ul>
                <ul className="address">
                    <h3 className="address-header">Glennallen Office</h3>
                    <p>Mile 111 Richardson Hwy</p>
                    <p>P.O. Box </p>
                    <p>Glennallen, AK 99588</p>
                    <p><b>Phone:</b> (907) 822-3384</p>
                    <p><b>Fax:</b> (907) 822-5484 </p>
                    <b>Email:</b><a href="mailto:t.devens@cties.org"> t.devens@cties.org</a>
                </ul>                                   
            <section className="social-media" >
                <nav className="social-media-links">
                    <a href="https://www.facebook.com/ConnectingTiesIncAlaska/"><span id="facebook-link"><FaFacebookSquare /></span></a>
                </nav>
            </section>
            <section className="disclaimer">
                <p className="disclaimer-text">Copyright © 2024 | All Rights Reserved Connecting Ties, LLC. | Designed by Katabolik Dev</p>
            </section>
            </div>
        </footer>
    )
}