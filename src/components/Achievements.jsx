
import '../css/acheivements.css';

export default function Achievements() {

        const achievements = [
        {
            id: 1,
            header: "Rookie All-Star Award",
            text: `Recognized as one of the top emerging teams in the region for exceptional performance, leadership, and community impact, earning automatic qualification to the FRC World Championships.`
        },
        {   
            id: 2,
            header: "Labor Opportunities and Growth on Berea Campus",
            text: `To be updated`
        },
        {
            id: 3,
            header: "Community Engagement",
            text: `Conducted outreach activities and generated interest in robotics during events like Mountain Day, attracting potential new members to the team.`
        },
        {
            id: 4,
            header: "CanBot Project",
            text: `Designed and built the CanBot, an engineering marvel that effectively crushes cans, highlighting the team’s practical application of FRC (FIRST Robotics Competition) components and engineering principles.`
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