import './Projects.css';

import unite1 from "../../images/projects/unite-1.png";
import pathfinder1 from "../../images/projects/pathfinder-1.png";
import pokepedia1 from "../../images/projects/pokepedia-1.png";
import catstronauts1 from "../../images/projects/catstronauts-1.png";
import chess1 from "../../images/projects/chess-1.png";
import webscraper1 from "../../images/projects/web-scraper-2.png";

// Icons
import mongodb from "../../images/icons/mongodb.svg";
import express from "../../images/icons/express.png";
import react from "../../images/icons/react.svg";
import nodejs from "../../images/icons/nodejs.svg";
// import javascript from "../../images/icons/javascript.svg";
// import html5 from "../../images/icons/html5.svg";
// import css3 from "../../images/icons/css3.svg";
import csharp from "../../images/icons/csharp.svg";
import python from "../../images/icons/python.svg";
// import api from "../../images/icons/api.svg";
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
            <div id="Projects-header" className="flex">
                <h1>My Projects</h1>
                <button id="HoverEffects" onClick={HoverEffect}>Hover Effects</button>
            </div>
            <div id="Projects-container" className="flex">
                <div id="Project-grid" className="grid page-container">
                <div className="Project-card flex">
                        <img src={pokepedia1} alt="Pokepedia" className="Project-image"></img>
                        <div className="Project-header active-header flex">
                            <h3 className="Project-name">Poképedia</h3>
                            <div className="Technologies flex">
                                <div className="tech-wrapper flex-col">
                                    <img src={mongodb} alt="MongoDB" className="icon"></img>
                                    <p className="tech-name">MongoDB</p>
                                </div>
                                <div className="tech-wrapper flex-col">
                                    <img src={express} alt="Express" className="icon"></img>
                                    <p className="tech-name">Express</p>
                                </div>
                                <div className="tech-wrapper flex-col">
                                    <img src={react} alt="React" className="icon"></img>
                                    <p className="tech-name">React</p>
                                </div>
                                <div className="tech-wrapper flex-col">
                                    <img src={nodejs} alt="Node" className="icon"></img>
                                    <p className="tech-name">NodeJS</p>
                                </div>
                            </div>
                        </div>
                        <div className="Project-info active-info">
                            <p className="Project-description">A complete pokedex with a built-in team generator that displays information about every pokemon in a beautiful and responsive UI.</p>
                            <div className="Links flex">
                                <a href="https://pokepediajx.netlify.app/" target="_blank" rel="noreferrer" className="Project-link">Demo</a>
                                <a href="https://github.com/rJefferyXie/Pokepedia-React" target="_blank" rel="noreferrer" className="Project-link">Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="Project-card flex-col">
                        <img src={unite1} alt="Unite The World" className="Project-image"></img>
                        <div className="Project-header active-header flex">
                            <h3 className="Project-name">UniteTheWorld</h3>
                            <div className="Technologies flex">
                                <div className="tech-wrapper flex-col">
                                    <img src={mongodb} alt="MongoDB" className="icon"></img>
                                    <p className="tech-name">MongoDB</p>
                                </div>
                                <div className="tech-wrapper flex-col">
                                    <img src={express} alt="Express" className="icon"></img>
                                    <p className="tech-name">Express</p>
                                </div>
                                <div className="tech-wrapper flex-col">
                                    <img src={react} alt="React" className="icon"></img>
                                    <p className="tech-name">React</p>
                                </div>
                                <div className="tech-wrapper flex-col">
                                    <img src={nodejs} alt="Node" className="icon"></img>
                                    <p className="tech-name">NodeJS</p>
                                </div>
                            </div>
                        </div>
                        <div className="Project-info active-info">
                            <p className="Project-description">A community-based organization that focuses on giving food to those who need it. Includes user authentication and verification.</p>
                            <div className="Links flex">
                                <a href="https://unitetheworld.netlify.app/" target="_blank" rel="noreferrer" className="Project-link">Demo</a>
                                <a href="https://github.com/rJefferyXie/unitetheworld" target="_blank" rel="noreferrer" className="Project-link">Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="Project-card flex">
                        <img src={pathfinder1} alt="Pathfinding Visualizer" className="Project-image"></img>
                        <div className="Project-header active-header flex">
                            <h3 className="Project-name">Pathfinding Visualizer</h3>
                            <div className="Technologies flex">
                                <div className="tech-wrapper flex-col">
                                    <img src={python} alt="Python" className="icon"></img>
                                    <p className="tech-name">Python</p>
                                </div>
                            </div>
                        </div>
                        <div className="Project-info active-info">
                            <p className="Project-description">A visual pathfinding program that allows the user to create their own obstacles or mazes and then run pathfinding algorithms on them.</p>
                            <div className="Links flex">
                                <a href="https://rjefferyxie.github.io/Pathfinding-Demo/" target="_blank" rel="noreferrer" className="Project-link">Demo</a>
                                <a href="https://github.com/rJefferyXie/Pathfinding-Visualizer" target="_blank" rel="noreferrer" className="Project-link">Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="Project-card flex">
                    <img src={catstronauts1} alt="Catstronauts" className="Project-image"></img>
                        <div className="Project-header active-header flex">
                            <h3 className="Project-name">Catstronauts</h3>
                            <div className="Technologies flex">
                                <div className="tech-wrapper flex-col">
                                    <img src={unity} alt="Unity" className="icon"></img>
                                    <p className="tech-name">Unity</p>
                                </div>
                                <div className="tech-wrapper flex-col">
                                    <img src={gitlab} alt="Gitlab" className="icon"></img>
                                    <p className="tech-name">Gitlab</p>
                                </div>
                                <div className="tech-wrapper flex-col">
                                    <img src={csharp} alt="C#" className="icon"></img>
                                    <p className="tech-name">C#</p>
                                </div>
                            </div>
                        </div>
                        <div className="Project-info active-info">
                            <p className="Project-description">A cat-themed shooter game built with Unity. Travel to other planets in space to rescue your animal friends from the evil aliens!</p>
                            <div className="Links flex">
                                <a href="https://drive.google.com/file/d/1rnp4R0C5zJJRnaV1ghvS4k04SSIli_YM/view?usp=sharing" target="_blank" rel="noreferrer" className="Project-link">Demo</a>
                            </div>
                        </div>
                    </div>
                    <div className="Project-card flex">
                        <img src={webscraper1} alt="Clothing Web Scraper" className="Project-image"></img>
                        <div className="Project-header active-header flex">
                            <h3 className="Project-name">Clothing Web Scraper</h3>
                            <div className="Technologies flex">
                                <div className="tech-wrapper flex-col">
                                    <img src={python} alt="Python" className="icon"></img>
                                    <p className="tech-name">Python</p>
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
                        <img src={chess1} alt="Chess Engine Visualizer" className="Project-image"></img>
                        <div className="Project-header active-header flex">
                            <h3 className="Project-name">Chess Engine Visualizer</h3>
                            <div className="Technologies flex">
                                <div className="tech-wrapper flex-col">
                                    <img src={python} alt="Python" className="icon"></img>
                                    <p className="tech-name">Python</p>
                                </div>
                            </div>
                        </div>
                        <div className="Project-info active-info">
                            <p className="Project-description">A chess program that includes local multiplayer and single player vs an AI, which makes its moves using the minimax algorithm.</p>
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