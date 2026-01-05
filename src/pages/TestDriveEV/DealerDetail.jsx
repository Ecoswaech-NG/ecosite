import React, { useState } from "react";
import { useParams, Link } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import TestDriveBookingModal from './TestDriveBookingModal';
import styles from './DealerDetail.module.css';

function DealerDetail() {
    const { dealerId } = useParams();
    const [showBookingModal, setShowBookingModal] = useState(false);

    // EV Manufacturers/Dealerships data
    const dealersData = {
        '1': {
            id: 1,
            name: "Tesla Nigeria",
            logo: "⚡",
            description: "Premium electric vehicles with cutting-edge technology and innovation",
            fullDescription: "Tesla Nigeria is committed to accelerating the world's transition to sustainable energy. We offer premium electric vehicles with cutting-edge technology, exceptional performance, and zero-emission driving experience. Our dealership provides comprehensive support from test drives to after-sales service.",
            location: "Lagos, Nigeria",
            address: "123 Victoria Island, Lagos, 106104, Nigeria",
            coordinates: "6.4281° N, 3.4219° E",
            vehicles: [
                { id: 1, name: "Tesla Model 3", type: "Sedan", year: 2024, price: "₦45M - ₦65M", range: "320-380km", acceleration: "3.1s (0-100km/h)", image: "🚗" },
                { id: 2, name: "Tesla Model Y", type: "SUV", year: 2024, price: "₦60M - ₦85M", range: "330-430km", acceleration: "4.8s (0-100km/h)", image: "🚙" },
                { id: 3, name: "Tesla Model S", type: "Luxury Sedan", year: 2024, price: "₦80M - ₦120M", range: "350-440km", acceleration: "2.3s (0-100km/h)", image: "🏎️" },
                { id: 4, name: "Tesla Model X", type: "Luxury SUV", year: 2024, price: "₦85M - ₦125M", range: "340-410km", acceleration: "2.5s (0-100km/h)", image: "🚙" }
            ],
            rating: 4.8,
            reviews: 524,
            contact: "+234 (0) 701 234 5678",
            email: "contact@teslanigeria.com",
            hours: "Monday - Sunday: 9:00 AM - 6:00 PM",
            services: [
                "Test Drive",
                "Vehicle Customization",
                "Financing Options",
                "Trade-in Program",
                "Maintenance & Service",
                "Home Delivery",
                "Warranty Coverage"
            ],
            amenities: [
                "Modern Showroom",
                "Test Track",
                "Charging Station",
                "Service Center",
                "Lounge Area",
                "Vehicle Delivery Center"
            ]
        },
        '2': {
            id: 2,
            name: "BYD Nigeria Limited",
            logo: "🔋",
            description: "Affordable and reliable EV solutions for Nigerian market",
            fullDescription: "BYD Nigeria Limited brings world-class electric vehicle technology at competitive prices. As the world's largest EV manufacturer, BYD combines affordability with reliability, making electric vehicles accessible to every Nigerian. Our focus is on practical, durable vehicles for both personal and commercial use.",
            location: "Abuja, Nigeria",
            address: "456 Central Area, Abuja, 900001, Nigeria",
            coordinates: "9.0765° N, 7.3986° E",
            vehicles: [
                { id: 1, name: "BYD Seagull", type: "Hatchback", year: 2024, price: "₦8M - ₦12M", range: "200-250km", acceleration: "9.3s (0-100km/h)", image: "🚗" },
                { id: 2, name: "BYD Yuan Plus", type: "SUV", year: 2024, price: "₦18M - ₦28M", range: "280-380km", acceleration: "7.9s (0-100km/h)", image: "🚙" },
                { id: 3, name: "BYD Song Plus DM-i", type: "PHEV", year: 2024, price: "₦15M - ₦22M", range: "350-450km", acceleration: "8.5s (0-100km/h)", image: "🚙" },
                { id: 4, name: "BYD Atto 3", type: "Compact SUV", year: 2024, price: "₦20M - ₦30M", range: "300-400km", acceleration: "8.2s (0-100km/h)", image: "🚙" }
            ],
            rating: 4.6,
            reviews: 312,
            contact: "+234 (0) 702 345 6789",
            email: "info@bydnigeria.com",
            hours: "Monday - Saturday: 8:30 AM - 6:00 PM, Sunday: 10:00 AM - 4:00 PM",
            services: [
                "Test Drive",
                "Fleet Sales",
                "Affordable Financing",
                "Trade-in Program",
                "24/7 Roadside Assistance",
                "Mobile Service Unit",
                "Extended Warranty"
            ],
            amenities: [
                "Spacious Showroom",
                "Commercial Fleet Center",
                "Service Workshop",
                "EV Charging Hub",
                "Customer Lounge",
                "Parts Department"
            ]
        },
        '3': {
            id: 3,
            name: "Volkswagen EV Hub",
            logo: "🚗",
            description: "European engineering meets African sustainability",
            fullDescription: "Volkswagen EV Hub brings German engineering excellence to Africa. Our commitment to sustainability and innovation ensures that every vehicle meets the highest standards of quality, safety, and environmental responsibility. Experience the perfect blend of European precision and African market understanding.",
            location: "Port Harcourt, Nigeria",
            address: "789 GRA, Port Harcourt, 500001, Nigeria",
            coordinates: "4.7711° N, 7.0156° E",
            vehicles: [
                { id: 1, name: "VW ID.4", type: "Electric SUV", year: 2024, price: "₦35M - ₦50M", range: "290-370km", acceleration: "6.2s (0-100km/h)", image: "🚙" },
                { id: 2, name: "VW ID.5", type: "Coupe SUV", year: 2024, price: "₦40M - ₦58M", range: "300-380km", acceleration: "6.0s (0-100km/h)", image: "🚙" },
                { id: 3, name: "VW ID.3", type: "Hatchback", year: 2024, price: "₦25M - ₦38M", range: "260-330km", acceleration: "7.5s (0-100km/h)", image: "🚗" },
                { id: 4, name: "VW ID.Buzz", type: "Electric Van", year: 2024, price: "₦45M - ₦62M", range: "280-350km", acceleration: "10.0s (0-100km/h)", image: "🚐" }
            ],
            rating: 4.7,
            reviews: 287,
            contact: "+234 (0) 703 456 7890",
            email: "evhub@volkswagennigeria.com",
            hours: "Monday - Friday: 9:00 AM - 5:30 PM, Saturday: 9:00 AM - 2:00 PM",
            services: [
                "Test Drive",
                "Custom Configuration",
                "Financing Plans",
                "Trade-in Service",
                "Factory Service",
                "Genuine Parts",
                "Premium Warranty"
            ],
            amenities: [
                "Premium Showroom",
                "Executive Test Drive Area",
                "Service Center",
                "Charging Infrastructure",
                "VIP Lounge",
                "Coffee Bar"
            ]
        },
        '4': {
            id: 4,
            name: "Nissan EV Center",
            logo: "🌿",
            description: "Pioneering electric mobility with proven reliability",
            fullDescription: "Nissan EV Center is dedicated to pioneering electric mobility across Africa with proven reliability and innovation. With decades of automotive experience, Nissan brings trusted quality to the EV market. Our vehicles combine fuel efficiency, performance, and durability for the modern driver.",
            location: "Kano, Nigeria",
            address: "321 Zaria Road, Kano, 700241, Nigeria",
            coordinates: "11.9833° N, 8.6753° E",
            vehicles: [
                { id: 1, name: "Nissan Leaf", type: "Compact Sedan", year: 2024, price: "₦20M - ₦30M", range: "240-310km", acceleration: "7.9s (0-100km/h)", image: "🚗" },
                { id: 2, name: "Nissan Ariya", type: "Electric SUV", year: 2024, price: "₦32M - ₦48M", range: "310-400km", acceleration: "5.9s (0-100km/h)", image: "🚙" },
                { id: 3, name: "Nissan e-NV200", type: "Commercial EV", year: 2024, price: "₦18M - ₦25M", range: "200-270km", acceleration: "11.5s (0-100km/h)", image: "🚐" },
                { id: 4, name: "Nissan Qashqai e-Power", type: "Compact SUV", year: 2024, price: "₦25M - ₦35M", range: "280-350km", acceleration: "8.1s (0-100km/h)", image: "🚙" }
            ],
            rating: 4.5,
            reviews: 198,
            contact: "+234 (0) 704 567 8901",
            email: "evcenter@nissannigeria.com",
            hours: "Monday - Saturday: 8:00 AM - 6:00 PM, Sunday: 12:00 PM - 5:00 PM",
            services: [
                "Test Drive",
                "Commercial Fleet Solutions",
                "Financing Options",
                "Trade-in Service",
                "Maintenance Program",
                "Spare Parts",
                "Extended Warranty"
            ],
            amenities: [
                "Modern Showroom",
                "Commercial Center",
                "Service Department",
                "Charging Stations",
                "Customer Lounge",
                "Vehicle Waiting Area"
            ]
        },
        '5': {
            id: 5,
            name: "Hyundai Ioniq Motors",
            logo: "⚙️",
            description: "Next-generation electric vehicles with smart features",
            fullDescription: "Hyundai Ioniq Motors brings next-generation electric vehicles with smart features and cutting-edge technology. Our commitment to innovation, sustainability, and customer satisfaction makes us a leader in the EV industry. Experience the perfect balance of performance, comfort, and connectivity.",
            location: "Ibadan, Nigeria",
            address: "654 Dugbe, Ibadan, 200254, Nigeria",
            coordinates: "7.3957° N, 3.9369° E",
            vehicles: [
                { id: 1, name: "Hyundai Ioniq 6", type: "Electric Sedan", year: 2024, price: "₦28M - ₦42M", range: "300-380km", acceleration: "5.1s (0-100km/h)", image: "🚗" },
                { id: 2, name: "Hyundai Ioniq 5", type: "Electric SUV", year: 2024, price: "₦38M - ₦55M", range: "320-410km", acceleration: "4.6s (0-100km/h)", image: "🚙" },
                { id: 3, name: "Hyundai Kona Electric", type: "Compact SUV", year: 2024, price: "₦22M - ₦35M", range: "250-330km", acceleration: "7.6s (0-100km/h)", image: "🚙" },
                { id: 4, name: "Hyundai Ioniq 7", type: "Electric 7-Seater", year: 2024, price: "₦45M - ₦65M", range: "340-420km", acceleration: "6.5s (0-100km/h)", image: "🚐" }
            ],
            rating: 4.7,
            reviews: 256,
            contact: "+234 (0) 705 678 9012",
            email: "motors@hyundainigeria.com",
            hours: "Monday - Sunday: 9:00 AM - 6:00 PM",
            services: [
                "Test Drive",
                "Smart Configuration",
                "Flexible Financing",
                "Trade-in Program",
                "Smart Service",
                "Original Parts",
                "Comprehensive Warranty"
            ],
            amenities: [
                "Smart Showroom",
                "Digital Test Drive Center",
                "Service Hub",
                "Fast Charging Station",
                "Premium Lounge",
                "Tech Center"
            ]
        },
        '6': {
            id: 6,
            name: "Chevrolet EV Solutions",
            logo: "🔌",
            description: "American innovation in electric mobility",
            fullDescription: "Chevrolet EV Solutions brings American innovation and reliability to the African EV market. With a legacy of automotive excellence, Chevrolet combines powerful performance with practical efficiency. Our vehicles are designed for those who demand quality, style, and sustainability.",
            location: "Calabar, Nigeria",
            address: "987 Akim Road, Calabar, 540281, Nigeria",
            coordinates: "4.9506° N, 8.3276° E",
            vehicles: [
                { id: 1, name: "Chevrolet Bolt EV", type: "Hatchback", year: 2024, price: "₦26M - ₦39M", range: "260-330km", acceleration: "6.5s (0-100km/h)", image: "🚗" },
                { id: 2, name: "Chevrolet Equinox EV", type: "Compact SUV", year: 2024, price: "₦30M - ₦44M", range: "280-360km", acceleration: "6.2s (0-100km/h)", image: "🚙" },
                { id: 3, name: "Chevrolet Blazer EV", type: "Mid-size SUV", year: 2024, price: "₦35M - ₦50M", range: "300-380km", acceleration: "5.8s (0-100km/h)", image: "🚙" },
                { id: 4, name: "Chevrolet Silverado EV", type: "Electric Pickup", year: 2024, price: "₦48M - ₦68M", range: "320-400km", acceleration: "6.0s (0-100km/h)", image: "🚐" }
            ],
            rating: 4.4,
            reviews: 167,
            contact: "+234 (0) 706 789 0123",
            email: "evsolutions@chevroletnigeria.com",
            hours: "Monday - Saturday: 8:30 AM - 5:30 PM, Sunday: 11:00 AM - 3:00 PM",
            services: [
                "Test Drive",
                "Powertrain Education",
                "Financing Solutions",
                "Trade-in Program",
                "Maintenance Plans",
                "OEM Parts",
                "Lifetime Support"
            ],
            amenities: [
                "Innovation Showroom",
                "Performance Track",
                "Service Center",
                "DC Charging Station",
                "Hospitality Lounge",
                "Kids Zone"
            ]
        }
    };

    const dealer = dealersData[dealerId];

    if (!dealer) {
        return (
            <div>
                <Nav />
                <div className={styles.not_found}>
                    <h2>Dealer Not Found</h2>
                    <p>Sorry, the dealer you're looking for doesn't exist.</p>
                    <Link to="/testdrive-ev" className={styles.btn_back}>Back to Dealers</Link>
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
                    <Link to="/testdrive-ev" className={styles.breadcrumb}>← Back to Dealers</Link>
                    <div className={styles.hero_dealer_info}>
                        <div className={styles.dealer_logo}>{dealer.logo}</div>
                        <h1 className={styles.hero_title}>{dealer.name}</h1>
                        <p className={styles.hero_subtitle}>{dealer.description}</p>
                    </div>
                </div>
            </div>

            <main className={styles.main_content}>
                {/* Dealer Information Section */}
                <section className={styles.dealer_info_section}>
                    <div className={styles.container}>
                        <div className={styles.info_grid}>
                            {/* Left Column - Details */}
                            <div className={styles.info_left}>
                                <div className={styles.info_card}>
                                    <h3>About {dealer.name}</h3>
                                    <p>{dealer.fullDescription}</p>
                                </div>

                                <div className={styles.info_card}>
                                    <h3>Location & Hours</h3>
                                    <div className={styles.detail_row}>
                                        <span className={styles.label}>Address:</span>
                                        <span className={styles.value}>{dealer.address}</span>
                                    </div>
                                    <div className={styles.detail_row}>
                                        <span className={styles.label}>Hours:</span>
                                        <span className={styles.value}>{dealer.hours}</span>
                                    </div>
                                    <div className={styles.detail_row}>
                                        <span className={styles.label}>Coordinates:</span>
                                        <span className={styles.value}>{dealer.coordinates}</span>
                                    </div>
                                </div>

                                <div className={styles.info_card}>
                                    <h3>Contact Information</h3>
                                    <div className={styles.detail_row}>
                                        <span className={styles.label}>📞 Phone:</span>
                                        <span className={styles.value}>{dealer.contact}</span>
                                    </div>
                                    <div className={styles.detail_row}>
                                        <span className={styles.label}>📧 Email:</span>
                                        <span className={styles.value}>{dealer.email}</span>
                                    </div>
                                </div>

                                {/* Services */}
                                <div className={styles.info_card}>
                                    <h3>Services We Offer</h3>
                                    <ul className={styles.services_list}>
                                        {dealer.services.map((service, index) => (
                                            <li key={index}>✓ {service}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Amenities */}
                                <div className={styles.info_card}>
                                    <h3>Amenities</h3>
                                    <ul className={styles.amenities_list}>
                                        {dealer.amenities.map((amenity, index) => (
                                            <li key={index}>✓ {amenity}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Right Column - Quick Stats */}
                            <div className={styles.info_right}>
                                <div className={styles.stats_card}>
                                    <div className={styles.stat}>
                                        <div className={styles.stat_value}>{dealer.rating}</div>
                                        <div className={styles.stat_label}>Rating</div>
                                        <div className={styles.stat_stars}>★★★★★</div>
                                    </div>
                                    <div className={styles.stat}>
                                        <div className={styles.stat_value}>{dealer.reviews}</div>
                                        <div className={styles.stat_label}>Reviews</div>
                                    </div>
                                    <div className={styles.stat}>
                                        <div className={styles.stat_value}>{dealer.vehicles.length}</div>
                                        <div className={styles.stat_label}>Models</div>
                                    </div>
                                </div>

                                <button 
                                    className={styles.btn_book_drive}
                                    onClick={() => setShowBookingModal(true)}
                                >
                                    Book Test Drive Now
                                </button>

                                <div className={styles.contact_card}>
                                    <h4>Need Help?</h4>
                                    <p>Call us or visit our showroom to learn more about our vehicles and services.</p>
                                    <a href={`tel:${dealer.contact}`} className={styles.btn_call}>{dealer.contact}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vehicles Section */}
                <section className={styles.vehicles_section}>
                    <div className={styles.container}>
                        <h2 className={styles.section_title}>Available Models</h2>
                        <div className={styles.vehicles_grid}>
                            {dealer.vehicles.map((vehicle) => (
                                <article key={vehicle.id} className={styles.vehicle_card}>
                                    <div className={styles.vehicle_image}>{vehicle.image}</div>
                                    <div className={styles.vehicle_content}>
                                        <h3>{vehicle.name}</h3>
                                        <p className={styles.vehicle_type}>{vehicle.type}</p>
                                        
                                        <div className={styles.specs}>
                                            <div className={styles.spec}>
                                                <span className={styles.spec_label}>Range</span>
                                                <span className={styles.spec_value}>{vehicle.range}</span>
                                            </div>
                                            <div className={styles.spec}>
                                                <span className={styles.spec_label}>Acceleration</span>
                                                <span className={styles.spec_value}>{vehicle.acceleration}</span>
                                            </div>
                                        </div>

                                        <div className={styles.vehicle_price}>{vehicle.price}</div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.cta_section}>
                    <div className={styles.container}>
                        <h2>Ready to Test Drive?</h2>
                        <p>Explore our vehicles and schedule your test drive today</p>
                        <button 
                            className={styles.btn_primary}
                            onClick={() => setShowBookingModal(true)}
                        >
                            Book Your Test Drive
                        </button>
                    </div>
                </section>
            </main>

            {/* Booking Modal */}
            {showBookingModal && (
                <TestDriveBookingModal 
                    manufacturer={dealer}
                    onClose={() => setShowBookingModal(false)}
                />
            )}

            <Footer />
        </div>
    );
}

export default DealerDetail;