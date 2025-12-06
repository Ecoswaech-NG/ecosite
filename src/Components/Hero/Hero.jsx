import './Hero.css';
import { Link } from 'react-router-dom';
import Background from '../Background/Background';
import user1 from '../../assets/user-01.jpg';
import user2 from '../../assets/user-02.jpg';
import user3 from '../../assets/user-03.jpg';
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
                        <span className='hero_heading_part1'>UNIQUE SOLUTIONS FOR</span>
                        <span className='hero_heading_part2'>CHARGING STATIONS, FLEETS <br/> AND DRIVERS.</span>
                    </h1>
                    <p className='hero_description'>
                        Check out our marketplace to buy and sell your EVs, as well as accessories and spare parts. 
                        Connect with logistics service providers and rental companies for EV rentals and leasing options.
                    </p>
                    {heroData[heroCount] && (
                        <div className='hero_data_links'>
                            <Link to={heroData[heroCount].link1 || '#'} className='hero_data_link'>
                                {heroData[heroCount].text1}
                            </Link>
                            <Link to={heroData[heroCount].link2 || '#'} className='hero_data_link'>
                                {heroData[heroCount].text2}
                            </Link>
                        </div>
                    )}
                </div>
                
                <div className='hero_actions'>
                <button> TEST DRIVE  <i className="ri-roadster-line"></i></button>                    
                    <div className='hero_join_us'>
                        <div className='join_us_profiles'>
                            <img src={user1} alt='User 1' />
                            <img src={user2} alt='User 2' />
                            <img src={user3} alt='User 3' />

                            <span>Join Us and enjoy EV experience.</span>
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