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

import { Card } from "@mui/material";

const Skills = () => {
    return (
        <section id="Skills" className="flex-col">
            <h1>Skills and Technologies</h1>
            <div id="Skills-container" className="flex">
                <div id="Skill-grid" className="grid page-container">
                    <Card variant="outlined" className="skill-card flex-col">
                        <img src={mongodb} alt="MongoDB" className="skill-icon"></img>
                        <p className="tech-name">MongoDB</p>
                    </Card>
                    <Card variant="outlined" className="skill-card flex-col">
                        <img src={express} alt="Express" className="skill-icon"></img>
                        <p className="tech-name">Express</p>
                    </Card>
                    <Card variant="outlined" className="skill-card flex-col">
                        <img src={react} alt="React" className="skill-icon"></img>
                        <p className="tech-name">React</p>
                    </Card>
                    <Card variant="outlined" className="skill-card flex-col">
                        <img src={nodejs} alt="Node" className="skill-icon"></img>
                        <p className="tech-name">NodeJS</p>
                    </Card> 
                    <Card variant="outlined" className="skill-card flex-col">
                        <img src={api} alt="Rest APIs" className="skill-icon"></img>
                        <p className="tech-name">Rest APIs</p>
                    </Card> 
                    <Card variant="outlined" className="skill-card flex-col">
                        <img src={git} alt="Git" className="skill-icon"></img>
                        <p className="tech-name">Git</p>
                    </Card>  
                    <Card variant="outlined" className="skill-card flex-col">
                        <img src={javascript} alt="JavaScript" className="skill-icon"></img>
                        <p className="tech-name">JavaScript</p>
                    </Card>
                    <Card variant="outlined" className="skill-card flex-col">
                        <img src={html5} alt="HTML" className="skill-icon"></img>
                        <p className="tech-name">HTML</p>
                    </Card>
                    <Card variant="outlined" className="skill-card flex-col">
                        <img src={css3} alt="CSS" className="skill-icon"></img>
                        <p className="tech-name">CSS</p>
                    </Card>         
                    <Card variant="outlined" className="skill-card flex-col">
                        <img src={vscode} alt="VS Code" className="skill-icon"></img>
                        <p className="tech-name">VSCode</p>
                    </Card>
                    <Card variant="outlined" className="skill-card flex-col">
                        <img src={python} alt="Python" className="skill-icon"></img>
                        <p className="tech-name">Python</p>
                    </Card>
                    <Card variant="outlined" className="skill-card flex-col">
                        <img src={java} alt="Java" className="skill-icon"></img>
                        <p className="tech-name">Java</p>
                    </Card> 
                </div>
            </div>
        </section>
    )
}

export default Skills;