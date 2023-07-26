import React from "react"

export default function MainButtons(){
    return(
    <div className="main--buttons">
        <form action="mailto:gabrieldasilva@uni.minerva.edu">
            <button className="btn" id= "btn-1" type="submit" target="_blank"><img className="btn--img1" src="../images/envelope.png"/>Email</button>
        </form>
        <form action="https://www.linkedin.com/in/gabriel-dasilva/">
            <button className="btn" type="submit" id= "btn-2" target="_blank"><img className="btn--img2" src="../images/linkedin.png"/>Linkedin</button>
        </form>
    </div>
    )
}