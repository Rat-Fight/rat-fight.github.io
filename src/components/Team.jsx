import '../css/team.css';
import '../css/App.css';
import { useState, useEffect } from 'react';

const disc_placeholder = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`


import Member from './Member'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Team = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);



      
    const nextMember = () => {
        setCurrentIndex((prevIndex) => ( prevIndex + 1) % teamMembers.length);
    };

    const prevMember = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
    };

    const teamMembers = [
        { name: 'Dr. Scott Heggen', description: 'Team Administrator' },
        { name: 'David Brothers', description: 'Team Lead.' },
        { name: 'Besher Kitaz', description: 'Web Developer' },
    ];

    return (

        <div className="team">
            <div className='container'>
                <h1> Our Team </h1>
                <Member name={teamMembers[currentIndex].name}  
                        description={teamMembers[currentIndex].description}
                />
                <div className='navButtons'>
                    <button className="nav-button" onClick={prevMember} > <FontAwesomeIcon icon={faArrowLeft} className='icon'/>  </button>
                    <button className="nav-button" onClick={nextMember} > <FontAwesomeIcon icon={faArrowRight} className='icon'/> </button>
                </div>
            </div>
        </div>
    )
}

export default Team;

