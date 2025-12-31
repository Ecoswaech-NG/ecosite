import React from "react";
import { Link } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import styles from './Services.module.css';
import land1 from '../../assets/land1.png';
import land2 from '../../assets/land2.png';
import land3 from '../../assets/land3.png';
import land4 from '../../assets/land4.png';

function Services() {
    const services = [
        {
            id: 1,
            title: "EV Charger Installation & Site Planning",
            description: "Grid assessment, charger placement design, permits support, and safe deployment.",
            icon: "🔌",
            image: land1
        },
        {
            id: 2,
            title: "EV Fleet Electrification Advisory",
            description: "Transition strategy, energy-cost modeling, and fleet charging optimization.",
            icon: "🚚",
            image: land2
        },
        {
            id: 3,
            title: "IoT & Energy Systems Integration",
            description: "Solar-charging hybrid design, V2G readiness planning, and telemetry setup.",
            icon: "⚡",
            image: land3
        },
        {
            id: 4,
            title: "24/7 Maintenance & Support",
            description: "Remote diagnostics, uptime monitoring, and repairs coordination.",
            icon: "🛠️",
            image: land4
        }
    ];

    const advantages = [
        "Grid-aware charging for unstable power networks",
        "AI-based recommendations in the marketplace",
        "Predictive maintenance from IoT telemetry",
        "Real-time availability insights",
        "Energy-cost optimization for fleets",
        "Scalable platforms ready for renewables and V2G"
    ];

    return (
        <div>
            <Nav />
            <div className={styles.hero_section}>
                <div className={styles.hero_content}>
                    <small className={styles.hero_tag}>Services</small>
                    <h1 className={styles.hero_title}>What We Do</h1>
                    <p className={styles.hero_description}>We deploy, support, and optimize EV and fleet charging infrastructure across Africa.</p>
                </div>
            </div>
            <div className={styles.services_wrapper}>
                <div className={styles.services_container}>
                    {/* Main Content */}
                    <div className={styles.main_content}>

                        <div className={styles.services_grid}>
                            {services.map((service) => (
                                <article key={service.id} className={styles.service_card}>
                                    <div className={styles.service_image_wrapper}>
                                        <img src={service.image} alt={service.title} className={styles.service_image} />
                                        <div className={styles.service_icon}>{service.icon}</div>
                                    </div>
                                    <div className={styles.service_content}>
                                        <h2 className={styles.service_title}>{service.title}</h2>
                                        <p className={styles.service_description}>{service.description}</p>
                                        <Link to={`/services/${service.id}`} className={styles.learn_more}>
                                            Learn More <i className="ri-arrow-right-line"></i>
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className={styles.sidebar}>
                        {/* AI & IoT Advantage Section */}
                        <div className={styles.advantage_section}>
                            <h3 className={styles.advantage_title}>
                                <i className="ri-brain-line"></i> AI & IoT Advantage
                            </h3>
                            <p className={styles.advantage_subtitle}>Built for Africa's Infrastructure Reality</p>
                            
                            <div className={styles.advantages_list}>
                                {advantages.map((advantage, index) => (
                                    <div key={index} className={styles.advantage_item}>
                                        <i className="ri-check-line"></i>
                                        <span>{advantage}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Box */}
                        <div className={styles.cta_box}>
                            <h3>Ready to Get Started?</h3>
                            <p>Contact us today to discuss your EV charging needs.</p>
                            <Link to="/contact" className={styles.cta_button}>
                                Contact Us <i className="ri-arrow-right-line"></i>
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Services;

