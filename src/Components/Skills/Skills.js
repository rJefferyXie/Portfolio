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
            <h1>Skills and Technologies</h1>
            <div id="Skills-container" className="flex">
                <div id="Skill-grid" className="grid page-container">
                    <div className="skill-card flex-col">
                        <img src={mongodb} alt="MongoDB" className="skill-icon"></img>
                        <p className="tech-name">MongoDB</p>
                    </div>
                    <div className="skill-card flex-col">
                        <img src={express} alt="Express" className="skill-icon"></img>
                        <p className="tech-name">Express</p>
                    </div>
                    <div className="skill-card flex-col">
                        <img src={react} alt="React" className="skill-icon"></img>
                        <p className="tech-name">React</p>
                    </div>
                    <div className="skill-card flex-col">
                        <img src={nodejs} alt="Node" className="skill-icon"></img>
                        <p className="tech-name">NodeJS</p>
                    </div> 
                    <div className="skill-card flex-col">
                        <img src={api} alt="Rest APIs" className="skill-icon"></img>
                        <p className="tech-name">Rest APIs</p>
                    </div> 
                    <div className="skill-card flex-col">
                        <img src={git} alt="Git" className="skill-icon"></img>
                        <p className="tech-name">Git</p>
                    </div>  
                    <div className="skill-card flex-col">
                        <img src={javascript} alt="JavaScript" className="skill-icon"></img>
                        <p className="tech-name">JavaScript</p>
                    </div>
                    <div className="skill-card flex-col">
                        <img src={html5} alt="HTML" className="skill-icon"></img>
                        <p className="tech-name">HTML</p>
                    </div>
                    <div className="skill-card flex-col">
                        <img src={css3} alt="CSS" className="skill-icon"></img>
                        <p className="tech-name">CSS</p>
                    </div>         
                    <div className="skill-card flex-col">
                        <img src={vscode} alt="VS Code" className="skill-icon"></img>
                        <p className="tech-name">VSCode</p>
                    </div>
                    <div className="skill-card flex-col">
                        <img src={python} alt="Python" className="skill-icon"></img>
                        <p className="tech-name">Python</p>
                    </div>
                    <div className="skill-card flex-col">
                        <img src={java} alt="Java" className="skill-icon"></img>
                        <p className="tech-name">Java</p>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Skills;