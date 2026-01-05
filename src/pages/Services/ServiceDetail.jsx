import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import styles from './ServiceDetail.module.css';

function ServiceDetail() {
    const { serviceId } = useParams();

    const servicesData = {
        1: {
            id: 1,
            title: "Charger Installation & Maintenance",
            icon: "🔌",
            description: "Safe setup and reliable uptime support.",
            fullDescription: "We handle end-to-end installation of EV charging infrastructure with rigorous safety protocols and ongoing maintenance support to ensure maximum uptime and reliable performance.",
            features: ["Professional installation", "Safety compliance", "Regular maintenance", "Emergency response", "Equipment upgrades", "Performance monitoring"],
            useCases: [
                "Enterprise fleet charging stations",
                "Public charging networks",
                "Retail and hospitality charging",
                "Residential charging solutions",
                "Industrial facility electrification"
            ],
            specs: [
                { label: "Installation Types", value: "Wall-mounted, Pedestal, Overhead" },
                { label: "Charging Levels", value: "Level 1, 2, and DC Fast Charging" },
                { label: "Safety Standards", value: "IEC 61851, NEC Article 625" },
                { label: "Warranty", value: "2-5 years on equipment and labor" }
            ],
            benefits: [
                "Reduced infrastructure downtime",
                "Certified professional installers",
                "Rapid problem resolution",
                "Predictive maintenance scheduling",
                "Equipment optimization",
                "Safety compliance assurance"
            ]
        },
        2: {
            id: 2,
            title: "Site Planning & Grid Assessment",
            icon: "📍",
            description: "Power analysis and optimal charger placement.",
            fullDescription: "Our expert team conducts detailed power analysis and site assessments to determine optimal charger placement, ensuring efficient energy distribution and cost-effective infrastructure deployment.",
            features: ["Power load analysis", "Site surveys", "Grid capacity assessment", "Placement optimization", "Infrastructure design", "Feasibility studies"],
            useCases: [
                "Commercial property development",
                "Municipal infrastructure planning",
                "Fleet depot optimization",
                "Highway charging corridors",
                "Multi-location deployments"
            ],
            specs: [
                { label: "Assessment Duration", value: "1-2 weeks per site" },
                { label: "Data Collected", value: "Power, load, weather, geography" },
                { label: "Deliverables", value: "Detailed site report and recommendations" },
                { label: "Accuracy", value: "99.2% grid capacity prediction" }
            ],
            benefits: [
                "Avoid costly infrastructure upgrades",
                "Maximize charger efficiency",
                "Minimize installation costs",
                "Optimize user experience",
                "Future-proof deployment",
                "Grid integration readiness"
            ]
        },
        3: {
            id: 3,
            title: "Fleet Electrification Advisory",
            icon: "🚚",
            description: "Cost modeling and charging strategy for fleets.",
            fullDescription: "We provide comprehensive advisory services to help fleet operators transition to electric vehicles with detailed cost modeling, charging strategies, and ROI projections.",
            features: ["Cost-benefit analysis", "Charging strategy", "Fleet assessment", "Energy optimization", "Transition planning", "ROI projections"],
            useCases: [
                "Delivery and logistics companies",
                "Public transportation authorities",
                "Ride-sharing platforms",
                "Corporate fleet operations",
                "Municipal vehicle fleets"
            ],
            specs: [
                { label: "Fleet Size Support", value: "50 to 10,000+ vehicles" },
                { label: "ROI Analysis Period", value: "3, 5, and 10-year projections" },
                { label: "Cost Accuracy", value: "±5% estimation" },
                { label: "Payback Timeline", value: "3-7 years average" }
            ],
            benefits: [
                "Reduced fuel costs by up to 70%",
                "Lower maintenance expenses",
                "Tax incentive optimization",
                "Improved brand reputation",
                "Faster fleet transition",
                "Operational efficiency gains"
            ]
        },
        4: {
            id: 4,
            title: "IoT & Solar Integration",
            icon: "⚡",
            description: "Telemetry, IoT gateways, and solar hybrid charging design.",
            fullDescription: "We design and implement advanced IoT solutions and solar-hybrid charging systems that integrate seamlessly with your existing infrastructure for sustainable energy management.",
            features: ["IoT gateway setup", "Solar integration", "Telemetry systems", "Hybrid design", "Energy monitoring", "Sustainability planning"],
            useCases: [
                "Off-grid charging stations",
                "Solar-powered fleet charging",
                "Smart grid integration",
                "Remote location charging",
                "Sustainable campus infrastructure"
            ],
            specs: [
                { label: "Solar Integration", value: "10kW to 1MW+ systems" },
                { label: "Battery Storage", value: "LiFePO4 up to 500kWh" },
                { label: "IoT Connectivity", value: "4G/5G, WiFi, LoRaWAN" },
                { label: "Energy Efficiency", value: "Up to 95% system efficiency" }
            ],
            benefits: [
                "50-80% energy cost reduction",
                "Carbon-neutral charging",
                "Energy independence",
                "Real-time monitoring and control",
                "Scalable renewable integration",
                "Reduced grid dependency"
            ]
        },
        5: {
            id: 5,
            title: "OCPP Setup & Network Management",
            icon: "🌐",
            description: "Charger communication, diagnostics, and load balancing.",
            fullDescription: "We configure and manage OCPP (Open Charge Point Protocol) networks, ensuring seamless communication between chargers, real-time diagnostics, and intelligent load balancing.",
            features: ["OCPP configuration", "Network setup", "Load balancing", "Real-time diagnostics", "Charger management", "Protocol optimization"],
            useCases: [
                "Multi-site charger networks",
                "Public charging networks",
                "Corporate charging ecosystems",
                "Grid-integrated smart charging",
                "Vehicle-to-grid systems"
            ],
            specs: [
                { label: "Protocol Support", value: "OCPP 1.6, 2.0.1, proprietary" },
                { label: "Charger Capacity", value: "Up to 5,000+ chargers per network" },
                { label: "Response Time", value: "< 100ms average" },
                { label: "Uptime SLA", value: "99.9% availability" }
            ],
            benefits: [
                "Unified charger management",
                "Predictive diagnostics",
                "Intelligent load balancing",
                "Real-time performance analytics",
                "Seamless grid integration",
                "Cost optimization across network"
            ]
        },
        6: {
            id: 6,
            title: "24/7 Support & Monitoring",
            icon: "🛠️",
            description: "Remote diagnostics and uptime coordination.",
            fullDescription: "Our round-the-clock monitoring and support team provides immediate response to any issues, remote diagnostics, and proactive maintenance to ensure continuous operational excellence.",
            features: ["24/7 monitoring", "Remote diagnostics", "Incident response", "Preventive maintenance", "Performance analytics", "Priority support"],
            useCases: [
                "Large-scale charging networks",
                "Mission-critical infrastructure",
                "High-traffic public charging",
                "Enterprise fleet operations",
                "Strategic charging corridors"
            ],
            specs: [
                { label: "Support Levels", value: "Platinum, Gold, Silver" },
                { label: "Response Time", value: "15 minutes (Critical), 1 hour (High)" },
                { label: "Average Resolution", value: "98% remote, 2% on-site" },
                { label: "Coverage", value: "365 days/year, 24 hours/day" }
            ],
            benefits: [
                "Minimized downtime and revenue loss",
                "Proactive issue prevention",
                "Rapid incident resolution",
                "Performance optimization",
                "User satisfaction guarantee",
                "Peace of mind operations"
            ]
        }
    };

    const service = servicesData[serviceId];

    if (!service) {
        return (
            <div>
                <Nav />
                <div className={styles.error_section}>
                    <div className={styles.error_content}>
                        <h1>Service Not Found</h1>
                        <p>The service you're looking for doesn't exist.</p>
                        <Link to="/services" className={styles.back_link}>
                            Back to Services
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Nav />

            {/* Hero Section */}
            <div className={styles.hero_section}>
                <div className={styles.hero_content}>
                    <Link to="/services" className={styles.breadcrumb}>
                        Services <i className="ri-arrow-right-line"></i>
                    </Link>
                    <div className={styles.hero_icon}>{service.icon}</div>
                    <h1 className={styles.hero_title}>{service.title}</h1>
                    <p className={styles.hero_description}>{service.description}</p>
                </div>
            </div>

            {/* Main Content */}
            <div className={styles.content_wrapper}>
                <div className={styles.content_container}>
                    {/* Overview Section */}
                    <section className={styles.overview_section}>
                        <h2>Service Overview</h2>
                        <p>{service.fullDescription}</p>
                    </section>

                    {/* Features Section */}
                    <section className={styles.features_section}>
                        <h2>Key Features</h2>
                        <div className={styles.features_grid}>
                            {service.features.map((feature, index) => (
                                <div key={index} className={styles.feature_card}>
                                    <i className="ri-check-double-line"></i>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Use Cases Section */}
                    <section className={styles.use_cases_section}>
                        <h2>Ideal For</h2>
                        <div className={styles.use_cases_list}>
                            {service.useCases.map((useCase, index) => (
                                <div key={index} className={styles.use_case_item}>
                                    <div className={styles.use_case_icon}>
                                        <i className="ri-arrow-right-line"></i>
                                    </div>
                                    <span>{useCase}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Specs Section */}
                    <section className={styles.specs_section}>
                        <h2>Specifications</h2>
                        <div className={styles.specs_grid}>
                            {service.specs.map((spec, index) => (
                                <div key={index} className={styles.spec_card}>
                                    <p className={styles.spec_label}>{spec.label}</p>
                                    <p className={styles.spec_value}>{spec.value}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Benefits Section */}
                    <section className={styles.benefits_section}>
                        <h2>Why Choose Us</h2>
                        <div className={styles.benefits_list}>
                            {service.benefits.map((benefit, index) => (
                                <div key={index} className={styles.benefit_item}>
                                    <div className={styles.benefit_icon}>
                                        <i className="ri-star-fill"></i>
                                    </div>
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className={styles.cta_section}>
                        <h2>Ready to Get Started?</h2>
                        <p>Contact our team to discuss how we can help you implement {service.title}</p>
                        <Link to="/contact" className={styles.cta_button}>
                            Book a Consultation <i className="ri-arrow-right-line"></i>
                        </Link>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default ServiceDetail;
