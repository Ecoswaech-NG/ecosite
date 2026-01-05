import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import styles from './Ecosystem.module.css';

function Ecosystem() {
    const [activeTab, setActiveTab] = useState('fleets');

    // Partnership tiers data
    const partnershipTiers = {
        fleets: {
            icon: "🚚",
            title: "For Fleet Operators",
            subtitle: "Turn your fleet into a profitable charging network",
            description: "Manage your fleet's charging, reduce operational costs, and generate new revenue streams through our integrated platform.",
            problems: [
                "Unpredictable charging costs eating into margins",
                "No coordination between fleet drivers and charging locations",
                "Downtime from inconsistent power access",
                "Manual booking and reservation systems"
            ],
            solutions: [
                "Centralized fleet charging management via our CMS",
                "Route intelligence optimized for charging stops",
                "Guaranteed uptime through solar-hybrid integration",
                "Automated reservations and payment settlement",
                "Driver access to 100+ verified charging locations"
            ],
            benefits: [
                "35-50% reduction in charging costs",
                "Real-time analytics on fuel consumption",
                "Revenue share from idle fleet assets",
                "Predictable maintenance scheduling"
            ]
        },
        chargers: {
            icon: "🔌",
            title: "For Charger Hosts",
            subtitle: "Maximize utilization and revenue from your infrastructure",
            description: "List your chargers on our marketplace and let fleets and drivers book them automatically with guaranteed uptime support.",
            problems: [
                "Low utilization rates on installed chargers",
                "Manual booking creates scheduling conflicts",
                "Downtime reduces profitability",
                "Difficult to reach new driver audiences"
            ],
            solutions: [
                "Automatic marketplace listing reaching thousands of drivers",
                "OCPP-integrated CMS for real-time monitoring",
                "Professional installation and maintenance support",
                "Dynamic pricing tools for peak demand optimization"
            ],
            benefits: [
                "60-70% increase in charger utilization",
                "Passive income from existing infrastructure",
                "Zero downtime guarantee with uptime insurance",
                "Access to demand analytics and driver behavior insights"
            ]
        },
        operators: {
            icon: "🚗",
            title: "For Mobility Operators",
            subtitle: "Build a sustainable ride-sharing or mobility service",
            description: "Integrate charging access and battery management into your mobility platform to lower operating costs and expand service range.",
            problems: [
                "High energy costs for mobility fleets",
                "Limited charging infrastructure for drivers",
                "Battery range anxiety limits service areas",
                "Difficulty integrating charging APIs"
            ],
            solutions: [
                "Pre-integrated charging marketplace ready to deploy",
                "Battery swapping program for extended range",
                "White-label charging dashboard for your drivers",
                "Real-time location-based charging recommendations"
            ],
            benefits: [
                "25-35% reduction in per-trip energy costs",
                "Seamless driver experience with unified platform",
                "Expanded service areas with battery swapping",
                "Improved customer retention through convenience"
            ]
        },
        energy: {
            icon: "☀️",
            title: "For Energy Partners",
            subtitle: "Scale solar and renewable energy adoption",
            description: "Partner your solar installations with our charging network to guarantee demand and create a sustainable revenue stream.",
            problems: [
                "Solar installations face unpredictable demand",
                "Grid integration complexity and costs",
                "Seasonal fluctuations in energy consumption",
                "Difficulty monetizing excess capacity"
            ],
            solutions: [
                "Guaranteed demand from fleet and driver charging",
                "Hybrid power systems that maximize solar utilization",
                "Battery storage integration for peak shaving",
                "Direct revenue stream from energy sales"
            ],
            benefits: [
                "80-90% capacity utilization year-round",
                "Guaranteed offtake agreements with fleets",
                "Lower system costs through shared infrastructure",
                "Accelerated ROI on solar investments"
            ]
        }
    };

    const valueExchange = [
        {
            title: "Charger Sites",
            subtitle: "Physical infrastructure",
            items: [
                "AC/DC charger installations",
                "Land or rooftop space for solar",
                "Existing customer networks"
            ]
        },
        {
            title: "Driver/Fleet Access",
            subtitle: "User demand",
            items: [
                "Fleet operator partnerships",
                "Driver base and reservations",
                "Daily usage patterns"
            ]
        },
        {
            title: "Solar/Energy Capacity",
            subtitle: "Power supply",
            items: [
                "Solar panel installations",
                "Battery storage systems",
                "Grid connection agreements"
            ]
        }
    ];

    const weProvide = [
        {
            title: "Marketplace Bookings",
            subtitle: "Discovery & reservations",
            items: [
                "Full charger listing management",
                "Real-time availability updates",
                "Automated driver matching"
            ]
        },
        {
            title: "OCPP CMS & Monitoring",
            subtitle: "Control & analytics",
            items: [
                "Remote charger management",
                "Performance analytics dashboard",
                "Predictive maintenance alerts"
            ]
        },
        {
            title: "Infrastructure & Uptime",
            subtitle: "Reliability guarantee",
            items: [
                "Professional charger installation",
                "24/7 technical support",
                "Uptime guarantee insurance"
            ]
        },
        {
            title: "Revenue Sharing",
            subtitle: "Profit distribution",
            items: [
                "Per-session commission splits",
                "Subscription revenue models",
                "Transparent settlement reports"
            ]
        }
    ];

    const coreServices = [
        {
            id: 1,
            icon: "📱",
            title: "Unified Booking Platform",
            description: "Single app for drivers to discover, reserve, and pay for charging across all partner locations"
        },
        {
            id: 2,
            icon: "🔐",
            title: "OCPP-Integrated CMS",
            description: "Remote management of all AC/DC chargers with real-time diagnostics and performance analytics"
        },
        {
            id: 3,
            icon: "⚡",
            title: "Solar-Hybrid Systems",
            description: "Deploy and integrate solar panels with battery storage to guarantee uptime and reduce costs"
        },
        {
            id: 4,
            icon: "🔋",
            title: "Battery Swapping Program",
            description: "Quick battery exchanges for extended range, reducing charging wait times"
        },
        {
            id: 5,
            icon: "📊",
            title: "Route Intelligence",
            description: "AI-powered route optimization that factors charging availability, pricing, and grid load"
        },
        {
            id: 6,
            icon: "💰",
            title: "Revenue Analytics Dashboard",
            description: "Real-time insights into utilization, revenue, and profitability by location and time"
        }
    ];

    const partnershipModels = [
        {
            title: "Charger Host Partnership",
            revenue: "Per-session commission",
            description: "List existing chargers or let us install new ones. You retain ownership and get paid per booking.",
            icon: "🏪"
        },
        {
            title: "Fleet Integration",
            revenue: "Subscription + savings share",
            description: "Integrate your fleet into our platform. Save on costs and earn from charging referrals.",
            icon: "🚚"
        },
        {
            title: "Solar Energy Offtake",
            revenue: "Power purchase agreement",
            description: "Supply solar energy to our charging network. Guaranteed demand and fixed offtake rates.",
            icon: "☀️"
        },
        {
            title: "White-Label Mobility",
            revenue: "Platform licensing",
            description: "Embed our charging marketplace into your mobility app under your brand.",
            icon: "🎯"
        }
    ];

    const timelineStages = [
        {
            stage: "Stage 1: Assessment",
            duration: "Week 1-2",
            items: [
                "Site audit and capacity planning",
                "Technical requirements review",
                "Commercial terms discussion"
            ]
        },
        {
            stage: "Stage 2: Setup",
            duration: "Week 3-6",
            items: [
                "Charger installation or integration",
                "OCPP configuration",
                "Driver onboarding setup"
            ]
        },
        {
            stage: "Stage 3: Launch",
            duration: "Week 7-8",
            items: [
                "Marketplace listing goes live",
                "Driver and fleet promotion",
                "Real-time monitoring begins"
            ]
        },
        {
            stage: "Stage 4: Scale",
            duration: "Ongoing",
            items: [
                "Optimize pricing and availability",
                "Expand to additional locations",
                "Introduce battery swapping or solar"
            ]
        }
    ];

    return (
        <div>
            <Nav />

            {/* Hero Section */}
            <div className={styles.hero_section}>
                <div className={styles.hero_content}>
                    <small className={styles.hero_tag}>OUR ECOSYSTEM</small>
                    <h1 className={styles.hero_title}>A Unified Platform for Electric Mobility & Energy</h1>
                    <p className={styles.hero_description}>
                        ECOSWAECH doesn't compete with partners — we multiply their value. 
                        Join a network of fleets, charger hosts, mobility operators, and energy providers 
                        growing together through integrated charging, analytics, and revenue sharing.
                    </p>
                </div>
            </div>

            <main className={styles.main_content}>
                {/* Problem Statement Section */}
                <section className={styles.problem_section}>
                    <div className={styles.container}>
                        <h2 className={styles.section_title}>The Challenge in Nigeria's EV Market</h2>
                        <div className={styles.problem_grid}>
                            <div className={styles.problem_card}>
                                <div className={styles.problem_icon}>📍</div>
                                <h3>Fragmentation</h3>
                                <p>Charging infrastructure is scattered with no unified booking or payment system</p>
                            </div>
                            <div className={styles.problem_card}>
                                <div className={styles.problem_icon}>⏱️</div>
                                <h3>Low Utilization</h3>
                                <p>Installed chargers sit idle 60-70% of the time due to poor visibility</p>
                            </div>
                            <div className={styles.problem_card}>
                                <div className={styles.problem_icon}>⚠️</div>
                                <h3>Reliability Issues</h3>
                                <p>Grid instability and lack of uptime guarantees prevent fleet adoption</p>
                            </div>
                            <div className={styles.problem_card}>
                                <div className={styles.problem_icon}>💼</div>
                                <h3>Operational Complexity</h3>
                                <p>Fleets and operators struggle to manage charging as a core business function</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partnership Tiers Section */}
                <section className={styles.partnership_section}>
                    <div className={styles.container}>
                        <h2 className={styles.section_title}>Partnership Opportunities</h2>
                        <p className={styles.section_subtitle}>Choose your path to growth and sustainability</p>

                        {/* Tab Navigation */}
                        <div className={styles.tab_navigation}>
                            {Object.entries(partnershipTiers).map(([key, tier]) => (
                                <button
                                    key={key}
                                    className={`${styles.tab_button} ${activeTab === key ? styles.active : ''}`}
                                    onClick={() => setActiveTab(key)}
                                >
                                    <span className={styles.tab_icon}>{tier.icon}</span>
                                    <span className={styles.tab_text}>{tier.title.split(' ').slice(1).join(' ')}</span>
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className={styles.tab_content}>
                            {Object.entries(partnershipTiers).map(([key, tier]) => (
                                activeTab === key && (
                                    <div key={key} className={styles.tier_content}>
                                        <div className={styles.tier_header}>
                                            <div className={styles.tier_icon_large}>{tier.icon}</div>
                                            <div>
                                                <h3>{tier.title}</h3>
                                                <p className={styles.tier_subtitle}>{tier.subtitle}</p>
                                                <p className={styles.tier_description}>{tier.description}</p>
                                            </div>
                                        </div>

                                        <div className={styles.tier_grid}>
                                            {/* Problems */}
                                            <div className={styles.tier_column}>
                                                <h4 className={styles.column_title}>🔴 Current Challenges</h4>
                                                <ul className={styles.tier_list}>
                                                    {tier.problems.map((problem, index) => (
                                                        <li key={index}>{problem}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Solutions */}
                                            <div className={styles.tier_column}>
                                                <h4 className={styles.column_title}>✅ ECOSWAECH Solutions</h4>
                                                <ul className={styles.tier_list}>
                                                    {tier.solutions.map((solution, index) => (
                                                        <li key={index}>{solution}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Benefits */}
                                            <div className={styles.tier_column}>
                                                <h4 className={styles.column_title}>🎯 Your Benefits</h4>
                                                <ul className={styles.tier_list}>
                                                    {tier.benefits.map((benefit, index) => (
                                                        <li key={index}>{benefit}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </section>

                {/* Core Services Section */}
                <section className={styles.services_section}>
                    <div className={styles.container}>
                        <h2 className={styles.section_title}>Our Core Services</h2>
                        <p className={styles.section_subtitle}>The infrastructure that powers our ecosystem</p>

                        <div className={styles.services_grid}>
                            {coreServices.map((service) => (
                                <div key={service.id} className={styles.service_card}>
                                    <div className={styles.service_icon}>{service.icon}</div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Value Exchange Section */}
                <section className={styles.value_section}>
                    <div className={styles.container}>
                        <h2 className={styles.section_title}>The Value Exchange</h2>
                        <p className={styles.section_subtitle}>What you bring, what we deliver</p>

                        <div className={styles.exchange_wrapper}>
                            {/* You Provide */}
                            <div className={styles.exchange_column}>
                                <h3 className={styles.exchange_title}>You Provide</h3>
                                <div className={styles.exchange_grid}>
                                    {valueExchange.map((item, index) => (
                                        <div key={index} className={styles.exchange_card}>
                                            <h4>{item.title}</h4>
                                            <p className={styles.exchange_subtitle}>{item.subtitle}</p>
                                            <ul className={styles.exchange_list}>
                                                {item.items.map((point, idx) => (
                                                    <li key={idx}>{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Arrow/Connection */}
                            <div className={styles.exchange_arrow}>
                                <div className={styles.arrow_icon}>↔️</div>
                                <span>Partnership</span>
                            </div>

                            {/* We Provide */}
                            <div className={styles.exchange_column}>
                                <h3 className={styles.exchange_title}>We Provide</h3>
                                <div className={styles.exchange_grid}>
                                    {weProvide.map((item, index) => (
                                        <div key={index} className={styles.exchange_card}>
                                            <h4>{item.title}</h4>
                                            <p className={styles.exchange_subtitle}>{item.subtitle}</p>
                                            <ul className={styles.exchange_list}>
                                                {item.items.map((point, idx) => (
                                                    <li key={idx}>{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partnership Models Section */}
                <section className={styles.models_section}>
                    <div className={styles.container}>
                        <h2 className={styles.section_title}>Partnership Models</h2>
                        <p className={styles.section_subtitle}>Flexible arrangements tailored to your business</p>

                        <div className={styles.models_grid}>
                            {partnershipModels.map((model, index) => (
                                <div key={index} className={styles.model_card}>
                                    <div className={styles.model_icon}>{model.icon}</div>
                                    <h3>{model.title}</h3>
                                    <p className={styles.revenue_badge}>{model.revenue}</p>
                                    <p className={styles.model_desc}>{model.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Implementation Timeline Section */}
                <section className={styles.timeline_section}>
                    <div className={styles.container}>
                        <h2 className={styles.section_title}>Partnership Timeline</h2>
                        <p className={styles.section_subtitle}>From agreement to first booking in 8 weeks</p>

                        <div className={styles.timeline}>
                            {timelineStages.map((stage, index) => (
                                <div key={index} className={styles.timeline_item}>
                                    <div className={styles.timeline_marker}>{index + 1}</div>
                                    <div className={styles.timeline_content}>
                                        <h4>{stage.stage}</h4>
                                        <p className={styles.stage_duration}>{stage.duration}</p>
                                        <ul className={styles.stage_items}>
                                            {stage.items.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Positioning Statement Section */}
                <section className={styles.positioning_section}>
                    <div className={styles.container}>
                        <div className={styles.positioning_card}>
                            <h2>Our Commitment to You</h2>
                            <p className={styles.positioning_text}>
                                ECOSWAECH doesn't compete with partners — we increase your utilization, uptime, and revenue 
                                while locking in long-term EV demand through mobility and energy integration.
                            </p>
                            <p className={styles.positioning_highlight}>
                                <strong>We grow when you grow.</strong>
                            </p>
                            <div className={styles.positioning_pillars}>
                                <div className={styles.pillar}>
                                    <span className={styles.pillar_icon}>🤝</span>
                                    <h4>Partner-First</h4>
                                    <p>Your success is our success</p>
                                </div>
                                <div className={styles.pillar}>
                                    <span className={styles.pillar_icon}>📈</span>
                                    <h4>Growth Focused</h4>
                                    <p>Scalable revenue models</p>
                                </div>
                                <div className={styles.pillar}>
                                    <span className={styles.pillar_icon}>🔒</span>
                                    <h4>Transparent</h4>
                                    <p>Clear terms and fair splits</p>
                                </div>
                                <div className={styles.pillar}>
                                    <span className={styles.pillar_icon}>⚡</span>
                                    <h4>Reliable</h4>
                                    <p>Guaranteed uptime & support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.cta_section}>
                    <div className={styles.container}>
                        <h2>Ready to Join the ECOSWAECH Ecosystem?</h2>
                        <p>Let's discuss how we can create mutual growth and sustainable EV infrastructure together.</p>
                        <div className={styles.cta_buttons}>
                            <Link to="/contact" className={styles.btn_primary}>Schedule a Discussion</Link>
                            <button className={styles.btn_secondary}>Download Partnership Proposal</button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Ecosystem;