import '../css/team.css';

const disc_placeholder = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`


import Member from './Member'
const Team = () => {
    return (
        <div className="team">
            <div className='container'>
                <h1> Our Team </h1>
                    <Member name='Dr. Scott Heggen'  description={disc_placeholder}/>
                    <Member name='David Brothers'  description={disc_placeholder}/>
                    <Member name='Besher Kitaz'  description={disc_placeholder}/>

            </div>
        </div>
    )
}

export default Team;

