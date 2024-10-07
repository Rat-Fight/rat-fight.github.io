import '../css/index.css'
import '../css/App.css'
import '../css/give.css'
import donation1 from '../assets/donate1.png'

const PLACEHOLDER_TEXT = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`


export default function Give() {
    return(
        <div className='give'>
            <div className='container'>
                <h1>Help us Grow!</h1>
                <p>
                    {PLACEHOLDER_TEXT}
                </p>
            </div>
            <div className='instructions'>
                <div className='container'>
                        <h2>How to help us?</h2>
                        <ul>                      
                            <li>
                            <span>To donate to RatFight Club team, visit <a target='_blank' href='https://give.berea.edu/page/64519/donate/1?locale=en-US'> Berea Donation Page.</a></span>
                            </li>
                            <li>
                                <span>Select Gift amount and frequesncy. For Gift designation, please select 'other' and then type 'RatFight Club' in the space below.</span>
                                <img src={donation1} width='500px'/>
                            </li>
                            <li>
                                <span>Type Your personal information</span>
                            </li>
                            <li>
                                <span>Type Your billing information and payment details</span>
                            </li>
                            <li>
                                <span>Submit to make impact!</span>
                            </li>
                        </ul>

                </div>
            </div>
        </div>
    )
}


