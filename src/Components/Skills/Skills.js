import './Skills.css';

// Icons
import mongodb from "../../images/icons/mongodb.svg";
import express from "../../images/icons/express.png";
import react from "../../images/icons/react.svg";
import nodejs from "../../images/icons/nodejs.svg";
import python from "../../images/icons/python.svg";
import java from "../../images/icons/java.svg";
import git from "../../images/icons/git.svg";
import nextJS from "../../images/icons/nextJS.svg";
import firebase from "../../images/icons/firebase.png";
import sass from "../../images/icons/sass.png";
import typescript from "../../images/icons/typescript.png";
import figma from "../../images/icons/figma.png";

import { Card } from "@mui/material";

const Skills = () => {
    return (
        <section id="Skills" className="flex-col">
            <h1>Skills and Technologies</h1>
            <div id="Skills-container" className="flex">
                <div id="Skill-grid" className="grid page-container">
                    <Card variant="outlined" className="skill-card flex-col">
                        <img src={firebase} alt="Google Firebase" className="skill-icon"></img>
                        <p className="tech-name">Firebase</p>
                    </Card>
                    <Card variant="outlined" className="skill-card flex-col">
                        <img src={nextJS} alt="nextJS" className="skill-icon"></img>
                        <p className="tech-name">NextJS</p>
                    </Card>  
                    <Card variant="outlined" className="skill-card flex-col">
                        <img src={typescript} alt="TypeScript" className="skill-icon"></img>
                        <p className="tech-name">TypeScript</p>
                    </Card>   
                    <Card variant="outlined" className="skill-card flex-col">
                        <img src={sass} alt="SASS" className="skill-icon"></img>
                        <p className="tech-name">SASS</p>
                    </Card>   
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
                        <img src={figma} alt="Figma" className="skill-icon"></img>
                        <p className="tech-name">Figma</p>
                    </Card> 
                    <Card variant="outlined" className="skill-card flex-col">
                        <img src={git} alt="Git" className="skill-icon"></img>
                        <p className="tech-name">Git</p>
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