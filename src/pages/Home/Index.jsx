import React, { useState, useEffect } from "react"; 
import Nav from "../../Components/Nav/Nav";
import Hero from "../../Components/Hero/Hero"; 
import About from "./../../Components/About/About";
import Services from "./../../Components/Services/Services";
import CTA from "./../../Components/CTA/CTA";
import Footer from "./../../Components/Footer/Footer";



function Home () {
    
    // --- State for the Media Slide Hero Section ---
    let heroData = [
        {text1:"Drive into ", text2:"what you love", link1:"/app-about", link2:"/marketplace"},
        {text1:"Indulge ", text2:" your passions.", link1:"/app-about", link2:"/marketplace"},
        {text1:"Give in to", text2:" your passion and drive", link1:"/app-about", link2:"/marketplace"},
    ];
    // Initial state setup
    const [heroCount, setHeroCount] = useState(0); // Starting at 0 for the first slide
    const [playStatus, setPlayStatus] = useState(false);
    
    // Auto-rotate images every 5 seconds, but stop when video is playing
    useEffect(() => {
        if (playStatus) {
            // If video is playing, don't auto-rotate
            return;
        }
        
        const interval = setInterval(() => {
            setHeroCount((prevCount) => {
                // Cycle through 0, 1, 2
                return (prevCount + 1) % 3;
            });
        }, 5000);
        
        return () => clearInterval(interval);
    }, [playStatus, heroCount]); 
    // ----------------------------------------------
    
    return(
        
        <div>
            <Nav />
            <Hero 
                heroData={heroData} 
                heroCount={heroCount} 
                setHeroCount={setHeroCount} 
                playStatus={playStatus} 
                setPlayStatus={setPlayStatus}
            />
            <CTA />
            <About />
            <Services />
            <Footer />
        </div>
    )
}

export default Home;