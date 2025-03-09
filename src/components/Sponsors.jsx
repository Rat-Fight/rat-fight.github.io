

import React from 'react';
import '../css/sponsors.css';
import Footer from './Footer';
import BereaLogo from '../assets/bereaCollegeLogoWhiteText.jpg'
const sponsors = [
    {
        id: 1,
        name: 'Berea college',
        description: 'A short description of Sponsor 1 and their contribution or role.',
        logo: BereaLogo,
    },
    {
        id: 2,
        name: 'Novelis',
        description: 'A short description of Sponsor 2 and their contribution or role.',
        logo: 'sponsor2-logo.png',
    },
    {
        id: 3,
        name: 'Andymark',
        description: 'A short description of Sponsor 3 and their contribution or role.',
        logo: 'sponsor3-logo.png',
    },
    {
        id: 4,
        name: 'FIRST robotics',
        description: 'A short description of Sponsor 3 and their contribution or role.',
        logo: 'sponsor4-logo.png',
    },
    {
        id: 5,
        name: 'Kentucky FIRST',
        description: 'A short description of Sponsor 3 and their contribution or role.',
        logo: 'sponsor5-logo.png',
    },
    {
        id: 6,
        name: 'Icon automation',
        description: 'A short description of Sponsor 3 and their contribution or role.',
        logo: 'sponsor6-logo.png',
    },
    {
        id: 6,
        name: 'Parker Hannifin',
        description: 'A short description of Sponsor 3 and their contribution or role.',
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
                            <img src={sponsor.logo} alt={`${sponsor.name} Logo`} />
                            <h3>{sponsor.name}</h3>
                            <p>{sponsor.description}</p>
                        </div>
                    ))}
                </section>
            </div>

            <Footer/>

        </div>
        
    );
};


export default Sponsors;