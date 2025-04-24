import '../css/index.css'
import '../css/App.css'
import '../css/give.css'
import donation1 from '../assets/donate1.png'


import Footer from '../components/Footer.jsx'


const introText = `
We are dedicated to making a difference, but we can't do it alone. Your support helps us expand our reach, improve our programs, and create a lasting impact. Whether it's through volunteering, donations, or spreading the word, every effort counts in making our mission a success.

By joining us, you're not just contributing to a cause—you’re becoming part of a community committed to positive change. Help us grow and make a difference today!`


export default function Give() {
    return(
        <div className='give'>
            <div className='container'>
                <h1 className='blue-header-text-white'>Help us Grow!</h1>
                <p className='boxed-element-hover-effect'>
                    {introText}
                </p>
            </div>
            <div className='instructions'>
                <div className='container boxed-element-hover-effect'>
                        <h2>How to help us?</h2>
                        <ul>                      
                            <li>
                            <span>To donate to Rat Fight Robotics Team, visit <a target='_blank' href='https://give.berea.edu/page/64519/donate/1?locale=en-US'> Berea Donation Page.</a></span>
                            </li>
                            <li>
                                <span>Select Gift amount and frequesncy. For Gift designation, please select 'other' and then type 'Rat Fight Robotics Team' in the space below.</span>
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
            <Footer />
        </div>
    )
}


