import React, { useState } from "react";
import styles from './TestDriveBookingModal.module.css';

function TestDriveBookingModal({ manufacturer, onClose }) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        vehicleId: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would send the booking data to your backend
        console.log('Booking submitted:', { ...formData, manufacturer: manufacturer.name });
        setSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
            onClose();
            setSubmitted(false);
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                vehicleId: '',
                preferredDate: '',
                preferredTime: '',
                message: ''
            });
        }, 3000);
    };

    return (
        <div className={styles.modal_overlay} onClick={onClose}>
            <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
                <button className={styles.close_btn} onClick={onClose}>✕</button>

                {submitted ? (
                    <div className={styles.success_message}>
                        <div className={styles.success_icon}>✓</div>
                        <h2>Booking Request Received!</h2>
                        <p>Thank you for your interest. {manufacturer.name} will contact you shortly to confirm your test drive appointment.</p>
                        <p className={styles.confirmation_text}>A confirmation email has been sent to <strong>{formData.email}</strong></p>
                    </div>
                ) : (
                    <>
                        <div className={styles.modal_header}>
                            <h2>Book Your Test Drive</h2>
                            <p className={styles.dealer_name}>{manufacturer.name}</p>
                        </div>

                        <form className={styles.booking_form} onSubmit={handleSubmit}>
                            {/* Personal Information */}
                            <div className={styles.form_section}>
                                <h3 className={styles.section_title}>Your Information</h3>
                                
                                <div className={styles.form_group}>
                                    <label htmlFor="fullName">Full Name *</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>

                                <div className={styles.form_row}>
                                    <div className={styles.form_group}>
                                        <label htmlFor="email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>

                                    <div className={styles.form_group}>
                                        <label htmlFor="phone">Phone Number *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="+234 (0) XXX XXX XXXX"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Test Drive Details */}
                            <div className={styles.form_section}>
                                <h3 className={styles.section_title}>Test Drive Details</h3>

                                <div className={styles.form_group}>
                                    <label htmlFor="vehicleId">Select Vehicle *</label>
                                    <select
                                        id="vehicleId"
                                        name="vehicleId"
                                        value={formData.vehicleId}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Choose a vehicle...</option>
                                        {manufacturer.vehicles.map((vehicle) => (
                                            <option key={vehicle.id} value={vehicle.id}>
                                                {vehicle.name} - {vehicle.type} ({vehicle.price})
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className={styles.form_row}>
                                    <div className={styles.form_group}>
                                        <label htmlFor="preferredDate">Preferred Date *</label>
                                        <input
                                            type="date"
                                            id="preferredDate"
                                            name="preferredDate"
                                            value={formData.preferredDate}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div className={styles.form_group}>
                                        <label htmlFor="preferredTime">Preferred Time *</label>
                                        <select
                                            id="preferredTime"
                                            name="preferredTime"
                                            value={formData.preferredTime}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Choose a time...</option>
                                            <option value="09:00">09:00 AM</option>
                                            <option value="10:00">10:00 AM</option>
                                            <option value="11:00">11:00 AM</option>
                                            <option value="12:00">12:00 PM</option>
                                            <option value="14:00">2:00 PM</option>
                                            <option value="15:00">3:00 PM</option>
                                            <option value="16:00">4:00 PM</option>
                                            <option value="17:00">5:00 PM</option>
                                        </select>
                                    </div>
                                </div>

                                <div className={styles.form_group}>
                                    <label htmlFor="message">Additional Message (Optional)</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Any specific questions or preferences?"
                                        rows="4"
                                    />
                                </div>
                            </div>

                            {/* Form Actions */}
                            <div className={styles.form_actions}>
                                <button type="button" className={styles.btn_cancel} onClick={onClose}>
                                    Cancel
                                </button>
                                <button type="submit" className={styles.btn_submit}>
                                    Confirm Booking
                                </button>
                            </div>

                            <p className={styles.form_note}>
                                We'll contact you within 24 hours to confirm your test drive appointment.
                            </p>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default TestDriveBookingModal;