import './Projects.css';

import unite1 from "../../images/unite-1.png";
import pathfinder1 from "../../images/pathfinder-2.png";
import pokepedia1 from "../../images/pokepedia-1.png";
import catstronauts1 from "../../images/catstronauts-1.png";
import chess1 from "../../images/chess-1.png";
import webscraper1 from "../../images/web-scraper-2.png";

import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faUnity } from '@fortawesome/free-brands-svg-icons';
import { faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = () => {
    return (
        <div id="Projects" className="flex">
            <div id="Project-page-container" className="Page-container flex">
                <div className="Project-card flex-col">
                    <img src={unite1} alt="" className="Project-image"></img>
                    <div className="Project-header flex">
                        <h1 className="Project-name">UniteTheWorld</h1>
                        <div className="Technologies flex">
                            <div className="Tech flex-col">
                                <FontAwesomeIcon icon={faLeaf}></FontAwesomeIcon>
                                <p className="Tech-name">MongoDB</p>
                            </div>
                            <div className="Tech flex-col">
                                <FontAwesomeIcon icon={faServer}></FontAwesomeIcon>
                                <p className="Tech-name">Express</p>
                            </div>
                            <div className="Tech flex-col">
                                <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
                                <p className="Tech-name">React</p>
                            </div>
                            <div className="Tech flex-col">
                                <FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon>
                                <p className="Tech-name">NodeJS</p>
                            </div>
                        </div>
                    </div>
                    <div className="Project-info">
                        <p className="Project-description">A community-based organization that focuses on giving food to the people that need it the most. Includes user authentication and verification.</p>
                        <div className="Links flex">
                            <a href="https://unitetheworld.netlify.app/" target="_blank" rel="noreferrer" className="Project-link">Demo</a>
                            <a href="https://github.com/rJefferyXie/unitetheworld" target="_blank" rel="noreferrer" className="Project-link">Code</a>
                        </div>
                    </div>
                </div>
                <div className="Project-card flex">
                    <img src={pokepedia1} alt="" className="Project-image"></img>
                    <div className="Project-header flex">
                        <h1 className="Project-name">Poképedia</h1>
                        <div className="Technologies flex">
                            <div className="Tech flex-col">
                                <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
                                <p className="Tech-name">JavaScript</p>
                            </div>
                            <div className="Tech flex-col">
                                <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
                                <p className="Tech-name">HTML</p>
                            </div>
                            <div className="Tech flex-col">
                                <FontAwesomeIcon icon={faCss3}></FontAwesomeIcon>
                                <p className="Tech-name">CSS</p>
                            </div>
                            <div className="Tech flex-col">
                                <FontAwesomeIcon icon={faCodeBranch}></FontAwesomeIcon>
                                <p className="Tech-name">PokéAPI</p>
                            </div>
                        </div>
                    </div>
                    <div className="Project-info">
                        <p className="Project-description">A complete pokedex that includes information about every pokemon, a music player, and a built-in team generator. This website uses PokéAPI for the data.</p>
                        <div className="Links flex">
                            <a href="https://rjefferyxie.github.io/Pokepedia/" target="_blank" rel="noreferrer" className="Project-link">Demo</a>
                            <a href="https://github.com/rJefferyXie/Pokepedia" target="_blank" rel="noreferrer" className="Project-link">Code</a>
                        </div>
                    </div>
                </div>
                <div className="Project-card flex">
                <img src={catstronauts1} alt="" className="Project-image"></img>
                    <div className="Project-header flex">
                        <h1 className="Project-name">Catstronauts</h1>
                        <div className="Technologies flex">
                            <div className="Tech flex-col">
                                <FontAwesomeIcon icon={faUnity}></FontAwesomeIcon>
                                <p className="Tech-name">Unity</p>
                            </div>
                            <div className="Tech flex-col">
                                <FontAwesomeIcon icon={faGitlab}></FontAwesomeIcon>
                                <p className="Tech-name">Gitlab</p>
                            </div>
                            <div className="Tech flex-col">
                                <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                                <p className="Tech-name">C#</p>
                            </div>
                        </div>
                    </div>
                    <div className="Project-info">
                        <p className="Project-description">An arcade-like shooter game built with Unity. Travel to new planets in space to rescue your animal friends. I created this game with five other people.</p>
                        <div className="Links flex">
                            <a href="https://drive.google.com/file/d/1rnp4R0C5zJJRnaV1ghvS4k04SSIli_YM/view?usp=sharing" target="_blank" rel="noreferrer" className="Project-link">Demo</a>
                        </div>
                    </div>
                </div>
                <div className="Project-card flex">
                    <img src={webscraper1} alt="" className="Project-image"></img>
                    <div className="Project-header flex">
                        <h1 className="Project-name">Clothing Web Scraper</h1>
                        <div className="Technologies flex">
                            <div className="Tech flex-col">
                                <FontAwesomeIcon icon={faPython}></FontAwesomeIcon>
                                <p className="Tech-name">Python</p>
                            </div>
                        </div>
                    </div>
                    <div className="Project-info">
                        <p className="Project-description">This app is a one-stop shop that gathers data from popular clothing sites and presents the clothing items to its users in an easily readable format.</p>
                        <div className="Links flex">
                            <a href="https://github.com/rJefferyXie/Pathfinding-Visualizer" target="_blank" rel="noreferrer" className="Project-link">Code</a>
                        </div>
                    </div>
                </div>
                <div className="Project-card flex">
                    <img src={pathfinder1} alt="" className="Project-image"></img>
                    <div className="Project-header flex">
                        <h1 className="Project-name">Pathfinding Visualizer</h1>
                        <div className="Technologies flex">
                            <div className="Tech flex-col">
                                <FontAwesomeIcon icon={faPython}></FontAwesomeIcon>
                                <p className="Tech-name">Python</p>
                            </div>
                        </div>
                    </div>
                    <div className="Project-info">
                        <p className="Project-description">A visual pathfinding program that allows the user to create their own obstacles or mazes and then run different pathfinding algorithms on it.</p>
                        <div className="Links flex">
                            <a href="https://github.com/rJefferyXie/Pathfinding-Visualizer" target="_blank" rel="noreferrer" className="Project-link">Code</a>
                        </div>
                    </div>
                </div>
                <div className="Project-card flex">
                    <img src={chess1} alt="" className="Project-image"></img>
                    <div className="Project-header flex">
                        <h1 className="Project-name">Chess Engine Visualizer</h1>
                        <div className="Technologies flex">
                            <div className="Tech flex-col">
                                <FontAwesomeIcon icon={faPython}></FontAwesomeIcon>
                                <p className="Tech-name">Python</p>
                            </div>
                        </div>
                    </div>
                    <div className="Project-info">
                        <p className="Project-description">This program includes local multiplayer and single player. The AI uses the minimax algorithm, and you can watch it decide on its moves in real time. </p>
                        <div className="Links flex">
                            <a href="https://github.com/rJefferyXie/Chess-Program-with-Minimax-Visualizer" target="_blank" rel="noreferrer" className="Project-link">Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;