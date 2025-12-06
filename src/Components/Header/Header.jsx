import React from "react";
import headerCSS from './../Header/Header.module.css';
import client1 from './../../assets/user-01.jpg';
import client2 from './../../assets/user-02.jpg';
import client3 from './../../assets/user-03.jpg';

function Header () {

    return (
        <div className={`${headerCSS.Header_Wrapper} section`}>
            <div className={headerCSS.content}>
                <small>for Everyone, every Business and every Vehicle</small>
                <h1>UNIQUE SOLUTIONS FOR <span>CHARGING STATIONS, FLEETS<br/> AND DRIVERS.</span></h1>
                <p>check out our marketplace to buy and sell your EVs, as well as accessories and spare parts. Connect with logistics
                    service providers and rental companies for EV rentals and leasing options.
                </p>
                <div className={headerCSS.header_btns}>
                    <button> TEST DRIVE  <i className="ri-roadster-line"></i></button>
                    <div className={headerCSS.clients_wrapper}>
                        <img src={client1} alt="client1" />
                         <img src={client2} alt="client2" />
                          <img src={client3} alt="client3" />

                          <span>Join the ECOSWAECH EV ECOSYSTEM.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;