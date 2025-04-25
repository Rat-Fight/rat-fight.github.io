import React, { useState }from 'react';
import { Link, Router, useLocation } from 'react-router-dom';


import reactLogo from '../assets/favcon.png'
import RatFight2023logo from '../assets/favcon.png'
import BereaLogo from '../assets/bereaCollegeLogo.png'


import '../css/App.css'
import '../css/Head.css'

export default function Head() {

    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()
    let currentTab = location.pathname
    
    return (
        <>
            <div className="parent">
                <div className="navBar">
                    <div className="container" >
                        <Link to='/' id='logo'>
                            <img src={RatFight2023logo} alt="Rat Boxer Logo - Image not found" height="65" />
                        </Link>
                        <div className='links'>
                            <span className='icon' onClick={() => setIsOpen(!isOpen)}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            {/* The responsiveness point is at 545. After that, the below should be made into a list */}
                            <span className={(isOpen) ? "open" : "closed"}>
                                <span className="sections">
                                    <span className={(currentTab === '/give') ? "open" : "closed"}><Link to="/give" onClick={() => setIsOpen(false)}>Give</Link></span>
                                    <span className={(currentTab === '/join') ? "open" : "closed"}><Link to="/join" onClick={() => setIsOpen(false)}>Join us</Link></span>
                                    <span className={(currentTab === '/sponsors') ? "open" : "closed"}><Link to="/sponsors" onClick={() => setIsOpen(false)}>Our Sponsors</Link></span>
                                    <span className={(currentTab === '/about') ? "open" : "closed"}><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></span>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

