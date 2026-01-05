import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import TestDriveBookingModal from './TestDriveBookingModal';
import styles from './TestDriveEV.module.css';

function TestDriveEV() {
    const [selectedManufacturer, setSelectedManufacturer] = useState(null);
    const [showBookingModal, setShowBookingModal] = useState(false);

    // EV Manufacturers/Dealerships registered with ECOSWAECH
    const manufacturers = [
        {
            id: 1,
            name: "Tesla Nigeria",
            logo: "⚡",
            description: "Premium electric vehicles with cutting-edge technology",
            location: "Lagos, Nigeria",
            vehicles: [
                { id: 1, name: "Tesla Model 3", type: "Sedan", year: 2024, price: "₦45M - ₦65M" },
                { id: 2, name: "Tesla Model Y", type: "SUV", year: 2024, price: "₦60M - ₦85M" },
                { id: 3, name: "Tesla Model S", type: "Luxury Sedan", year: 2024, price: "₦80M - ₦120M" }
            ],
            rating: 4.8,
            reviews: 524,
            contact: "+234 (0) 701 234 5678"
        },
        {
            id: 2,
            name: "BYD Nigeria Limited",
            logo: "🔋",
            description: "Affordable and reliable EV solutions for Nigerian market",
            location: "Abuja, Nigeria",
            vehicles: [
                { id: 1, name: "BYD Seagull", type: "Hatchback", year: 2024, price: "₦8M - ₦12M" },
                { id: 2, name: "BYD Yuan Plus", type: "SUV", year: 2024, price: "₦18M - ₦28M" },
                { id: 3, name: "BYD Song Plus DM-i", type: "PHEV", year: 2024, price: "₦15M - ₦22M" }
            ],
            rating: 4.6,
            reviews: 312,
            contact: "+234 (0) 702 345 6789"
        },
        {
            id: 3,
            name: "Volkswagen EV Hub",
            logo: "🚗",
            description: "European engineering meets African sustainability",
            location: "Port Harcourt, Nigeria",
            vehicles: [
                { id: 1, name: "VW ID.4", type: "Electric SUV", year: 2024, price: "₦35M - ₦50M" },
                { id: 2, name: "VW ID.5", type: "Coupe SUV", year: 2024, price: "₦40M - ₦58M" },
                { id: 3, name: "VW ID.3", type: "Hatchback", year: 2024, price: "₦25M - ₦38M" }
            ],
            rating: 4.7,
            reviews: 287,
            contact: "+234 (0) 703 456 7890"
        },
        {
            id: 4,
            name: "Nissan EV Center",
            logo: "🌿",
            description: "Pioneering electric mobility with proven reliability",
            location: "Kano, Nigeria",
            vehicles: [
                { id: 1, name: "Nissan Leaf", type: "Compact Sedan", year: 2024, price: "₦20M - ₦30M" },
                { id: 2, name: "Nissan Ariya", type: "Electric SUV", year: 2024, price: "₦32M - ₦48M" },
                { id: 3, name: "Nissan e-NV200", type: "Commercial EV", year: 2024, price: "₦18M - ₦25M" }
            ],
            rating: 4.5,
            reviews: 198,
            contact: "+234 (0) 704 567 8901"
        },
        {
            id: 5,
            name: "Hyundai Ioniq Motors",
            logo: "⚙️",
            description: "Next-generation electric vehicles with smart features",
            location: "Ibadan, Nigeria",
            vehicles: [
                { id: 1, name: "Hyundai Ioniq 6", type: "Electric Sedan", year: 2024, price: "₦28M - ₦42M" },
                { id: 2, name: "Hyundai Ioniq 5", type: "Electric SUV", year: 2024, price: "₦38M - ₦55M" },
                { id: 3, name: "Hyundai Kona Electric", type: "Compact SUV", year: 2024, price: "₦22M - ₦35M" }
            ],
            rating: 4.7,
            reviews: 256,
            contact: "+234 (0) 705 678 9012"
        },
        {
            id: 6,
            name: "Chevrolet EV Solutions",
            logo: "🔌",
            description: "American innovation in electric mobility",
            location: "Calabar, Nigeria",
            vehicles: [
                { id: 1, name: "Chevrolet Bolt EV", type: "Hatchback", year: 2024, price: "₦26M - ₦39M" },
                { id: 2, name: "Chevrolet Equinox EV", type: "Compact SUV", year: 2024, price: "₦30M - ₦44M" },
                { id: 3, name: "Chevrolet Blazer EV", type: "Mid-size SUV", year: 2024, price: "₦35M - ₦50M" }
            ],
            rating: 4.4,
            reviews: 167,
            contact: "+234 (0) 706 789 0123"
        }
    ];

    const handleBookTestDrive = (manufacturer) => {
        setSelectedManufacturer(manufacturer);
        setShowBookingModal(true);
    };

    const handleCloseModal = () => {
        setShowBookingModal(false);
        setSelectedManufacturer(null);
    };

    return (
        <div>
            <Nav />

            {/* Hero Section */}
            <div className={styles.hero_section}>
                <div className={styles.hero_content}>
                    <small className={styles.hero_tag}>TEST DRIVE</small>
                    <h1 className={styles.hero_title}>Experience the Future of Mobility</h1>
                    <p className={styles.hero_description}>
                        Test drive premium electric vehicles from ECOSWAECH's trusted partner dealerships across Nigeria. 
                        Discover which EV is perfect for you before making your purchase decision.
                    </p>
                </div>
            </div>

            <main className={styles.main_content}>
                {/* Filter/Search Section */}
                <section className={styles.filter_section}>
                    <div className={styles.filter_container}>
                        <h2 className={styles.section_title}>Browse EV Dealers</h2>
                        <p className={styles.section_subtitle}>Select your preferred dealership to explore available models and book a test drive</p>
                    </div>
                </section>

                {/* Manufacturers Grid */}
                <section className={styles.manufacturers_section}>
                    <div className={styles.manufacturers_container}>
                        {manufacturers.map((manufacturer) => (
                            <Link key={manufacturer.id} to={`/testdrive-ev/dealer/${manufacturer.id}`} className={styles.card_link}>
                                <article className={styles.manufacturer_card}>
                                    <div className={styles.card_header}>
                                        <div className={styles.logo_circle}>{manufacturer.logo}</div>
                                        <div className={styles.rating}>
                                            <span className={styles.stars}>★★★★★</span>
                                            <span className={styles.rating_text}>{manufacturer.rating}</span>
                                            <span className={styles.reviews}>({manufacturer.reviews})</span>
                                        </div>
                                    </div>

                                    <div className={styles.card_body}>
                                        <h3 className={styles.manufacturer_name}>{manufacturer.name}</h3>
                                        <p className={styles.manufacturer_desc}>{manufacturer.description}</p>

                                        <div className={styles.location_info}>
                                            <span className={styles.location_icon}>📍</span>
                                            <span className={styles.location_text}>{manufacturer.location}</span>
                                        </div>

                                        <div className={styles.vehicles_preview}>
                                            <h4 className={styles.vehicles_title}>Featured Models:</h4>
                                            <ul className={styles.vehicles_list}>
                                                {manufacturer.vehicles.map((vehicle) => (
                                                    <li key={vehicle.id} className={styles.vehicle_item}>
                                                        <span className={styles.vehicle_name}>{vehicle.name}</span>
                                                        <span className={styles.vehicle_type}>{vehicle.type}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className={styles.contact_info}>
                                            <span className={styles.contact_icon}>📞</span>
                                            <span className={styles.contact_text}>{manufacturer.contact}</span>
                                        </div>
                                    </div>

                                    <div className={styles.card_footer}>
                                        <button 
                                            className={styles.btn_test_drive}
                                            onClick={() => handleBookTestDrive(manufacturer)}
                                        >
                                            Book Test Drive
                                        </button>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Benefits Section */}
                <section className={styles.benefits_section}>
                    <div className={styles.benefits_container}>
                        <h2 className={styles.benefits_title}>Why Test Drive with ECOSWAECH Partners?</h2>
                        <div className={styles.benefits_grid}>
                            <div className={styles.benefit_card}>
                                <div className={styles.benefit_icon}>⚡</div>
                                <h4>Expert Guidance</h4>
                                <p>Professional consultants help you understand EV technology and find the perfect fit</p>
                            </div>
                            <div className={styles.benefit_card}>
                                <div className={styles.benefit_icon}>🔒</div>
                                <h4>Verified Dealers</h4>
                                <p>All dealerships are registered and verified partners of ECOSWAECH</p>
                            </div>
                            <div className={styles.benefit_card}>
                                <div className={styles.benefit_icon}>💰</div>
                                <h4>Best Pricing</h4>
                                <p>Access competitive rates and exclusive partnership benefits</p>
                            </div>
                            <div className={styles.benefit_card}>
                                <div className={styles.benefit_icon}>🌍</div>
                                <h4>Nationwide Coverage</h4>
                                <p>Partner dealerships across major cities in Nigeria</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.cta_section}>
                    <div className={styles.cta_content}>
                        <h2>Ready to Go Electric?</h2>
                        <p>Book your test drive today and experience the future of sustainable transportation</p>
                        <button className={styles.btn_primary}>Get Started Now</button>
                    </div>
                </section>
            </main>

            {/* Booking Modal */}
            {showBookingModal && (
                <TestDriveBookingModal 
                    manufacturer={selectedManufacturer}
                    onClose={handleCloseModal}
                />
            )}

            <Footer />
        </div>
    );
}

export default TestDriveEV;