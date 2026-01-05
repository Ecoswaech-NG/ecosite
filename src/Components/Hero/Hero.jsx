import './Hero.css';
import { Link } from 'react-router-dom';
import Background from '../Background/Background';

import play_icon from '../../assets/play_icon.png';
import pause_icon from '../../assets/pause_icon.png';

const Hero = ({heroData, heroCount, setHeroCount, playStatus, setPlayStatus}) => {
    return(
        <div className='hero'>
            <Background playStatus={playStatus} heroCount={heroCount} />
            <div className='hero_content'>
                <div className='hero_text'>
                    <p className='hero_tagline'>FOR EVERYONE, EVERY BUSINESS AND EVERY VEHICLE</p>
                    <h1 className='hero_heading'>
                        <span className='hero_heading_part2'>THE FUTURE OF <br/> ELECTRIC MOBILITY</span>
                    </h1>
                    <p className='hero_description'>
                        One platform to manage your fleet, find charging, and trade electric vehicles.
                    </p>
                    {heroData[heroCount] && (
                        <div className='hero_data_links'>
                            
                        </div>
                    )}
                </div>
                
                <div className='hero_actions'>
                    <Link to="/testdrive-ev"><button> TEST DRIVE  <i className="ri-roadster-line"></i></button></Link>
                    <div className='hero_join_us'>
                        <div className='join_us_profiles'>
                            <span>Explore Ecoswaech EV Ecosystem.</span>
                        </div>
                    </div>
                </div>
                
                <div className="hero-controls">
                    <ul className="hero-dots">
                        <li onClick={()=>setHeroCount(0)} className={heroCount === 0 ? 'hero-dot orange':'hero-dot'}></li>
                        <li onClick={()=>setHeroCount(1)} className={heroCount === 1 ? 'hero-dot orange':'hero-dot'}></li>
                        <li onClick={()=>setHeroCount(2)} className={heroCount === 2 ? 'hero-dot orange':'hero-dot'}></li>
                    </ul>
                    <div className="hero-play" onClick={()=>setPlayStatus(!playStatus)}>
                        <img src={playStatus ? pause_icon : play_icon} alt={playStatus ? 'Pause' : 'Play'} />
                        <p>{playStatus ? 'Pause Video' : 'Play Video'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;