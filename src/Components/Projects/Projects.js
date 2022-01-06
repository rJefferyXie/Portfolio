import './Projects.css';

import unite1 from "../../images/unite-1.png";
import pathfinder1 from "../../images/pathfinder-2.png";
import pokepedia1 from "../../images/pokepedia-1.png";
import catstronauts1 from "../../images/catstronauts-1.png";
import chess1 from "../../images/chess-1.png";
import webscraper1 from "../../images/web-scraper-2.png";

// Icons
import mongodb from "../../images/icons/mongodb.svg";
import express from "../../images/icons/express.png";
import react from "../../images/icons/react.svg";
import nodejs from "../../images/icons/nodejs.svg";
import javascript from "../../images/icons/javascript.svg";
import html5 from "../../images/icons/html5.svg";
import css3 from "../../images/icons/css3.svg";
import csharp from "../../images/icons/csharp.svg";
import python from "../../images/icons/python.svg";
import api from "../../images/icons/api.svg";
import unity from "../../images/icons/unity.svg";
import gitlab from "../../images/icons/gitlab.svg";

const Projects = () => {
    const HoverEffect = () => {
        let headers = document.getElementsByClassName("Project-header");
        let info = document.getElementsByClassName("Project-info")
        for (var i = 0; i < headers.length; i++) {
            headers[i].classList.toggle("active-header");
            headers[i].classList.toggle("translate-up");
            info[i].classList.toggle("active-info");
        };
    };

    return (
        <section id="Projects" className="flex-col">
            <h1 className="Page-title">My Projects</h1>
            <button onClick={HoverEffect}>Hover Effects</button>
            <div id="Projects-container" className="flex">
                <div id="Project-grid" className="Page-container">
                    <div className="Project-card flex-col">
                        <img src={unite1} alt="" className="Project-image"></img>
                        <div className="Project-header active-header flex">
                            <h1 className="Project-name">UniteTheWorld</h1>
                            <div className="Technologies flex">
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
                            </div>
                        </div>
                        <div className="Project-info active-info">
                            <p className="Project-description">A community-based organization that focuses on giving food to those who need it the most. Includes user authentication and verification.</p>
                            <div className="Links flex">
                                <a href="https://unitetheworld.netlify.app/" target="_blank" rel="noreferrer" className="Project-link">Demo</a>
                                <a href="https://github.com/rJefferyXie/unitetheworld" target="_blank" rel="noreferrer" className="Project-link">Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="Project-card flex">
                        <img src={pokepedia1} alt="" className="Project-image"></img>
                        <div className="Project-header active-header flex">
                            <h1 className="Project-name">Poképedia</h1>
                            <div className="Technologies flex">
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
                                    <img src={api} alt="" id="api" className="icon"></img>
                                    <p className="Tech-name">REST API</p>
                                </div>
                            </div>
                        </div>
                        <div className="Project-info active-info">
                            <p className="Project-description">A complete pokedex that includes information about every pokemon, a music player, and a built-in team generator.</p>
                            <div className="Links flex">
                                <a href="https://rjefferyxie.github.io/Pokepedia/" target="_blank" rel="noreferrer" className="Project-link">Demo</a>
                                <a href="https://github.com/rJefferyXie/Pokepedia" target="_blank" rel="noreferrer" className="Project-link">Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="Project-card flex">
                    <img src={catstronauts1} alt="" className="Project-image"></img>
                        <div className="Project-header active-header flex">
                            <h1 className="Project-name">Catstronauts</h1>
                            <div className="Technologies flex">
                                <div className="Tech flex-col">
                                    <img src={unity} alt="" className="icon"></img>
                                    <p className="Tech-name">Unity</p>
                                </div>
                                <div className="Tech flex-col">
                                    <img src={gitlab} alt="" className="icon"></img>
                                    <p className="Tech-name">Gitlab</p>
                                </div>
                                <div className="Tech flex-col">
                                    <img src={csharp} alt="" className="icon"></img>
                                    <p className="Tech-name">C#</p>
                                </div>
                            </div>
                        </div>
                        <div className="Project-info active-info">
                            <p className="Project-description">A cat-themed shooter game built with Unity. Travel to other planets in outer space to rescue your animal friends from the evil aliens!</p>
                            <div className="Links flex">
                                <a href="https://drive.google.com/file/d/1rnp4R0C5zJJRnaV1ghvS4k04SSIli_YM/view?usp=sharing" target="_blank" rel="noreferrer" className="Project-link">Demo</a>
                            </div>
                        </div>
                    </div>
                    <div className="Project-card flex">
                        <img src={webscraper1} alt="" className="Project-image"></img>
                        <div className="Project-header active-header flex">
                            <h1 className="Project-name">Clothing Web Scraper</h1>
                            <div className="Technologies flex">
                                <div className="Tech flex-col">
                                    <img src={python} alt="" className="icon"></img>
                                    <p className="Tech-name">Python</p>
                                </div>
                            </div>
                        </div>
                        <div className="Project-info active-info">
                            <p className="Project-description">A webscraping application that gathers clothing information from popular clothing sites and presents the data all in one place.</p>
                            <div className="Links flex">
                                <a href="https://github.com/rJefferyXie/Pathfinding-Visualizer" target="_blank" rel="noreferrer" className="Project-link">Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="Project-card flex">
                        <img src={pathfinder1} alt="" className="Project-image"></img>
                        <div className="Project-header active-header flex">
                            <h1 className="Project-name">Pathfinding Visualizer</h1>
                            <div className="Technologies flex">
                                <div className="Tech flex-col">
                                    <img src={python} alt="" className="icon"></img>
                                    <p className="Tech-name">Python</p>
                                </div>
                            </div>
                        </div>
                        <div className="Project-info active-info">
                            <p className="Project-description">A visual pathfinding program that allows the user to create their own obstacles or mazes and then run different pathfinding algorithms on it.</p>
                            <div className="Links flex">
                                <a href="https://github.com/rJefferyXie/Pathfinding-Visualizer" target="_blank" rel="noreferrer" className="Project-link">Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="Project-card flex">
                        <img src={chess1} alt="" className="Project-image"></img>
                        <div className="Project-header active-header flex">
                            <h1 className="Project-name">Chess Engine Visualizer</h1>
                            <div className="Technologies flex">
                                <div className="Tech flex-col">
                                    <img src={python} alt="" className="icon"></img>
                                    <p className="Tech-name">Python</p>
                                </div>
                            </div>
                        </div>
                        <div className="Project-info active-info">
                            <p className="Project-description">A chess program that includes local multiplayer and single player. The AI uses the minimax algorithm, which you can observe in real time.</p>
                            <div className="Links flex">
                                <a href="https://github.com/rJefferyXie/Chess-Program-with-Minimax-Visualizer" target="_blank" rel="noreferrer" className="Project-link">Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;