
import '../css/acheivements.css';

export default function Achievements() {

        const achievements = [

            
        {
            id: 1,
            header: "Program Growth and Structure",
            text: `Our program evolved from a small volunteer 
            club into a formalized student-led team now housed in the Communication and IT building. Beginning with only a few volunteers, we provided further student labor opportunities. 
            Today, the team includes 12 Berea College students who manage full program operations.`
        },
        {
            id: 2,
            header: "Student-Led Distinction",
            text: `Unlike most FRC teams that rely on professional engineers, Team 9152 is fully student-run, creating a strong Student-Led identity on campus. 
            Labor positions function as high-level management internships, giving students real leadership experience typically found in industry.`
        },
        {
            id: 3,
            header: "Community & Industry Impact",
            text: `Our team mentors 26 local high school students, serving as a bridge between the college and the community. 
            We also develop professional partnerships with industry leaders such as Novelis, bringing corporate engagement, collaboration, and STEM outreach directly to Berea College.`
        },
        {
            id: 4,
            header: "Rookie All-Star Award",
            text: `Recognized as one of the top emerging teams in the region for exceptional performance, leadership, and community impact, 
            earning automatic qualification to the FRC World Championships.`
        },
        {
            id: 5,
            header: "Community Engagement",
            text: `Conducted outreach activities and generated interest in robotics during events like Mountain Day, attracting potential new members to the team.`
        },
        {
            id: 6,
            header: "CanBot Project",
            text: `Designed and built the CanBot, an engineering marvel that effectively crushes cans, 
            highlighting the team’s practical application of FRC (FIRST Robotics Competition) components and engineering principles.`
        },
    ]

    return (
        <div className="achievements">
            <div className="container">
                <h1 className='blue-header-text-white'>Our Achievements</h1>
                <div>
                    {achievements.map((achievement) => (
                        <div className='achievement-box'>
                            <div className={(achievement.id%2 == 0) ? "left" : "right"}>
                                <h3>
                                    {achievement.header}
                                </h3>
                                <p>
                                    {achievement.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}