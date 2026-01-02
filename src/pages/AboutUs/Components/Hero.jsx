import React from "react";
import styles from "./Hero.module.css";

function Hero(){
    return(
        <section className={styles.hero} data-animate="slideUp">
            <div className={styles.heroInner}>
                <div className={styles.kicker}>About Us</div>
                <h1 className={styles.title}>About us</h1>
                <nav className={styles.breadcrumb} aria-label="breadcrumb">
                    <a href="/">Home</a>
                    <span>→</span>
                    <span>About us</span>
                </nav>
            </div>
        </section>
    )
}

export default Hero;