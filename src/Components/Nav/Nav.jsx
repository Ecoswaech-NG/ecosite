import React, { useRef } from "react";
import { Link } from 'react-router-dom'; // <-- Keep this Import
import navCSS from './../Nav/Nav.module.css';

function Nav () {
    const menu = useRef();

    const MenuHandler = () => {
        menu.current.classList.toggle(navCSS.showMenu);
    }
    
    // Function to close menu on link click
    const linkClickHandler = () => {
        if (menu.current.classList.contains(navCSS.showMenu)) {
            MenuHandler();
        }
    }

    return (
        <>
            <div className={navCSS.nav_wrapper}>
                <div className={navCSS.logo}>
                    {/* Logo links to Home */}
                    <Link to="/" onClick={linkClickHandler}><span>Eco</span>SWAECH</Link>
                </div>
                <ul ref={menu}>
                    {/* Only create <Link> for the four routed pages */}
                    <li><Link to="/" onClick={linkClickHandler}>HOME</Link></li> 
                    <li><Link to="/about" onClick={linkClickHandler}>ABOUT US</Link></li> 
                    <li><Link to="/products" onClick={linkClickHandler}>PRODUCTS</Link></li> 
                    <li><Link to="/services" onClick={linkClickHandler}>SERVICES</Link></li> 
                    <li><Link to="/blog" onClick={linkClickHandler}>BLOG</Link></li> 
                    <li><Link to="/contact" onClick={linkClickHandler}>CONTACT</Link></li> 
                </ul>
                <div className={navCSS.Nav_btns}>
                    {/* This can link to a form or a specific section */}
                    <Link to="/contact">
                        <button> GET STARTED <i className="ri-instance-line"></i> </button>
                    </Link>
                    <i className="ri-menu-4-line" id={navCSS.bars} onClick={MenuHandler}></i>
                </div>
            </div>
        </>
    )
}

export default Nav;