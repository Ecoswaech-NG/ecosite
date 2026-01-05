import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import styles from './Products.module.css';
import land1 from '../../assets/land1.png';
import land2 from '../../assets/land2.png';
import land3 from '../../assets/land3.png';
import land4 from '../../assets/land4.png';

function Products() {
    const products = [
        {
            id: 'marketplace',
            icon: '🛒',
            title: 'Ecoswaech EV Marketplace',
            description: 'Discover EV chargers, buy and list EVSE hardware, electric vehicles, and mobility services with AI-powered search and personalized recommendations.',
            image: land1
        },
        {
            id: 'ecocharge',
            icon: '⚡',
            title: 'EcoCharge Mobile App',
            description: 'Public EV charging finder with navigation, payments, live availability, and community reviews.',
            image: land2
        },
        {
            id: 'fleet-platform',
            icon: '🚚',
            title: 'Fleet Energy & Charging Platform',
            description: 'Real-time dashboard for energy monitoring, route-based charging plans, admin/manager/driver access, and smart charger control.',
            image: land3
        },
        {
            id: 'smart-chargers',
            icon: '🔌',
            title: 'Ecoswaech Smart Chargers (EVSE Hardware)',
            description: 'Commercial, home, and fleet charging stations with OCPP support, remote monitoring, and load balancing for unstable grids.',
            image: land4
        },
        {
            id: 'ecomenter',
            icon: '📡',
            title: 'EcoMeter IoT Gateway',
            description: 'Edge device enabling power analytics, grid health telemetry, predictive maintenance, and AI-based energy optimization.',
            image: land1
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
                        <Link 
                            key={index} 
                            to={`/products/${product.id}`}
                            className={styles.product_card_link}
                        >
                            <div 
                                className={styles.product_card}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={styles.product_image_wrapper}>
                                    <img src={product.image} alt={product.title} className={styles.product_image} />
                                    <div className={styles.product_icon_overlay}>
                                        <div className={styles.icon_glow}></div>
                                        <div className={styles.product_icon}>{product.icon}</div>
                                    </div>
                                </div>
                                <div className={styles.card_background}></div>
                                <div className={styles.product_content}>
                                    <h3 className={styles.product_title}>{product.title}</h3>
                                    <p className={styles.product_description}>{product.description}</p>
                                    <div className={styles.card_footer}>
                                        <span className={styles.explore_link}>
                                            Explore <i className="ri-arrow-right-line"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Products;

