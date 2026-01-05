import React from "react";
import { useNavigate } from 'react-router-dom';
import CTACSS from './CTA.module.css';
import ctaImg from './../../assets/cta_image.png';

function CTA() {
    const navigate = useNavigate();
    
    return (
        <div className={CTACSS.CTA_Container}>
            <div className={`${CTACSS.CallToAction_Wrapper} ${CTACSS.AppWrapper}`}>
                <div className={CTACSS.Content}>
                    <small className="section_title"> ( Download Our App ) </small>
                    <h2> Find <span> Charging Stations </span> Near you with <span>our App</span>.</h2> 
                    <p>Download our mobile app to easily locate EV charging stations, monitor charging 
                        status,  manage your account on the go.
                    </p>
                </div>
                <div className={CTACSS.image} onClick={() => navigate('/app-about')}>
                    <img src={ctaImg} alt="Download Our App" />
                </div>
            </div>
            
            <div className={`${CTACSS.CallToAction_Wrapper} ${CTACSS.MarketplaceWrapper}`}>
                <div className={CTACSS.Content} >
                    <small className="section_title"> ( Visit our Marketplace ) </small>
                    <h2>Visit our EV <span> ecosystem marketplace </span> for EVs</h2>
                    <p>Meet buyers and seller of EVs, EV parts and accessories, bikes and much more. 
                        You can also rent an EV for your logistics and delivery services in our marketplace.
                    </p>
                </div>
                <div className={CTACSS.image} onClick={() => navigate('/marketplace')}>
                    <img src={ctaImg} alt="Visit our Marketplace" />
                </div>
            </div>
        </div>
    )
}

export default CTA;