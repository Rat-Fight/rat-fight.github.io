import '../css/join.css'


let PLACEHOLDER_TEXT = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

const Join = () => {

    function redirect() {
        window.location.href = "https://forms.google.com"
    }
    return (
        <div className='join'>
            <div className='container'>
                <h1>Join Our Team!</h1> 
                <img src='src\assets\join1.jpg'/> 
            </div>

            <div>
                 <div className='container'>                    
                    <h2>Why Join Us?</h2>
                    <p>{PLACEHOLDER_TEXT} {PLACEHOLDER_TEXT}</p>
                    <div>
                        <button className='join-button' onClick={redirect}>Join Now!</button>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Join;

 