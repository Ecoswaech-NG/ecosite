import React, { useEffect } from "react";
import modalCSS from './ServiceModal.module.css';

function ServiceModal({ service, onClose }) {
    useEffect(() => {
        // Close modal when pressing Escape
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const handleBackdropClick = (e) => {
        // Close only if clicking the backdrop, not the modal content
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={modalCSS.modalBackdrop} onClick={handleBackdropClick}>
            <div className={modalCSS.modalContent}>
                <button className={modalCSS.closeBtn} onClick={onClose} aria-label="Close modal">
                    ✕
                </button>
                <div className={modalCSS.modalHeader}>
                    <img src={service.img} alt={service.title} className={modalCSS.modalImg} />
                </div>
                <div className={modalCSS.modalBody}>
                    <h2>{service.title}</h2>
                    <p className={modalCSS.modalDescription}>{service.details}</p>
                    <button className={modalCSS.ctaBtn}>Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default ServiceModal;
