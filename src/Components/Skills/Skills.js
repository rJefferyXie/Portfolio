import './Skills.css';

// Icons
import mongodb from "../../images/icons/mongodb.svg";
import express from "../../images/icons/express.png";
import react from "../../images/icons/react.svg";
import nodejs from "../../images/icons/nodejs.svg";
import javascript from "../../images/icons/javascript.svg";
import html5 from "../../images/icons/html5.svg";
import css3 from "../../images/icons/css3.svg";
import python from "../../images/icons/python.svg";
import java from "../../images/icons/java.svg";
import api from "../../images/icons/api.svg";
import git from "../../images/icons/git.svg";
import vscode from "../../images/icons/vscode.svg";

const Skills = () => {
    return (
        <section id="Skills" className="flex-col">
            <h1 className="Page-title">Skills and Technologies</h1>
            <div id="Skills-container" className="flex">
                <div id="Skill-grid" className="Page-container">
                    <div className="skill-card flex-col">
                        <img src={mongodb} alt="" className="skill-icon"></img>
                        <p className="skill-name">MongoDB</p>
                    </div>
                    <div className="skill-card flex-col">
                        <img src={express} alt="" className="skill-icon"></img>
                        <p className="skill-name">Express</p>
                    </div>
                    <div className="skill-card flex-col">
                        <img src={react} alt="" className="skill-icon"></img>
                        <p className="skill-name">React</p>
                    </div>
                    <div className="skill-card flex-col">
                        <img src={nodejs} alt="" className="skill-icon"></img>
                        <p className="skill-name">NodeJS</p>
                    </div> 
                    <div className="skill-card flex-col">
                        <img src={api} alt="" className="skill-icon"></img>
                        <p className="skill-name">Rest API</p>
                    </div> 
                    <div className="skill-card flex-col">
                        <img src={git} alt="" className="skill-icon"></img>
                        <p className="skill-name">Git</p>
                    </div>  
                    <div className="skill-card flex-col">
                        <img src={javascript} alt="" className="skill-icon"></img>
                        <p className="skill-name">JavaScript</p>
                    </div>
                    <div className="skill-card flex-col">
                        <img src={html5} alt="" className="skill-icon"></img>
                        <p className="skill-name">HTML</p>
                    </div>
                    <div className="skill-card flex-col">
                        <img src={css3} alt="" className="skill-icon"></img>
                        <p className="skill-name">CSS</p>
                    </div>         
                    <div className="skill-card flex-col">
                        <img src={vscode} alt="" className="skill-icon"></img>
                        <p className="skill-name">VSCode</p>
                    </div>
                    <div className="skill-card flex-col">
                        <img src={python} alt="" className="skill-icon"></img>
                        <p className="skill-name">Python</p>
                    </div>
                    <div className="skill-card flex-col">
                        <img src={java} alt="" className="skill-icon"></img>
                        <p className="skill-name">Java</p>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Skills;