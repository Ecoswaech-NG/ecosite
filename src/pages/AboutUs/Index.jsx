import React from "react";
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Nav/Nav";
import Hero from "./Components/Hero";

function AboutUs () {
    // --- CSS STYLES INJECTED DIRECTLY INTO THE COMPONENT ---
    // This style block contains all the CSS rules previously defined in AboutUs.module.css
    const styles = `
        .container{
            max-width: 1100px;
            margin: 40px auto;
            padding: 28px 20px;
            color: #16213e;
            font-family: sans-serif; /* Added a default font */
        }

        .header{
            text-align: left;
            margin-bottom: 28px;
        }
        .header h1{
            font-size: 34px;
            margin: 0 0 8px 0;
        }
        .header p{
            margin: 0;
            color: rgba(22,33,62,0.8);
        }

        .story{
            background: rgba(255,255,255,0.9);
            padding: 18px;
            border-radius: 10px;
            box-shadow: 0 6px 18px rgba(15,23,42,0.06);
            margin-bottom: 20px;
        }
        .story h2{
            margin-top: 0;
        }
        .story article{
            margin: 12px 0;
        }
        .story article h3{
            margin: 4px 0 6px 0;
            font-size: 18px;
        }

        .vision{
            padding: 16px;
            margin: 18px 0;
            background: linear-gradient(90deg, rgba(0,217,255,0.06), rgba(166,77,170,0.03));
            border-radius: 8px;
        }

        .team{
            margin-top: 20px;
        }
        .teamGrid{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
            margin-top: 12px;
        }
        .member{
            background: #fff;
            padding: 14px;
            border-radius: 8px;
            box-shadow: 0 6px 14px rgba(10,20,40,0.05);
        }
        .member h4{
            margin: 0 0 6px 0;
        }
        .member p{
            margin: 0;
            color: rgba(22,33,62,0.7);
        }

        @media (max-width: 900px){
            .teamGrid{ grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px){
            .teamGrid{ grid-template-columns: 1fr; }
            .container{ padding: 18px 12px; }
            .header h1{ font-size: 26px; }
        }
    `;

    return(
        <>
            {/* Inject styles globally for this component scope */}
            <style dangerouslySetInnerHTML={{ __html: styles }} />
<Nav/>
            <div className="container">
                <Hero />
                {/* --- 1. Header Section --- */}
                <header className="header">
                    <h1>Our Story at EcoSWAECH</h1>
                    <p>A mission-driven approach to sustainable technology and environmental stewardship.</p>
                </header>

                {/* --- 2. About the Company Section (with 3 Subheadings) --- */}
                <section className="story">
                    <h2>About the Company: From Concept to Conservation</h2>
                    
                    {/* Subheading 1: Our Origins */}
                    <article>
                        <h3>1. Humble Beginnings and Core Values</h3>
                        <p>
                            EcoSWAECH was founded in 2018 by engineers passionate about bridging technology with ecological responsibility. We started with a small pilot program for sustainable waste management, guided by our core values of **Integrity, Innovation, and Impact**. This foundational experience shaped our belief that business success must be synonymous with environmental health.
                        </p>
                    </article>

                    {/* Subheading 2: Growth and Innovation */}
                    <article>
                        <h3>2. Growth, Technological Leaps, and Impact</h3>
                        <p>
                            We've rapidly expanded our operations, driven by proprietary AI and IoT solutions that optimize resource efficiency. Our commitment to innovation allows us to deliver systems that reduce carbon footprints. We continually invest in R&D to stay ahead of the curve in green technology.
                        </p>
                    </article>

                    {/* Subheading 3: Global Outlook and Partnerships */}
                    <article>
                        <h3>3. Our Commitment to the Global Community</h3>
                        <p>
                            While our roots are local, our vision is global. We actively collaborate with international NGOs and governmental bodies to share best practices and contribute to global sustainability goals. Our partnerships focus on creating scalable, replicable models for a cleaner planet.
                        </p>
                    </article>
                </section>

                {/* --- 3. Our Vision Section --- */}
                <section className="vision">
                    <h2>Our Vision for the Future</h2>
                    <p>
                        We envision a world where **sustainability is the standard, not the exception**. Our goal is to be the leading provider of eco-friendly technological solutions, empowering businesses and communities to thrive without compromising the health of the planet for future generations. We strive for a circular economy powered by clean energy and intelligent resource management.
                    </p>
                </section>
                
                {/* --- 4. The Team Section --- */}
                <section className="team">
                    <h2>Meet Our Dedicated Team</h2>
                    <div className="teamGrid">
                        
                        {/* Team Member 1 */}
                        <div className="member">
                            <h4>Harrison Adeolu</h4>
                            <p>CEO & Co-Founder</p>
                            <p>Specializes in sustainable policy and strategic growth.</p>
                        </div>
                        
                        {/* Team Member 2 */}
                        <div className="member">
                            <h4>Harrison Toluwanimi</h4>
                            <p>Chief Analyst(Ops) Officer</p>
                            <p>Leads our AI and IoT development.</p>
                        </div>
                        
                        {/* Team Member 3 */}
                        <div className="member">
                            <h4>Dr. Lena Dubois</h4>
                            <p>Head of Research & Ecology</p>
                            <p>Ensures our solutions are environmentally sound.</p>
                        </div>

                    </div>
                </section>
                
            </div>
            <Footer />
        </>
    )
}

export default AboutUs;