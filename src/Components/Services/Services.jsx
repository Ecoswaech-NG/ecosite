import React, { useState } from "react";
import servicesCSS from './../Services/Services.module.css';
import ServiceModal from './ServiceModal';
import service_card_img_1 from './../../assets/service_card_img_1.png';
import service_card_img_2 from './../../assets/service_card_img_2.png';
import service_card_img_3 from './../../assets/service_card_img_3.png';
import service_card_img_4 from './../../assets/service_card_img_4.png';
import Img_service from './../../assets/Service_img.png';

function Services () {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            id: 1,
            title: "Building Services",
            img: service_card_img_1,
            description: "write what is needed under here, as this the placeholder text.",
            details: "Comprehensive building charging solutions for commercial and residential properties. Our experts help design, install, and manage charging infrastructure tailored to your building's needs."
        },
        {
            id: 2,
            title: "Home & Office Charging",
            img: service_card_img_2,
            description: "Write what is needed under here, as this the placeholder text.",
            details: "Setup convenient charging stations at your home or office. Fast installation, reliable performance, and dedicated support to keep your EVs charged and ready."
        },
        {
            id: 3,
            title: "Fleet Management",
            img: service_card_img_3,
            description: "write what is needed under here, as this the placeholder text.",
            details: "Manage your entire EV fleet efficiently with real-time tracking, charging optimization, and maintenance scheduling. Maximize uptime and reduce operational costs."
        },
        {
            id: 4,
            title: "Marketplace Optimization",
            img: service_card_img_4,
            description: "Write what is needed under here, as this the placeholder text.",
            details: "Optimize your EV marketplace presence with our tools and analytics. Buy, sell, and trade EVs, accessories, and spare parts with confidence."
        }
    ];

    const handleCardClick = (service) => {
        setSelectedService(service);
    };

    const handleCloseModal = () => {
        setSelectedService(null);
    };

    return (
        <div className={`${servicesCSS.Service_wrapper} section`}>
            <small className="section_title"> (OUR SERVICES) </small>
            <h2> Experience the best EV services </h2>
            <p> Charge, buy and sell your EV, rent an EV, delivery and logistics EV services, spare parts and EV accessories in our msrketplsce. 
                Check our OCPP powered CMS(Charging Management System) and monitor all your charging activities. EV software development and design,
                fleet management and station charging management.
            </p>
            <div className={servicesCSS.service_Container}>
                <div className={servicesCSS.service_cards}>
                    {services.slice(0, 2).map(service => (
                        <div
                            key={service.id}
                            className={servicesCSS.service_card}
                            onClick={() => handleCardClick(service)}
                            role="button"
                            tabIndex={0}
                            onKeyPress={(e) => e.key === 'Enter' && handleCardClick(service)}
                        >
                            <img src={service.img} alt={service.title} />
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>

                <img src={Img_service} alt="service image" id={servicesCSS.serviceImg}/>
                
                <div className={servicesCSS.service_cards}>
                    {services.slice(2, 4).map(service => (
                        <div
                            key={service.id}
                            className={servicesCSS.service_card}
                            onClick={() => handleCardClick(service)}
                            role="button"
                            tabIndex={0}
                            onKeyPress={(e) => e.key === 'Enter' && handleCardClick(service)}
                        >
                            <img src={service.img} alt={service.title} />
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            {selectedService && (
                <ServiceModal service={selectedService} onClose={handleCloseModal} />
            )}
        </div>
    )
}

export default Services