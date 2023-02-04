import React from "react";
import "./skillLogos.css";

function skillLogos() {

    return (

        <div className="skills_display">

            <img loading="eager" className="skill_logo" src={require('../images/node.png')}  alt="node.js"/>
            <img loading="eager" className="skill_logo" src={require('../images/react-with-name.png')} alt="node.js"/>
            <img loading="eager" className="skill_logo" src={require('../images/python-5-logo-png-transparent.png')} alt="node.js"/>
            <img loading="eager" className="skill_logo" src={require('../images/java-logo-1.png')} alt="Java"/>
            <img loading="eager" className="skill_logo" src={require('../images/pngfind.com-web-designing-icon-png-1706361.png')} alt="web development"/>
            <img loading="eager" className="skill_logo" src={require('../images/android-6-512.png')} alt="android"/>


        </div>

    )

}

export default skillLogos;