const WhatWeDo = [
{  
    header: "FIRST Robotics Competition",
    text: `Rat Fight Robotics, officially known as Team 9152, is an energetic and dynamic FIRST Robotics 
    Competition (FRC) team based in Berea, Kentucky. The team is dedicated to designing and building complex 
    robots capable of competing in the annual FRC challenges, which test the limits of engineering and 
    collaboration. Every year, the team eagerly anticipates the new game reveal, which provides a set of goals, 
    obstacles, and rules that require creative problem-solving and mechanical innovation. Rat Fight Robotics 
    thrives on teamwork, using each member’s strengths to design and construct robots that can perform a variety 
    of specialized tasks, from manipulating game pieces to navigating difficult terrains.`,
},

{  
    header: "Mentorship and Education",
    text:`Aside from the technical aspects, Rat Fight Robotics emphasizes the importance of mentorship and education.
    Members of the team work closely with mentors who have expertise in engineering, programming, and design to 
    develop their skills and apply theoretical concepts in a practical setting. These mentorship relationships are
    invaluable for the students, as they gain hands-on experience and insight into STEM careers. The team also holds
    training sessions for newer members to ensure they become familiar with critical aspects of robotics, such as
    coding in languages like Java, working with mechanical tools, and understanding the principles of electronics 
    and pneumatics.`,
},

{
    header: "Community Outreach",
    text: `Community outreach is another significant component of Rat Fight Robotics’ mission. The team actively engages
    with the local community to inspire interest in science, technology, engineering, and mathematics (STEM) fields.
    From participating in school demonstrations and hosting workshops to collaborating with other FRC teams, Rat Fight
    Robotics seeks to create a lasting impact. The team also takes pride in showcasing their robots at public events,
    aiming to excite and educate younger generations about the possibilities of engineering and robotics. By doing so, 
    they hope to inspire future engineers, programmers, and innovators to pursue their passions and join the vibrant 
    world of competitive robotics.`,
},

{
    header: "Holestic Skills Development",
    text: `Rat Fight Robotics also places great importance on developing skills beyond engineering and programming. Members
    participate in fundraising activities, write sponsorship proposals, and manage logistics for the team’s projects
    and competitions. This holistic approach ensures that students gain experience in business management and
    marketing, which are essential for running a successful robotics team. By managing everything from budgeting to 
    outreach efforts, Rat Fight Robotics cultivates well-rounded individuals who understand the importance of 
    collaboration, effective communication, and strategic planning. This comprehensive focus prepares team members 
    not only for competitions but also for future academic and professional endeavors.`,
},

]

import Team from "./Team"
import Achievements from "./Achievements.jsx"
import Footer from '../components/Footer.jsx'

import '../css/App.css'


function Index() {

    return (
        <>  

            <div className="landing">
                <div className='landing-text'>
                    <h1 >Welcome to Rat Fight Robotics Team</h1>
                </div>
            </div>
            <div className="goals">
                <div className="container">
                    <h1 className="blue-header-text-white">What We Do</h1>
                    <div className="cards">
                        {WhatWeDo.map((element) => 
                        <div> 
                            <h1 className="boxes">
                                <center> {element.header} </center>
                            </h1>
                            <div>
                                {element.text} 
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            <Team/>
            <Achievements/>
            <Footer/>
        </>
    )
}


export default Index
