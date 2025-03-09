import '../css/team.css';
import image from '../assets/file.png';
import { useEffect } from 'react';

export default function Member({ name, description, details, isSliding }) {
    useEffect(() => {
        // This effect can be used if you want to do something on slide
    }, [isSliding]);

    return (
        <div className={`member ${isSliding ? 'slide' : ''}`}>
            <div className="head">
                <div className="image">
                    <img src={image} alt={name} />
                </div>
                <div className="info">
                    <h1 className="name">{name}</h1>
                    <h3 className="desc">{description}</h3>
                    <div className='details-container'>
                        <div className='details'>{details}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}