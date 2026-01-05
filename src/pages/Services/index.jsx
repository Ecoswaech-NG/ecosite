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
            title: "Charger Installation & Maintenance",
            shortDescription: "Safe setup and reliable uptime support.",
            fullDescription: "We handle end-to-end installation of EV charging infrastructure with rigorous safety protocols and ongoing maintenance support to ensure maximum uptime and reliable performance.",
            features: ["Professional installation", "Safety compliance", "Regular maintenance", "Emergency response", "Equipment upgrades", "Performance monitoring"],
            icon: "🔌",
            image: land1
        },
        {
            id: 2,
            title: "Site Planning & Grid Assessment",
            shortDescription: "Power analysis and optimal charger placement.",
            fullDescription: "Our expert team conducts detailed power analysis and site assessments to determine optimal charger placement, ensuring efficient energy distribution and cost-effective infrastructure deployment.",
            features: ["Power load analysis", "Site surveys", "Grid capacity assessment", "Placement optimization", "Infrastructure design", "Feasibility studies"],
            icon: "📍",
            image: land2
        },
        {
            id: 3,
            title: "Fleet Electrification Advisory",
            shortDescription: "Cost modeling and charging strategy for fleets.",
            fullDescription: "We provide comprehensive advisory services to help fleet operators transition to electric vehicles with detailed cost modeling, charging strategies, and ROI projections.",
            features: ["Cost-benefit analysis", "Charging strategy", "Fleet assessment", "Energy optimization", "Transition planning", "ROI projections"],
            icon: "🚚",
            image: land3
        },
        {
            id: 4,
            title: "IoT & Solar Integration",
            shortDescription: "Telemetry, IoT gateways, and solar hybrid charging design.",
            fullDescription: "We design and implement advanced IoT solutions and solar-hybrid charging systems that integrate seamlessly with your existing infrastructure for sustainable energy management.",
            features: ["IoT gateway setup", "Solar integration", "Telemetry systems", "Hybrid design", "Energy monitoring", "Sustainability planning"],
            icon: "⚡",
            image: land4
        },
        {
            id: 5,
            title: "OCPP Setup & Network Management",
            shortDescription: "Charger communication, diagnostics, and load balancing.",
            fullDescription: "We configure and manage OCPP (Open Charge Point Protocol) networks, ensuring seamless communication between chargers, real-time diagnostics, and intelligent load balancing.",
            features: ["OCPP configuration", "Network setup", "Load balancing", "Real-time diagnostics", "Charger management", "Protocol optimization"],
            icon: "🌐",
            image: land1
        },
        {
            id: 6,
            title: "24/7 Support & Monitoring",
            shortDescription: "Remote diagnostics and uptime coordination.",
            fullDescription: "Our round-the-clock monitoring and support team provides immediate response to any issues, remote diagnostics, and proactive maintenance to ensure continuous operational excellence.",
            features: ["24/7 monitoring", "Remote diagnostics", "Incident response", "Preventive maintenance", "Performance analytics", "Priority support"],
            icon: "🛠️",
            image: land2
        }
    ];

    return (
        <div>
            <Nav />
            <div className={styles.hero_section}>
                <div className={styles.hero_content}>
                    <small className={styles.hero_tag}>Services</small>
                    <h1 className={styles.hero_title}>Our Services</h1>
                    <p className={styles.hero_description}>We plan, deploy, and support EV charging and fleet energy systems for businesses, cities, and communities.</p>
                </div>
            </div>

            <div className={styles.services_wrapper}>
                <div className={styles.services_container}>
                    <div className={styles.services_grid}>
                        {services.map((service) => (
                            <Link key={service.id} to={`/services/${service.id}`} className={styles.service_card_link}>
                                <article className={styles.service_card}>
                                    <div className={styles.service_image_wrapper}>
                                        <img src={service.image} alt={service.title} className={styles.service_image} />
                                        <div className={styles.service_icon}>{service.icon}</div>
                                    </div>
                                    <div className={styles.service_content}>
                                        <h3 className={styles.service_title}>{service.title}</h3>
                                        <p className={styles.service_description}>{service.shortDescription}</p>
                                        <span className={styles.learn_more}>
                                            Learn More <i className="ri-arrow-right-line"></i>
                                        </span>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className={styles.cta_section}>
                <div className={styles.cta_content}>
                    <h2>Ready to Revolutionize Your Energy System?</h2>
                    <p>Let's discuss how ECOSWAECH can help you deploy, manage, and optimize your EV charging infrastructure.</p>
                    <Link to="/contact" className={styles.cta_button}>
                        Book a Consultation <i className="ri-arrow-right-line"></i>
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}


export default Services;

