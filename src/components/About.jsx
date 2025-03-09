import '../css/about.css';
import '../css/App.css'
import Footer from './Footer';



let about = `
    Rat Fight Robotics Team is a dedicated group of volunteers and student workers at Berea College, competing in the FIRST Robotics Competition. More than just building robots, we focus on mentorship and hands-on learning, training high school students in the key aspects of robotics:

Mechanical Design & Fabrication – Constructing durable and efficient robot structures.
Software & Programming – Developing intelligent control systems and automation.
CAD (Computer-Aided Design) – Designing precise models before building.
Electrical Systems – Wiring and integrating essential electronic components.
Our goal is to inspire the next generation of engineers and problem-solvers by fostering innovation, teamwork, and technical excellence. Through training, building, and competing, we prepare both ourselves and our students for real-world challenges in STEM.

Join us as we train, build, and compete—shaping the future of robotics, one challenge at a time! 🚀🤖
`

function About() {
    return (
    <div>
        <div className="about">
            <div class="container">
            <h1>About Rat Fight Robotics Team</h1>
            <div className='left'>    
                <p>Rat Fight Robotics Team is a passionate group of volunteers and student workers at Berea College, dedicated to building, innovating, and competing in the <strong>FIRST Robotics Competition</strong>. More than just a robotics team, we are educators and mentors—we train high school students, providing them with hands-on experience in engineering, programming, and teamwork. Our teams specilize on the different aspects of Robotics:</p>
            </div>    

            <div className='left'>    

                <ul>
                    <li><strong>Mechanical Design & Fabrication</strong> – Constructing durable and efficient robot structures.</li>
                    <li><strong>Software & Programming</strong> – Developing intelligent control systems and automation.</li>
                    <li><strong>CAD (Computer-Aided Design)</strong> – Designing precise models before building.</li>
                    <li><strong>Electrical Systems</strong> – Wiring and integrating essential electronic components.</li>
                </ul>
            </div>
            <p>Through collaboration and problem-solving, we guide our students in designing, constructing, and programming competition-ready robots, helping them develop technical skills and confidence. Our mission is to inspire the next generation of engineers and innovators while fostering a spirit of creativity, perseverance, and community.</p>
            
            <h2>Join Us!</h2>
            <p>Join us as we <strong>train, build, and compete</strong>—shaping the future of robotics, one challenge at a time! 🚀🤖</p>
            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default About

