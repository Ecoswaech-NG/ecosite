import React from "react";
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import styles from './Contact.module.css';

function Contact () {
    return (
        <div>
            <Nav />

            {/* Hero Section */}
            <div className={styles.hero_section}>
                <div className={styles.hero_content}>
                    <small className={styles.hero_tag}>GET IN TOUCH</small>
                    <h1 className={styles.hero_title}>Let's Connect & Power the Future Together</h1>
                    <p className={styles.hero_description}>
                        Have questions about our EV charging solutions? Want to partner with us? 
                        We're here to help you navigate the future of sustainable transportation.
                    </p>
                </div>
            </div>

            <main>
                {/* Contact Info Cards */}
                <section className={styles.contact_info_section}>
                    <div className={styles.contact_cards}>
                        <div className={styles.contact_card}>
                            <div className={styles.icon_container}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3>Our Location</h3>
                            <p>456 Innovation Drive, Tech District, Lagos, Nigeria</p>
                        </div>

                        <div className={styles.contact_card}>
                            <div className={styles.icon_container}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 16.92V21a1 1 0 0 1-1.11 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2 3.11 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75c.12.66.35 1.3.66 1.9a1 1 0 0 1-.24 1L7.91 8.09a14.08 14.08 0 0 0 6 6l1.42-1.42a1 1 0 0 1 1-.24c.6.31 1.24.54 1.9.66A1 1 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3>Phone Number</h3>
                            <p>+234 (0) 800 ECOSWAE</p>
                            <p className={styles.subtext}>Available 24/7 for support</p>
                        </div>

                        <div className={styles.contact_card}>
                            <div className={styles.icon_container}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="L22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3>Email Address</h3>
                            <p>contact@ecoswaech.com</p>
                            <p className={styles.subtext}>support@ecoswaech.com</p>
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className={styles.contact_form_section}>
                    <div className={styles.form_container}>
                        <div className={styles.form_header}>
                            <h2>Send Us a Message</h2>
                            <p>Fill out the form below and we'll get back to you as soon as possible.</p>
                        </div>

                        <form className={styles.contact_form}>
                            <div className={styles.form_row}>
                                <div className={styles.form_group}>
                                    <label htmlFor="firstName">First Name</label>
                                    <input 
                                        type="text" 
                                        id="firstName" 
                                        name="firstName" 
                                        placeholder="Enter your first name"
                                        required
                                    />
                                </div>
                                <div className={styles.form_group}>
                                    <label htmlFor="lastName">Last Name</label>
                                    <input 
                                        type="text" 
                                        id="lastName" 
                                        name="lastName" 
                                        placeholder="Enter your last name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.form_row}>
                                <div className={styles.form_group}>
                                    <label htmlFor="email">Email Address</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>
                                <div className={styles.form_group}>
                                    <label htmlFor="phone">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        name="phone" 
                                        placeholder="+234 (0) XXX XXX XXXX"
                                    />
                                </div>
                            </div>

                            <div className={styles.form_group}>
                                <label htmlFor="subject">Subject</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject" 
                                    placeholder="What is this regarding?"
                                    required
                                />
                            </div>

                            <div className={styles.form_group}>
                                <label htmlFor="message">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="6"
                                    placeholder="Tell us more about your inquiry..."
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className={styles.submit_btn}>
                                Send Message
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </form>
                    </div>

                    <div className={styles.contact_sidebar}>
                        <div className={styles.sidebar_card}>
                            <h3>Need Immediate Assistance?</h3>
                            <p>Our support team is available 24/7 to help you with any questions or concerns.</p>
                            <div className={styles.contact_method}>
                                <div className={styles.method_icon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 16.92V21a1 1 0 0 1-1.11 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2 3.11 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75c.12.66.35 1.3.66 1.9a1 1 0 0 1-.24 1L7.91 8.09a14.08 14.08 0 0 0 6 6l1.42-1.42a1 1 0 0 1 1-.24c.6.31 1.24.54 1.9.66A1 1 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div>
                                    <strong>Call Us</strong>
                                    <p>+234 (0) 800 ECOSWAE</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.sidebar_card}>
                            <h3>Business Hours</h3>
                            <div className={styles.hours_list}>
                                <div className={styles.hour_item}>
                                    <span>Monday - Friday</span>
                                    <span>9:00 AM - 6:00 PM</span>
                                </div>
                                <div className={styles.hour_item}>
                                    <span>Saturday</span>
                                    <span>10:00 AM - 4:00 PM</span>
                                </div>
                                <div className={styles.hour_item}>
                                    <span>Sunday</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.sidebar_card}>
                            <h3>Follow Us</h3>
                            <div className={styles.social_links}>
                                <a href="#" aria-label="LinkedIn">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                                <a href="#" aria-label="Twitter">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90117 15.7395 2.95718 14.8821 3.28445C14.0247 3.61173 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61232 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                                <a href="#" aria-label="Facebook">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className={styles.map_section}>
                    <div className={styles.map_container}>
                        <h2>Find Us on the Map</h2>
                        <div className={styles.map_wrapper}>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5!2d3.3792!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzEnMjcuOCJOIDPCsDIyJzQ1LjEiRQ!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng" 
                                width="100%" 
                                height="450" 
                                style={{border: 0, borderRadius: '12px'}} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ecoswaech Location Map"
                            ></iframe>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Contact;
