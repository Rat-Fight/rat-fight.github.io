import '../css/footer.css'
import Sponsors from './Sponsors';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className='left'>
                    <div> 2022 RatFight Robotics Team. All rights reserved.</div>
                    <div className='email-address'>
                         <FontAwesomeIcon icon={faEnvelope}/> 
                         <a href='mailto:9152ratfight@gmail.com'> 9152ratfight@gmail.com </a>
                    </div>
                    <div className='email-address'>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <a> 101 Chestnut Street, Berea, Ky 40404, New CMIT Building </a>
                    </div>

{/* The code below in case we need to add a phone number later */}
{/*                     <div className='email-address'>
                        <FontAwesomeIcon icon={faPhone} />
                        <a> 123 (456) - 7890 </a>
                    </div> */}
                </div>
                <div className="right">
                    <a href="https://www.facebook.com/RatFightOfficial" target='_blank' ><FontAwesomeIcon icon={faFacebook} style={{color: "white",}} /></a>
                    <a href="https://www.instagram.com/ratfightofficial/" target='_blank' ><FontAwesomeIcon icon={faInstagram} style={{color: "white",}}/></a>
                    <a href="https://x.com/Rat_Fight_9152/" target='_blank' ><FontAwesomeIcon icon={faXTwitter} style={{color: "white",}}/></a>
                    <a href="https://www.tiktok.com/@rat_fight_9152?is_from_webapp=1&sender_device=pc" target='_blank' ><FontAwesomeIcon icon={faTiktok} style={{color: "white",}}/></a>
                </div> 
            </div>
        </div>
    )
}