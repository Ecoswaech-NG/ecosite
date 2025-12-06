import React from "react";
import footerCSS from './../Footer/Footer.module.css';

function Footer() {
    return (
        <div className={`${footerCSS.footer_wrapper} section`}>
            <div className={footerCSS.footerLinks}>
                <h2><span>Eco</span>SWAECH</h2>
                <p>Powering the future of African transportation. </p>
            </div>
            <div className={footerCSS.footerLinks}>
                <h3> PAGES </h3>
                <p><a href="">Services</a></p>
                <p><a href="">About Us</a></p>
                <p><a href="">Products</a></p>
                <p><a href="">Blog</a></p>
            </div>
            <div className={footerCSS.footerLinks}>
                <h3>SERVICES</h3>
                <p><a href="">EV Charging Solutions</a></p>
                <p><a href="">EV Fleet Management</a></p>
                <p><a href="">EVSE Hardware</a></p>
                <p><a href="">IoT Connectivity</a></p>
            </div>
            <div className={footerCSS.footerLinks}>
                <h3> PRODUCTS </h3>
                <p><a href="">EcoCharge App</a></p>
                <p><a href="">Ecoswaech Colony</a></p>
                <p><a href="">Marketplace Ecosystem</a></p>
                <p><a href="">EcoMet IoT Gateway</a></p>
            </div>
            <div className={footerCSS.footerLinks}>
                <h3> RESOURCES </h3>
                <p><a href="">Blog</a></p>
                <p><a href="">WhitePapers</a></p>
                <p><a href="">Research and Development</a></p>
                <p><a href="">Ecoswaech Ecosystem</a></p>
            </div>
            <div className={footerCSS.footerLinks}>
                <h3> SOCIAL MEDIA </h3>
                <p><a href="" target="_blank" rel="noopener noreferrer"><i className="ri-linkedin-fill"></i> LinkedIn</a></p>
                <p><a href="" target="_blank" rel="noopener noreferrer"><i className="ri-facebook-fill"></i> Facebook</a></p>
                <p><a href="" target="_blank" rel="noopener noreferrer"><i className="ri-youtube-fill"></i> Youtube</a></p>
                <p><a href="" target="_blank" rel="noopener noreferrer"><i className="ri-instagram-fill"></i> Instagram</a></p>
            </div>
        </div>
    )
}

export default Footer;