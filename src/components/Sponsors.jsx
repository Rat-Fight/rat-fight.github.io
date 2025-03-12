import React from 'react';
import '../css/sponsors.css';
import Footer from './Footer';

// Logos here
import BereaLogo from '../assets/bereaCollegeLogoWhiteText.jpg'
import YaleLogo from '../assets/SponsorsLogos/HYSTER-YALE.png'
import Noviles from '../assets/SponsorsLogos/novelis.png'
import AndyMark from '../assets/SponsorsLogos/AndyMark.png'
const sponsors = [
    {
        id: 1,
        name: 'Berea College Computer Science Department',
        logo: BereaLogo,
    },
    {
        id: 2,
        name: 'Novelis',
        logo: Noviles,
    },
    {
        id: 3,
        name: 'Hyster',
        logo: YaleLogo,
        },
    {
        id: 4,
        name: 'Andymark',
        logo: AndyMark,
    },
    {
        id: 5,
        name: 'FIRST robotics',
        logo: 'sponsor4-logo.png',
    },
    {
        id: 6,
        name: 'Kentucky FIRST',
        logo: 'sponsor5-logo.png',
    },
    {
        id: 7,
        name: 'Icon automation',
        logo: 'sponsor6-logo.png',
    },
    {
        id: 8,
        name: 'Parker Hannifin',
        logo: 'sponsor6-logo.png',
    },
];

const Sponsors = () => {
    return (
        <div>
            <header className="header">
                <h1>Our Sponsors</h1>
                <p>We are grateful for the support of our sponsors who make everything possible.</p>
            </header>

            <div className="container">
                <section className="sponsor-section">
                    {sponsors.map((sponsor) => (
                        <div key={sponsor.id} className="sponsor-card">
                            <div className="image-container">
                                <img src={sponsor.logo} alt={`${sponsor.name} Logo`} />
                            </div>
                            <h3>{sponsor.name}</h3>
                        </div>
                    ))}
                </section>
            </div>

            <Footer/>

        </div>
        
    );
};


export default Sponsors;

