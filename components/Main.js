import React from "react"
import MainButtons from "./MainButtons.js"

export default function Main(){
    return(
        <div className="main">
            <img className="main--img" src="../images/avatar.jpg" alt="Profile photo"/>
            <div className="main--text">
                <h1 className="main--title">Gabriel Da Silva</h1>
                <h3 className="main--subtitle">Frontend Developer</h3>
                <div className="main--link"> <a href="https://gabrieldasilva.tech">gabrieldasilva.tech</a></div>
                <MainButtons />
                <div className="main--section">
                    <h4 >About</h4>
                        <p>First-gen student passionate about fintech and product management. Skilled in data analysis, web development, and collaborative problem-solving.</p>
                    <h4>Interests</h4>
                        <p>Swimmer. Fake movie critique. LGBTQ history Connoisseur. Tofu buff.</p>
                </div>
            </div>
        </div>
    )
}