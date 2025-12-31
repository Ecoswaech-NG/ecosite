import React from 'react';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import styles from './Products.module.css';

function Products() {
    const products = [
        {
            icon: '🛒',
            title: 'Ecoswaech EV Marketplace',
            description: 'Discover EV chargers, buy and list EVSE hardware, electric vehicles, and mobility services with AI-powered search and personalized recommendations.'
        },
        {
            icon: '⚡',
            title: 'EcoCharge Mobile App',
            description: 'Public EV charging finder with navigation, payments, live availability, and community reviews.'
        },
        {
            icon: '🚚',
            title: 'Fleet Energy & Charging Platform',
            description: 'Real-time dashboard for energy monitoring, route-based charging plans, admin/manager/driver access, and smart charger control.'
        },
        {
            icon: '🔌',
            title: 'Ecoswaech Smart Chargers (EVSE Hardware)',
            description: 'Commercial, home, and fleet charging stations with OCPP support, remote monitoring, and load balancing for unstable grids.'
        },
        {
            icon: '📡',
            title: 'EcoMeter IoT Gateway',
            description: 'Edge device enabling power analytics, grid health telemetry, predictive maintenance, and AI-based energy optimization.'
        }
    ];

    return (
        <div>
            <Nav />
            <div className={styles.hero_section}>
                <div className={styles.hero_content}>
                    <small className={styles.hero_tag}>Products</small>
                    <h1 className={styles.hero_title}>Smart EV Solutions We Build</h1>
                    <p className={styles.hero_description}>Our technology, platforms, and hardware form a full-stack electric mobility ecosystem.</p>
                </div>
            </div>
            <div className={styles.products_wrapper}>
                <div className={styles.products_grid}>
                    {products.map((product, index) => (
                        <div 
                            key={index} 
                            className={styles.product_card}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.card_background}></div>
                            <div className={styles.product_icon_wrapper}>
                                <div className={styles.icon_glow}></div>
                                <div className={styles.product_icon}>{product.icon}</div>
                            </div>
                            <h3 className={styles.product_title}>{product.title}</h3>
                            <p className={styles.product_description}>{product.description}</p>
                            <div className={styles.card_footer}>
                                <span className={styles.explore_link}>
                                    Explore <i className="ri-arrow-right-line"></i>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Products;

