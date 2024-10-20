const PLACEHOLDER_TEXT = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

import Team from "./Team"
import '../css/App.css'


function Index() {

    return (
        <>  

            <div className="landing">
                <div className='landing-text'>
                    <h1>Welcome to Rat Fight Robotics Team</h1>
                </div>
            </div>
            <div class="goals">
                <div class="container">
                    <h1>What We Do</h1>
                    <div class="cards">
                        <div> {PLACEHOLDER_TEXT} </div>
                        <div> {PLACEHOLDER_TEXT} </div>
                        <div> {PLACEHOLDER_TEXT} </div>
                        <div> {PLACEHOLDER_TEXT} </div>
                    </div>
                </div>
            </div>

            <Team/>
        </>
    )
}


export default Index

