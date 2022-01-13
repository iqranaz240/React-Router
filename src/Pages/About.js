import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'

function About() {
    let navigate = useNavigate();
    let {username} = useParams();
    return (
        <div>
            This is About {username}
            <button onClick={() =>{
                navigate("/profile")
            }} >Change to Profile</button>
        </div>
    )
}

export default About
