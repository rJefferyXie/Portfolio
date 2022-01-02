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
import github from "../../images/icons/github.svg";

const Skills = () => {
    return (
        <section id="Skills" className="flex-col">
            <h1 className="Page-title">Skills and Technologies</h1>
            <div className="Page-container flex">
                <div className="Tech flex-col">
                    <img src={mongodb} alt="" className="icon"></img>
                    <p className="Tech-name">MongoDB</p>
                </div>
                <div className="Tech flex-col">
                    <img src={express} alt="" className="icon"></img>
                    <p className="Tech-name">Express</p>
                </div>
                <div className="Tech flex-col">
                    <img src={react} alt="" className="icon"></img>
                    <p className="Tech-name">React</p>
                </div>
                <div className="Tech flex-col">
                    <img src={nodejs} alt="" className="icon"></img>
                    <p className="Tech-name">NodeJS</p>
                </div> 
                <div className="Tech flex-col">
                    <img src={javascript} alt="" className="icon"></img>
                    <p className="Tech-name">JavaScript</p>
                </div>
                <div className="Tech flex-col">
                    <img src={html5} alt="" className="icon"></img>
                    <p className="Tech-name">HTML</p>
                </div>
                <div className="Tech flex-col">
                    <img src={css3} alt="" className="icon"></img>
                    <p className="Tech-name">CSS</p>
                </div>         
                <div className="Tech flex-col">
                    <img src={python} alt="" className="icon"></img>
                    <p className="Tech-name">Python</p>
                </div>
                <div className="Tech flex-col">
                    <img src={java} alt="" className="icon"></img>
                    <p className="Tech-name">Java</p>
                </div>
                <div className="Tech flex-col">
                    <img src={github} alt="" className="icon"></img>
                    <p className="Tech-name">Git</p>
                </div>   
            </div>
        </section>
    )
}

export default Skills;