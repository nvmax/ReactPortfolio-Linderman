import "../styles.css";
import React from "react";
import Hero from "../images/Me.jpg";

function HeroImage() {
    return (
        <div className="hero">
        <img className="hero_pic" src={Hero} alt="Jerrod Linderman Full Stack Developer" />
        <br/>
        <br/>
        <br/>
        <p>
            Im a website designer 
        </p>
        </div>
    );
}

export default HeroImage;