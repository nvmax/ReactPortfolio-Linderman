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
        </div>
    );
}

export default HeroImage;