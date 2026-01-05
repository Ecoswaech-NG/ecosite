import React from "react";
import { useParams, Link } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import styles from './ProductDetail.module.css';

function ProductDetail() {
    const { productId } = useParams();

    // Product data
    const productsData = {
        'marketplace': {
            id: 'marketplace',
            icon: '🛒',
            title: 'Ecoswaech EV Marketplace',
            tagline: 'The Central Hub for EV Commerce',
            description: 'Discover EV chargers, buy and list EVSE hardware, electric vehicles, and mobility services with AI-powered search and personalized recommendations.',
            fullDescription: 'The Ecoswaech EV Marketplace is a comprehensive B2C and B2B platform that connects buyers and sellers across the entire EV ecosystem. From drivers searching for the perfect charging station to fleet operators sourcing EVSE hardware, our AI-powered marketplace streamlines discovery, comparison, and transactions.',
            features: [
                {
                    icon: '🔍',
                    title: 'AI-Powered Search',
                    description: 'Intelligent search that understands driver needs, vehicle type, and charging requirements'
                },
                {
                    icon: '⭐',
                    title: 'Ratings & Reviews',
                    description: 'Community-driven reviews and ratings for chargers, products, and services'
                },
                {
                    icon: '💳',
                    title: 'Secure Payments',
                    description: 'Multiple payment options with fraud protection and escrow for major transactions'
                },
                {
                    icon: '🔔',
                    title: 'Smart Notifications',
                    description: 'Real-time alerts for availability, price drops, and personalized recommendations'
                },
                {
                    icon: '📊',
                    title: 'Analytics Dashboard',
                    description: 'Sellers get detailed insights into listings, customer behavior, and sales performance'
                },
                {
                    icon: '🌍',
                    title: 'Multi-Region Support',
                    description: 'Listing and discovery across all major EV markets in West Africa'
                }
            ],
            useCases: [
                {
                    title: 'Individual EV Drivers',
                    description: 'Find nearby charging stations, compare prices, read reviews, and make instant bookings'
                },
                {
                    title: 'Fleet Operators',
                    description: 'Bulk purchase EVSE hardware, source charging solutions, and manage subscriptions'
                },
                {
                    title: 'Hardware Manufacturers',
                    description: 'List and sell chargers, solar systems, and EV components to verified buyers'
                },
                {
                    title: 'Service Providers',
                    description: 'Offer installation, maintenance, and consulting services to marketplace users'
                }
            ],
            specs: [
                { label: 'Users', value: '50,000+' },
                { label: 'Listings', value: '5,000+' },
                { label: 'Categories', value: '15+' },
                { label: 'Transaction Volume', value: '₦500M+' }
            ],
            benefits: [
                'Single platform for all EV-related purchases',
                'AI recommendations save time and money',
                'Transparent pricing with no hidden fees',
                'Verified sellers and secure transactions',
                'Community ratings build trust',
                'Mobile-optimized for on-the-go browsing'
            ],
            techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe API', 'AWS'],
            pricing: 'Freemium - Free for buyers, commission-based for sellers'
        },
        'ecocharge': {
            id: 'ecocharge',
            icon: '⚡',
            title: 'EcoCharge Mobile App',
            tagline: 'Charging Made Simple',
            description: 'Public EV charging finder with navigation, payments, live availability, and community reviews.',
            fullDescription: 'EcoCharge is the go-to mobile app for EV drivers across Nigeria. It combines real-time charger availability, turn-by-turn navigation, seamless payments, and community insights into one intuitive experience. Never worry about finding a charger again.',
            features: [
                {
                    icon: '📍',
                    title: 'Real-Time Charger Map',
                    description: 'Live availability, charging speeds, and pricing at every location'
                },
                {
                    icon: '🗺️',
                    title: 'Smart Navigation',
                    description: 'Turn-by-turn directions with charging stops optimized for your route'
                },
                {
                    icon: '💰',
                    title: 'In-App Payments',
                    description: 'One-click payment, saved cards, and digital wallet integration'
                },
                {
                    icon: '⭐',
                    title: 'Community Reviews',
                    description: 'Real user feedback on charger quality, cleanliness, and reliability'
                },
                {
                    icon: '📱',
                    title: 'Remote Charging Control',
                    description: 'Start, stop, and monitor charging sessions from your phone'
                },
                {
                    icon: '📊',
                    title: 'Trip Analytics',
                    description: 'Track charging history, costs, and CO2 savings over time'
                }
            ],
            useCases: [
                {
                    title: 'Daily Commuters',
                    description: 'Find the nearest charger on your commute and plan trips efficiently'
                },
                {
                    title: 'Long-Distance Travelers',
                    description: 'Route planning with charging stops to maximize range and minimize downtime'
                },
                {
                    title: 'Business Travelers',
                    description: 'Integrate charging into business trips with expense tracking'
                },
                {
                    title: 'Environmental Advocates',
                    description: 'Track and share your CO2 savings and environmental impact'
                }
            ],
            specs: [
                { label: 'Active Users', value: '100,000+' },
                { label: 'Chargers', value: '5,000+' },
                { label: 'Transactions/Month', value: '50,000+' },
                { label: 'Rating', value: '4.8/5' }
            ],
            benefits: [
                'Find chargers in seconds, not hours',
                'Real-time availability prevents wasted trips',
                'Route optimization saves time and fuel',
                'Cashless, contactless transactions',
                'Community insights guide you to quality chargers',
                'Environmental impact tracking for eco-conscious drivers'
            ],
            techStack: ['React Native', 'Mapbox', 'Firebase', 'Stripe', 'AWS'],
            pricing: 'Free - Monetization through premium subscriptions and charger partnerships'
        },
        'fleet-platform': {
            id: 'fleet-platform',
            icon: '🚚',
            title: 'Fleet Energy & Charging Platform',
            tagline: 'Fleet Electrification Made Easy',
            description: 'Real-time dashboard for energy monitoring, route-based charging plans, admin/manager/driver access, and smart charger control.',
            fullDescription: 'The Fleet Energy & Charging Platform is built for fleet operators managing tens to thousands of electric vehicles. It provides comprehensive visibility into fleet energy consumption, optimizes charging schedules based on routes and grid conditions, and delivers ROI tracking at scale.',
            features: [
                {
                    icon: '📊',
                    title: 'Real-Time Energy Dashboard',
                    description: 'Monitor consumption, costs, and emissions across your entire fleet'
                },
                {
                    icon: '🛣️',
                    title: 'Route-Based Charging Plans',
                    description: 'AI-optimized charging schedules that align with vehicle routes and driver shifts'
                },
                {
                    icon: '👥',
                    title: 'Role-Based Access',
                    description: 'Separate dashboards for admins, managers, and drivers with appropriate permissions'
                },
                {
                    icon: '⚙️',
                    title: 'Smart Charger Control',
                    description: 'Remote charger management, load balancing, and grid-aware scheduling'
                },
                {
                    icon: '📈',
                    title: 'Cost Optimization',
                    description: 'Dynamic pricing, demand response, and renewable energy integration'
                },
                {
                    icon: '🔐',
                    title: 'Enterprise Security',
                    description: 'SSO, role-based access control, and audit logs for compliance'
                }
            ],
            useCases: [
                {
                    title: 'Ride-Sharing Fleets',
                    description: 'Manage charging for 100+ vehicles with predictable uptime and cost control'
                },
                {
                    title: 'Logistics Companies',
                    description: 'Optimize charging for delivery routes to maximize daily vehicle availability'
                },
                {
                    title: 'Public Transport',
                    description: 'Scale EV buses with smart scheduling and grid integration'
                },
                {
                    title: 'Corporate Fleets',
                    description: 'Monitor vehicle electrification progress and calculate carbon savings'
                }
            ],
            specs: [
                { label: 'Max Vehicles', value: 'Unlimited' },
                { label: 'API Endpoints', value: '50+' },
                { label: 'Uptime SLA', value: '99.9%' },
                { label: 'Support', value: '24/7' }
            ],
            benefits: [
                '30-40% reduction in fuel costs',
                'Predictable maintenance schedules',
                'Real-time visibility into fleet operations',
                'Automated compliance reporting',
                'Scalable from 10 to 10,000 vehicles',
                'Integration with existing fleet management systems'
            ],
            techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Apache Kafka', 'AWS'],
            pricing: 'Enterprise - Custom pricing based on fleet size and feature usage'
        },
        'smart-chargers': {
            id: 'smart-chargers',
            icon: '🔌',
            title: 'Ecoswaech Smart Chargers (EVSE Hardware)',
            tagline: 'Charging Hardware Built for Africa',
            description: 'Commercial, home, and fleet charging stations with OCPP support, remote monitoring, and load balancing for unstable grids.',
            fullDescription: 'Ecoswaech Smart Chargers are purpose-built EVSE (Electric Vehicle Supply Equipment) hardware designed for the African context. They combine reliability, affordability, and smart features with grid-aware load balancing and remote management capabilities.',
            features: [
                {
                    icon: '⚡',
                    title: 'AC & DC Variants',
                    description: '7kW home chargers to 50kW+ DC fast chargers for every use case'
                },
                {
                    icon: '🔐',
                    title: 'OCPP 1.6 Compliant',
                    description: 'Industry-standard protocol for remote management and integration'
                },
                {
                    icon: '🌍',
                    title: 'Grid-Aware Load Balancing',
                    description: 'Automatically adjusts charging power based on grid stability'
                },
                {
                    icon: '📡',
                    title: 'Remote Monitoring',
                    description: 'Real-time diagnostics, firmware updates, and predictive maintenance'
                },
                {
                    icon: '☀️',
                    title: 'Solar Integration',
                    description: 'Smart charging synchronized with solar generation for off-grid operation'
                },
                {
                    icon: '🔒',
                    title: 'Robust & Weather-Resistant',
                    description: 'Industrial-grade construction for Nigeria\'s climate conditions'
                }
            ],
            useCases: [
                {
                    title: 'Residential Charging',
                    description: '7-11kW home chargers with app control and usage tracking'
                },
                {
                    title: 'Public Charging Networks',
                    description: '22-50kW chargers for commercial locations and partnerships'
                },
                {
                    title: 'Fleet Depots',
                    description: 'High-power charging infrastructure with load balancing for fleet operations'
                },
                {
                    title: 'Solar-Powered Stations',
                    description: 'Hybrid systems combining solar panels and battery storage for off-grid charging'
                }
            ],
            specs: [
                { label: 'AC Chargers', value: '7kW, 11kW, 22kW' },
                { label: 'DC Chargers', value: '50kW, 150kW, 350kW' },
                { label: 'Compliance', value: 'OCPP 1.6, CE, RoHS' },
                { label: 'Warranty', value: '5 Years' }
            ],
            benefits: [
                'Grid-stable charging even with unstable power supply',
                'Remote diagnostics reduce downtime',
                'Solar integration lowers operating costs',
                'Modular design supports expansion',
                'Nigerian warranty and support',
                'ROI payback in 2-3 years for commercial deployment'
            ],
            techStack: ['Embedded Linux', 'OCPP Protocol', 'IoT Connectivity', 'Cloud Management'],
            pricing: 'Hardware + Installation - Varies by model and location'
        },
        'ecomenter': {
            id: 'ecomenter',
            icon: '📡',
            title: 'EcoMeter IoT Gateway',
            tagline: 'Smarter Energy, Real-Time Insights',
            description: 'Edge device enabling power analytics, grid health telemetry, predictive maintenance, and AI-based energy optimization.',
            fullDescription: 'EcoMeter is an intelligent IoT gateway that sits between charging infrastructure and the grid. It collects real-time power data, detects grid anomalies, predicts maintenance needs, and optimizes charging to align with grid conditions and renewable energy availability.',
            features: [
                {
                    icon: '📊',
                    title: 'Real-Time Power Analytics',
                    description: 'Sub-second monitoring of voltage, current, frequency, and harmonics'
                },
                {
                    icon: '🌐',
                    title: 'Grid Health Telemetry',
                    description: 'Detect and report grid instability patterns for utility coordination'
                },
                {
                    icon: '🔮',
                    title: 'Predictive Maintenance',
                    description: 'AI algorithms predict charger and grid equipment failures before they occur'
                },
                {
                    icon: '⚙️',
                    title: 'Energy Optimization',
                    description: 'Smart algorithms align charging with renewable generation and grid demand'
                },
                {
                    icon: '☀️',
                    title: 'Solar Integration',
                    description: 'Seamlessly integrate and balance solar generation with charger loads'
                },
                {
                    icon: '🔐',
                    title: 'Edge Computing',
                    description: 'All processing happens locally for privacy, latency, and reliability'
                }
            ],
            useCases: [
                {
                    title: 'Grid Operators',
                    description: 'Monitor EV charging impact on grid and coordinate demand response'
                },
                {
                    title: 'Charging Network Operators',
                    description: 'Predict maintenance needs and optimize charger utilization'
                },
                {
                    title: 'Solar Providers',
                    description: 'Match solar generation with EV charging demand in real-time'
                },
                {
                    title: 'Enterprise Facilities',
                    description: 'Monitor energy consumption, emissions, and optimize site-wide efficiency'
                }
            ],
            specs: [
                { label: 'Data Points', value: '50+ per charger' },
                { label: 'Update Frequency', value: '1 sec' },
                { label: 'Accuracy', value: '±0.5%' },
                { label: 'Edge Capacity', value: '100 chargers' }
            ],
            benefits: [
                'Prevent grid overload and instability',
                'Reduce charger maintenance costs by 40%',
                'Maximize solar generation utilization',
                'Real-time visibility into energy patterns',
                'Support renewable energy integration',
                'Enable smart demand response programs'
            ],
            techStack: ['Edge Computing', 'MQTT', 'Machine Learning', 'Time-Series DB', 'Cloud APIs'],
            pricing: 'SaaS + Hardware - Tiered pricing based on data volume and features'
        }
    };

    const product = productsData[productId];

    if (!product) {
        return (
            <div>
                <Nav />
                <div className={styles.not_found}>
                    <h2>Product Not Found</h2>
                    <p>Sorry, the product you're looking for doesn't exist.</p>
                    <Link to="/products" className={styles.btn_back}>Back to Products</Link>
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
                <div className={styles.hero_overlay}></div>
                <div className={styles.hero_content}>
                    <Link to="/products" className={styles.breadcrumb}>← Back to Products</Link>
                    <div className={styles.hero_product}>
                        <div className={styles.product_hero_icon}>{product.icon}</div>
                        <h1 className={styles.hero_title}>{product.title}</h1>
                        <p className={styles.hero_tagline}>{product.tagline}</p>
                        <p className={styles.hero_description}>{product.fullDescription}</p>
                    </div>
                </div>
            </div>

            <main className={styles.main_content}>
                {/* Features Section */}
                <section className={styles.features_section}>
                    <div className={styles.container}>
                        <h2 className={styles.section_title}>Key Features</h2>
                        <div className={styles.features_grid}>
                            {product.features.map((feature, index) => (
                                <div key={index} className={styles.feature_card}>
                                    <div className={styles.feature_icon}>{feature.icon}</div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Use Cases Section */}
                <section className={styles.usecases_section}>
                    <div className={styles.container}>
                        <h2 className={styles.section_title}>Who Benefits</h2>
                        <div className={styles.usecases_grid}>
                            {product.useCases.map((useCase, index) => (
                                <div key={index} className={styles.usecase_card}>
                                    <h3>{useCase.title}</h3>
                                    <p>{useCase.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Specs Section */}
                <section className={styles.specs_section}>
                    <div className={styles.container}>
                        <h2 className={styles.section_title}>By The Numbers</h2>
                        <div className={styles.specs_grid}>
                            {product.specs.map((spec, index) => (
                                <div key={index} className={styles.spec_card}>
                                    <div className={styles.spec_value}>{spec.value}</div>
                                    <div className={styles.spec_label}>{spec.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className={styles.benefits_section}>
                    <div className={styles.container}>
                        <h2 className={styles.section_title}>Your Benefits</h2>
                        <div className={styles.benefits_list}>
                            {product.benefits.map((benefit, index) => (
                                <div key={index} className={styles.benefit_item}>
                                    <span className={styles.benefit_check}>✓</span>
                                    <p>{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tech Stack Section */}
                <section className={styles.tech_section}>
                    <div className={styles.container}>
                        <h2 className={styles.section_title}>Built With</h2>
                        <div className={styles.tech_stack}>
                            {product.techStack.map((tech, index) => (
                                <div key={index} className={styles.tech_badge}>
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className={styles.pricing_section}>
                    <div className={styles.container}>
                        <h2 className={styles.section_title}>Pricing</h2>
                        <div className={styles.pricing_card}>
                            <p className={styles.pricing_text}>{product.pricing}</p>
                            <Link to="/contact" className={styles.btn_get_started}>Get Started Today</Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.cta_section}>
                    <div className={styles.container}>
                        <h2>Ready to Get Started?</h2>
                        <p>Let's discuss how {product.title} can transform your business.</p>
                        <div className={styles.cta_buttons}>
                            <Link to="/contact" className={styles.btn_primary}>Schedule a Demo</Link>
                            <button className={styles.btn_secondary}>Download Datasheet</button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default ProductDetail;
