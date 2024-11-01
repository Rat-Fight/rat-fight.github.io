import '../css/team.css'
import { useState, useEffect } from 'react';


import image from '../assets/RatFight2023logo.png'
export default function Member(props) {
    const [isSliding, setIsSliding] = useState(false);


    useEffect(() => {
        setIsSliding(true);
        const timer = setTimeout(() => {
          setIsSliding(false);
        }, 500);
    
        return () => clearTimeout(timer);
      }, [props.name, props.description]);
      
    return (
        <>
        <div className="member">
            <div className="head">
                <div className="image">
                    <img src={image} alt={props.name} />
                </div>
                <div className="info">
                    <h1 class="name">
                        {props.name}
                    </h1>
                    <h3 className="desc">
                        {props.description}
                    </h3>
                </div>
            </div>
            <p className='details'>

            </p>
        </div>
    </>
    )
}