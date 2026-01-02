import React from "react";
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Nav/Nav";
import styles from "./AboutUs.module.css";
import Hero from "./Components/Hero";
import { useEffect } from "react";

function AboutUs() {
    useEffect(()=>{
        const els = Array.from(document.querySelectorAll('[data-animate]'));
        if(!els.length) return;
        const obs = new IntersectionObserver((entries)=>{
            entries.forEach(e=>{
                if(e.isIntersecting){
                    e.target.setAttribute('data-inview','true');
                }
            });
        },{ threshold: 0.12 });
        els.forEach(el=> obs.observe(el));
        return ()=> obs.disconnect();
    },[]);
    return (
        <>
            <Nav />
            <Hero />
            <main className={styles.container}>
                <header className={styles.header} hidden>
                    <h1>About Us — EcoSwaech</h1>
                </header>

                <section className={styles.intro} data-animate="fadeUp">
                    <div className={styles.introGrid}>
                        <div className={styles.introImages} aria-hidden>
                            <div className={styles.imgTall} style={{backgroundImage: "url('/assets/about-left-1.jpg')"}} />
                            <div className={styles.imgSmall} style={{backgroundImage: "url('/assets/about-center.jpg')"}} />
                        </div>

                        <div className={styles.introSpacer} />

                        <div className={styles.introContent}>
                            <div className={styles.kicker}>About Us</div>
                            <h2 className={styles.introTitle}>Powering the future of mobility</h2>
                            <p className={styles.lead}>
                                EcoSwaech is building Nigeria’s most connected electric mobility and charging
                                ecosystem — where infrastructure, energy, and intelligence work together to
                                accelerate EV adoption across Africa.
                            </p>

                            <hr className={styles.divider} />

                            <ul className={styles.features}>
                                <li>
                                    <strong>Discoverable</strong>
                                    <p>Connecting EV users through a unified marketplace and charge-finder experience</p>
                                </li>
                                <li>
                                    <strong>Sustainability</strong>
                                    <p>Powered by smart monitoring and solar-hybrid uptime</p>
                                </li>
                                <li>
                                    <strong>Innovation-driven</strong>
                                    <p>Our mission is to stay at the front of EV charging technology.</p>
                                </li>
                                <li>
                                    <strong>Scalability</strong>
                                    <p>Simplify for fleets, drivers, and transport operators across Africa</p>
                                </li>
                            </ul>

                            <div className={styles.statsRow}>
                                <div className={styles.statBlock}>
                                    <div className={styles.statNumber}>2K</div>
                                    <div className={styles.statLabel}>STATIONS</div>
                                </div>
                                <div className={styles.statBlock}>
                                    <div className={styles.statNumber}>500</div>
                                    <div className={styles.statLabel}>ACTIVE USERS</div>
                                </div>
                            </div>

                            <button className={styles.learnBtn}>LEARN MORE</button>
                        </div>
                    </div>
                </section>

                {/* Value / Vision + Mission block (two-column) */}
                <section className={styles.valueSection} data-animate="fadeUp">
                    <div className={styles.valueGrid}>
                        <div className={styles.leftCol}>
                            <div className={styles.kicker}>OUR VALUE</div>
                            <h2 className={styles.valueTitle}>Best charging solutions for every journey</h2>
                            <p className={styles.valueLead}>
                                Our focus on innovation and sustainability drives us to make EV ownership
                                easier and greener for everyone.
                            </p>

                            <div className={styles.galleryImage} style={{backgroundImage: "url('/assets/about-gallery.jpg')"}} />
                        </div>

                        <aside className={styles.rightCol}>
                            <div className={styles.boxVision}>
                                <h3>Our vision</h3>
                                <p>
                                    To accelerate Africa’s electric mobility future by creating a reliable,
                        intelligent, and self-reinforcing EV charging and mobility network that serves
                        urban mobility operators, rural transport communities, EV drivers and charger
                        hosts, service providers and installers, enterprise fleets and renewable
                        energy partners.
                                </p>
                            </div>

                            <div className={styles.boxMission}>
                                <h3>Our mission</h3>
                                <p>
                                    At EcoSwaech, we are dedicated to advancing sustainable transportation by
                                    offering reliable and efficient EV charging solutions. Below are the core missions
                                    that guide our work.
                                </p>

                                <div className={styles.miniGrid}>
                                    <div className={styles.miniBox}>
                                        <h4>Promote sustainability</h4>
                                        <p>Provide eco-friendly energy to reduce carbon footprints.</p>
                                    </div>
                                    <div className={styles.miniBox}>
                                        <h4>Renewable energy</h4>
                                        <p>Integrate renewable sources into charging networks.</p>
                                    </div>
                                    <div className={styles.miniBox}>
                                        <h4>Innovate technology</h4>
                                        <p>Develop fast and smart EV charging solutions.</p>
                                    </div>
                                    <div className={styles.miniBox}>
                                        <h4>Encourage education</h4>
                                        <p>Raise awareness about EV benefits and sustainability.</p>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>

                <section className={styles.howSection} data-animate="fadeUp">
                    <div className={styles.howInner}>
                        <header className={styles.howHeader}>
                            <h2>How We Stay Ahead</h2>
                            <p className={styles.howSubtitle}>We combine technology, partnerships and renewable energy to deliver reliable, affordable and scalable EV charging.</p>
                        </header>

                        <div className={styles.howGrid}>
                            <article className={styles.howCard} data-animate="fadeUp" style={{'--delay':'0.04s'}}>
                                <div className={styles.howIcon} aria-hidden>
                                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M12 2v6" stroke="#00d9ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 12h12" stroke="#13099b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </div>
                                <h3>Behavior Insights</h3>
                                <p>Deep mobility and charging behavior insights to inform placement and reliability.</p>
                            </article>

                            <article className={styles.howCard} data-animate="fadeUp" style={{'--delay':'0.08s'}}>
                                <div className={styles.howIcon} aria-hidden>
                                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#921c98" strokeWidth="1.5"/></svg>
                                </div>
                                <h3>Smart Orchestration</h3>
                                <p>Smart load orchestration and uptime monitoring through open charging standards (OCPP).</p>
                            </article>

                            <article className={styles.howCard} data-animate="fadeUp" style={{'--delay':'0.12s'}}>
                                <div className={styles.howIcon} aria-hidden>
                                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#13099b" strokeWidth="1.5"/></svg>
                                </div>
                                <h3>Demand Engines</h3>
                                <p>Demand creation engines that increase utilization across rural and urban networks.</p>
                            </article>

                            <article className={styles.howCard} data-animate="fadeUp" style={{'--delay':'0.16s'}}>
                                <div className={styles.howIcon} aria-hidden>
                                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M3 12h18" stroke="#00d9ff" strokeWidth="1.5" strokeLinecap="round"/></svg>
                                </div>
                                <h3>Renewable-Powered</h3>
                                <p>Renewable-powered charging solutions to reduce grid dependence and operating cost.</p>
                            </article>

                            <article className={styles.howCard} data-animate="fadeUp" style={{'--delay':'0.20s'}}>
                                <div className={styles.howIcon} aria-hidden>
                                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M4 6h16" stroke="#921c98" strokeWidth="1.5"/><path d="M4 12h16" stroke="#921c98" strokeWidth="1.5"/></svg>
                                </div>
                                <h3>Partnerships</h3>
                                <p>Long-term partnerships that deepen ecosystem collaboration.</p>
                            </article>

                            <article className={styles.howCard} data-animate="fadeUp" style={{'--delay':'0.24s'}}>
                                <div className={styles.howIcon} aria-hidden>
                                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M12 2v20" stroke="#13099b" strokeWidth="1.5"/></svg>
                                </div>
                                <h3>Full-stack Platform</h3>
                                <p>A full-stack platform that connects hardware, software, energy, and mobility.</p>
                            </article>
                        </div>
                    </div>
                </section>

                <section className={styles.howSection} data-animate="fadeUp">
                    <div className={styles.howInner}>
                        <header className={styles.howHeader}>
                            <h2>Our Commitment to Nigeria and Africa</h2>
                            <p className={styles.howSubtitle}>We back inclusive, intelligent and resilient mobility — building partnerships and platforms that scale across communities.</p>
                        </header>

                        <div className={styles.howGrid}>
                            <article className={styles.howCard} data-animate="fadeUp" style={{'--delay':'0.04s'}}>
                                <div className={styles.howIcon} aria-hidden>
                                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M16 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM8 11c1.657 0 3-1.343 3-3S9.657 5 8 5 5 6.343 5 8s1.343 3 3 3zM4 19c0-2.21 3.582-4 8-4s8 1.79 8 4v1H4v-1z" stroke="#13099b" strokeWidth="1" strokeLinejoin="round"/></svg>
                                </div>
                                <h3>Inclusive</h3>
                                <p>Supporting 3-wheel mobility and battery swapping for mass adoption.</p>
                            </article>

                            <article className={styles.howCard} data-animate="fadeUp" style={{'--delay':'0.08s'}}>
                                <div className={styles.howIcon} aria-hidden>
                                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M12 2v6" stroke="#00d9ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 12h12" stroke="#13099b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </div>
                                <h3>Intelligent</h3>
                                <p>Using real behavior data to optimize operations and inform placement.</p>
                            </article>

                            <article className={styles.howCard} data-animate="fadeUp" style={{'--delay':'0.12s'}}>
                                <div className={styles.howIcon} aria-hidden>
                                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><rect x="3" y="7" width="18" height="10" rx="2" stroke="#921c98" strokeWidth="1.5"/><path d="M7 7v-2a5 5 0 0 1 10 0v2" stroke="#921c98" strokeWidth="1.5" strokeLinecap="round"/></svg>
                                </div>
                                <h3>Resilient</h3>
                                <p>Powered by renewables to ensure uptime and reduce grid dependence.</p>
                            </article>

                            <article className={styles.howCard} data-animate="fadeUp" style={{'--delay':'0.16s'}}>
                                <div className={styles.howIcon} aria-hidden>
                                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M3 12h7v7H3z" stroke="#00d9ff" strokeWidth="1.5"/><path d="M14 5l7 7" stroke="#13099b" strokeWidth="1.5" strokeLinecap="round"/></svg>
                                </div>
                                <h3>Collaborative</h3>
                                <p>Unlocking value for partners, drivers, and businesses through strong partnerships.</p>
                            </article>

                            <article className={styles.howCard} data-animate="fadeUp" style={{'--delay':'0.20s'}}>
                                <div className={styles.howIcon} aria-hidden>
                                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M12 3l2 4 4 .5-3 2 1 4-4-2-4 2 1-4-3-2 4-.5L12 3z" stroke="#921c98" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </div>
                                <h3>Defensible</h3>
                                <p>Building defensibility through technology, network effects and ecosystem ownership.</p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className={styles.teamSection} data-animate="fadeUp">
                    <h2 className={styles.center}>The Team Behind Our Services</h2>
                    <div className={styles.teamGrid}>
                        {['HARRISON ADEOLU','Alina James','Jonathan Doe','Erika Neurth'].map((name, i)=> (
                            <div className={styles.card} key={i} data-animate="slideUp" style={{'--delay':`${0.08 * i}s`}}>
                                <div className={styles.avatar} />
                                <h4>{name}</h4>
                                <p className={styles.cardRole}>Role at EcoSwaech</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ Accordion */}
                <section className={styles.section} data-animate="fadeUp">
                    <h2>Frequently Asked Questions</h2>
                    <div className={styles.faqGrid}>
                        {[
                            'How does the charging process work?',
                            'How do I find the nearest charging station?',
                            'Can I charge multiple vehicles simultaneously?',
                            'Are there different charging speeds available?',
                            'What payment methods are accepted?',
                            'What types of connectors are supported?'
                        ].map((q, idx)=> (
                            <details className={styles.faqItem} key={idx}>
                                <summary>{q}</summary>
                                <p>Answer about: {q}</p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* CTA removed as requested */}
            </main>
            <Footer />
        </>
    );
}

export default AboutUs;