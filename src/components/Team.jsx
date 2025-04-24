import '../css/team.css';
import '../css/App.css';
import { useState, useEffect } from 'react';


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
        { name: 'Dr. Scott Heggen', description: 'Team Administrator', details: "Dr. Scott Heggen, the adminstrator of the team, oversees the overall operations of the team, participation in world contests, and sets the team's main operation goals. Dr. Heggen focused his dissertation on participatory sensing, which brings together citizen data collectors to large-scale scientific projects through the use of mobile phones as sensors. Dr. Heggen engaged middle school students with science and mobile application development through his Mobile Application Development for Science program." },
        { name: 'David Brothers', description: 'Team Lead', details: "The head coach of an FRC robotics team. He is responsible for organizing and managing the team, providing technical guidance, and mentoring students in STEM skills. He oversees the robot's design and construction, develop competition strategies, and prepare the team for all aspects of the competition. He also handles fundraising, community outreach, and administrative duties, ensuring compliance with safety protocols and FRC regulations. He fosters a positive, inclusive team environment, promote continuous improvement, and engage with sponsors and the community to support the team's success." },
        { name: 'Besher Kitaz', description: 'Web Developer and Software Mentor', details: 'Besher oversees our web system design and manages ensures that it is properly functioning. Besher is also part of the software team, where you assists in designing and materials for the class, along with helping setting up the materials and software and helps the students during the educational process.'},
    ];

    return (

        <div className="team">
            <div className='container'>
                <h1 className='blue-header-text-white'> Our Team </h1>
                <Member 
                    name={teamMembers[currentIndex].name}  
                    description={teamMembers[currentIndex].description}
                    details={teamMembers[currentIndex].details}
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


