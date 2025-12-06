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
                <small className="section_title"> ( PRODUCTS ) </small>
                <h2> Solutions for all EV <br /><span> Charging Solutions </span></h2>
                <p> Download our EV charger finder app today and experience a whole new level of EV driving</p>
                <div className={aboutCSS.about_Cards}>
                    <div className={aboutCSS.card}>
                        <img src={about_card_img1} alt="about-card-li" />
                        <h3> WARRANTY EXTENSIONS </h3>
                        <p>Enjoy maximum benefits when you lodge your charging station on to our charging network. Our Charging management system is second to none</p>
                    </div>
                    <div className={aboutCSS.card}>
                        <img src={about_card_img2} alt="about-card-li" />
                        <h3> MARKETPLACE EXTENSIONS </h3>
                        <p>Enjoy maximum benefits when you lodge your charging station on to our charging network. Our Charging management system is second to none</p>
                    </div>
                    <div className={aboutCSS.card}>
                        <img src={about_card_img3} alt="about-card-li" />
                        <h3> FLEET MANAGEMENT </h3>
                        <p>Enjoy maximum benefits when you lodge your charging station on to our charging network. Our Charging management system is second to none</p>
                    </div>
                    <div className={aboutCSS.card}>
                        <img src={about_card_img3} alt="about-card-li" />
                        <h3> FLEET MANAGEMENT </h3>
                        <p>Enjoy maximum benefits when you lodge your charging station on to our charging network. Our Charging management system is second to none</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )

}

export default About;