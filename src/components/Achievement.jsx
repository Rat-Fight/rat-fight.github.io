

import '../css/acheivements.css'


export default function Acheivement() {

    const acheivements = [
        {   
            id: 1,
            header: "Secured Significant Grants",
            text: `Successfully obtained a $5,000 grant from Ball and Novelis, which supported the creation of an innovative can-crushing robot, CanBot.`
        },
        {
            id: 2,
            header: "Community Engagement",
            text: `Conducted outreach activities and generated interest in robotics during events like Mountain Day, attracting potential new members to the team.`
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

        <div className="acheivement">
            <div className="container">
                {acheivements.map((acheivement) => (
                <div className={(acheivement.id%2 == 0) ? "left" : "right"}>
                    <hr style={{ border: "1px solid grey", width: "90vw" }} />
                    <h3>
                        {acheivement.header}
                    </h3>
                    <p>
                        {acheivement.text}
                    </p>
                </div>
                ))}
            </div>
        </div>  

    )
}