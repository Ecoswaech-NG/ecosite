import React from "react";
import aboutCSS from './../About/About.module.css';
import about_card_img1 from './../../assets/about-card01.png';
import about_card_img2 from './../../assets/about-card02.png';
import about_card_img3 from './../../assets/about-card03.png';
import about_img from './../../assets/about-img-.jpg';

function About () {
    return (
        <div className={`${aboutCSS.About_wrapper} section`}>
            <div className={aboutCSS.counters}>
                <div className={aboutCSS.counter_item}>
                    <div className={aboutCSS.counter_number}>3.5m+</div>
                    <span className={aboutCSS.counter_label}>Charging Stations Initiated</span>
                </div>
                <div className={aboutCSS.counter_item}>
                    <div className={aboutCSS.counter_number}>12k+</div>
                    <span className={aboutCSS.counter_label}>Charging Station Networks</span>
                </div>
                <div className={aboutCSS.counter_item}>
                    <div className={aboutCSS.counter_number}>500+</div>
                    <span className={aboutCSS.counter_label}>Active Fleet Partners</span>
                </div>
                <div className={aboutCSS.counter_item}>
                    <div className={aboutCSS.counter_number}>98%</div>
                    <span className={aboutCSS.counter_label}>Uptime Reliability</span>
                </div>
            </div>
            <div className={aboutCSS.about}>
                <div className={aboutCSS.about_img}>
                    <div className={aboutCSS.image_wrapper}>
                        <img src={about_img} alt="About Ecoswaech" />
                        <div className={aboutCSS.image_overlay}></div>
                    </div>
                </div>
                <div className={aboutCSS.about_content}>
                    <div className={aboutCSS.content_header}>
                        <small className={aboutCSS.section_tag}>WHY CHOOSE US</small>
                        <h2>Why <span className={aboutCSS.brand_name}>Ecoswaech</span></h2>
                        <p className={aboutCSS.lead_text}>We're not just building charging stations — we're building the ecosystem that powers every charge.</p>
                    </div>
                    <div className={aboutCSS.enables_section}>
                        <p className={aboutCSS.enables_text}><strong>Ecoswaech enables:</strong></p>
                        <div className={aboutCSS.about_Cards}>
                            <div className={aboutCSS.card}>
                                <div className={aboutCSS.card_icon}>
                                    <img src={about_card_img1} alt="Affordable access" />
                                </div>
                                <h3>Affordable Access to EV Charging</h3>
                                <p>Making electric vehicle charging accessible and affordable for everyone, ensuring cost-effective solutions for all users.</p>
                            </div>
                            <div className={aboutCSS.card}>
                                <div className={aboutCSS.card_icon}>
                                    <img src={about_card_img2} alt="Reliable infrastructure" />
                                </div>
                                <h3>Reliable Infrastructure Uptime</h3>
                                <p>Ensuring maximum availability and reliability of charging infrastructure with 24/7 monitoring and support.</p>
                            </div>
                            <div className={aboutCSS.card}>
                                <div className={aboutCSS.card_icon}>
                                    <img src={about_card_img3} alt="Intelligent energy" />
                                </div>
                                <h3>Intelligent Energy Use for Fleets</h3>
                                <p>AI-powered energy optimization for fleet operations, reducing costs and maximizing efficiency.</p>
                            </div>
                            <div className={aboutCSS.card}>
                                <div className={aboutCSS.card_icon}>
                                    <img src={about_card_img1} alt="Scalable solutions" />
                                </div>
                                <h3>Hardware and Software That Scale</h3>
                                <p>Scalable solutions that grow with your needs, from single chargers to enterprise-level deployments.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
