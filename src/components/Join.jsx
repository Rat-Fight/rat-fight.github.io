import '../css/join.css'
import Footer from '../components/Footer.jsx'

let join = `
Are you passionate about innovation, teamwork, and hands-on learning? Our robotics team provides an incredible opportunity to develop technical skills, collaborate on real-world engineering challenges, and be part of an exciting community of problem-solvers. Whether you're interested in coding, mechanical design, fundraising, or outreach, there's a place for you on our team!

By joining us, you’ll gain experience in STEM fields, work with experienced mentors, and compete in thrilling robotics competitions. Plus, you'll make lasting friendships and contribute to something bigger than yourself.`

let join_student = `
As a student team member, you’ll dive into the world of robotics, learning programming, mechanical engineering, electrical systems, and teamwork. No prior experience is required—just a willingness to learn and a passion for technology!

You'll have the chance to:
`
let join_student_bullets = [
    'Build and program competitive robots',
    'Work alongside industry professionals and mentor', 
    'Travel to competitions and showcase your skills',
    'Develop leadership, problem-solving, and teamwork abilities',
]

let join_mentor = `
As a mentor, you’ll guide students on their robotics journey, helping them develop problem-solving skills, communication, and teamwork. You'll also be responsible for managing the team's projects and competitions.

You'll have the chance to:
`

let join_mentor_bullets = [
    'Guide students on their robotics journey',
    'Support and mentor students in STEM fields',
    'Lead and manage the team\'s projects and competitions',
    'Provide technical guidance and support',
]

const Join = () => {

    function redirect() {
        window.location.href = "https://forms.google.com"
    }
    return (
        <div className='join'>
            <div className='container'>
                <h1 className='blue-header-text-white '>Join Our Team!</h1> 
                <img src='src\assets\join1.jpg'/> 
            </div>

            <div className='instructions'>
                 <div className='container'>  
                    {/* Join section - general */}      
                    <div className='boxed-element-hover-effect '>            
                        <h2>Why Join Us?</h2>
                        <p>{join}</p>
                    </div>
                    {/* Join as a studnet section */}

                    <div className='boxed-element-hover-effect'>  
                        <h2>Join as a student</h2>
                        <span>{join_student}</span>
                        <ul>
                            {join_student_bullets.map((bullet, index) => (
                                <li key={index}>{bullet}</li>
                            ))}
                        </ul>   
                        <div>
                            <button className='join-button' onClick={redirect}>Join Now!</button>
                        </div>
                    </div>
                    
                    <div className='boxed-element-hover-effect'>
                        <h2>Join as a mentor</h2>
                        <p>{join_mentor}</p>
                        <ul>
                            {join_mentor_bullets.map((bullet, index) => (
                                <li key={index}>{bullet}</li>
                            ))}
                        </ul>
                        <div>
                            <button className='join-button' onClick={redirect}>Join Now!</button>
                        </div>
                    </div>

                </div>
            </div>  
            <Footer/>
        </div>
    )
}

export default Join;

 