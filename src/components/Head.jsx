import React from 'react';
import { Link, Router } from 'react-router-dom';


import reactLogo from '../assets/favcon.png'
import RatFight2023logo from '../assets/ratFight2023logo.png'
import '../css/App.css'
import '../css/Head.css'

export default function Head() {
    return (
        <>
            <div className="parent">
                <div className="navBar">
                    <div className="container" >
                        <Link to='/' id='logo'>
                            <img src={RatFight2023logo} alt="Rat Boxer Logo - Image not found" height="65" />
                        </Link>
                        {/* The responsiveness point is at 545. After that, the below should be made into a list */}
                        <span className="sections">
                            <span><Link to="/give">Give</Link></span>
                            <span><Link to="/join">Join us</Link></span>
                            <span><Link to="/Contact"> Contact</Link></span>
                            <span><Link to="/about">About</Link></span>
                        </span>
                        </div>
                </div>
            </div>
        </>
    )
}

