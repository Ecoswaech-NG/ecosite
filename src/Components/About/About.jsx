import React from "react";
import aboutCSS from './../About/About.module.css';
import about_card_img1 from './../../assets/about-card01.png';
import about_card_img2 from './../../assets/about-card02.png';
import about_card_img3 from './../../assets/about-card03.png';
import about_img from './../../assets/about-img-.jpg';
import about_img2 from './../../assets/about-img-1.jpg';

function About () {
    return (
        <div className={`${aboutCSS.About_wrapper} section`}>
        <div className={aboutCSS.counters}>
            <p>3.5m+ <span>Charging Stations Initiated</span></p>
            <p>12k+ <span>Charging station networks</span></p>
            <p>3.5m+ <span>Charging Stations Initiated</span></p>
            <p>3.5m+ <span>Charging Stations Initiated</span></p>
        </div>
        <div className={aboutCSS.about}>
            <div className={aboutCSS.about_img}>
                <img src={about_img} alt="" />
                <img src={about_img2} alt="" />
            </div>
            <div className={aboutCSS.about_content}>
                <h2> Why <span> Ecoswaech </span></h2>
                <p>We're not just building charging stations — we're building the ecosystem that powers every charge.</p>
                <p className={aboutCSS.enables_text}><strong>Ecoswaech enables:</strong></p>
                <div className={aboutCSS.about_Cards}>
                    <div className={aboutCSS.card}>
                        <img src={about_card_img1} alt="Affordable access" />
                        <h3> Affordable Access to EV Charging </h3>
                        <p>Making electric vehicle charging accessible and affordable for everyone, ensuring cost-effective solutions for all users.</p>
                    </div>
                    <div className={aboutCSS.card}>
                        <img src={about_card_img2} alt="Reliable infrastructure" />
                        <h3> Reliable Infrastructure Uptime </h3>
                        <p>Ensuring maximum availability and reliability of charging infrastructure with 24/7 monitoring and support.</p>
                    </div>
                    <div className={aboutCSS.card}>
                        <img src={about_card_img3} alt="Intelligent energy" />
                        <h3> Intelligent Energy Use for Fleets </h3>
                        <p>AI-powered energy optimization for fleet operations, reducing costs and maximizing efficiency.</p>
                    </div>
                    <div className={aboutCSS.card}>
                        <img src={about_card_img1} alt="Scalable solutions" />
                        <h3> Hardware and Software That Scale </h3>
                        <p>Scalable solutions that grow with your needs, from single chargers to enterprise-level deployments.</p>
                    </div>
                    <div className={aboutCSS.card}>
                        <img src={about_card_img2} alt="Micro-mobility" />
                        <h3> Inclusion of Micro-mobility and Shared Fleets </h3>
                        <p>Supporting all forms of electric mobility including e-bikes, scooters, and shared fleet services.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )

}

export default About;