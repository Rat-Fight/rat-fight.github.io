import React from 'react';
import '../css/sponsors.css';
import Footer from './Footer';

// Logos here
import BereaLogo from '../assets/bereaCollegeLogoWhiteText.jpg'
import YaleLogo from '../assets/SponsorsLogos/HYSTER-YALE.png'
import Noviles from '../assets/SponsorsLogos/novelis.png'
import AndyMark from '../assets/SponsorsLogos/AndyMark.png'
import { Link } from 'react-router-dom';
const sponsors = [
    {
        id: 1,
        name: 'Berea College Computer Science Department',
        logo: BereaLogo,
        website: 'https://www.berea.edu/academics/departments-programs/computer-science',
    },
    {
        id: 2,
        name: 'Novelis',
        logo: Noviles,
        website: 'https://www.novelis.com//',
    },
    {
        id: 3,
        name: 'Hyster',
        logo: YaleLogo,
        website: 'https:/www.hyster.com/en-us/north-america/',
        },
    {
        id: 4,
        name: 'Andymark',
        logo: AndyMark,
        website: 'https://www.andymark.com/',
    },
];

const Sponsors = () => {
    return (
        <div >
            <header className="header">
                <div className='container'>
                    <h1 className='blue-header-text-white'>Our Sponsors</h1>
                </div>
                <h2>We are grateful for the support of our sponsors who make everything possible.</h2>
            </header>

            <div className="container">
                <section className="sponsor-section">
                {sponsors.map((sponsor) => (
                        <a 
                            key={sponsor.id} 
                            href={sponsor.website} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="sponsor-card"
                        >
                            <div className="image-container">
                                <img src={sponsor.logo} alt={`${sponsor.name} Logo`} />
                            </div>
                            <h3>{sponsor.name}</h3>
                        </a>
                    ))}
                </section>
            </div>

            <Footer/>

        </div>
        
    );
};


export default Sponsors;


