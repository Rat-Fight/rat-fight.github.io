import '../css/team.css'

import image from '../assets/RatFight2023logo.png'
export default function Member(props) {
    return (

        <div className="member">
            <div className="image">
                <img src={image} alt={props.name} />
            </div>
            <div className="info">
                <h3 class="name">
                    {props.name}
                </h3>
                <div class="desc">
                    {props.description}
                </div>
            </div>
        </div>

    )
}