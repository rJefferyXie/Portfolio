import './Projects.css';

import image from "../../images/wallpaper.jpg";
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faUnity } from '@fortawesome/free-brands-svg-icons';
import { faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = () => {
    return (
        <div id="Projects" className="flex">
            <div id="Project-page-container" className="Page-container flex">
                <div className="Project-card flex">
                    <div className="Project-left">
                        <img src={image} alt="" className="Project-image"></img>
                        <div className="Technologies flex">
                            <div className="Tech flex-col">
                                <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>
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
                    <div className="Project-right flex-col">
                        <h1 className="Project-name">unitetheworld</h1>
                        <p className="Project-description">A community-based organization that focuses on giving food to the people that need it the most. Includes user authentication and verification, all built with the MERN stack.</p>
                        <div className="Links flex">
                            <a href="https://unitetheworld.netlify.app/" target="_blank" rel="noreferrer" className="Project-link">Demo</a>
                            <a href="https://github.com/rJefferyXie/unitetheworld" target="_blank" rel="noreferrer" className="Project-link">Code</a>
                        </div>
                    </div>
                </div>
                <div className="Project-card flex">
                    <div className="Project-left">
                        <img src={image} alt="" className="Project-image"></img>
                        <div className="Technologies flex">
                            <div className="Tech flex-col">
                                <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
                                <p className="Tech-name">React</p>
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
                    <div className="Project-right flex-col">
                        <h1 className="Project-name">Poképedia</h1>
                        <p className="Project-description">A complete pokedex that includes information about every pokemon, a music player, and a built-in team generator. This website utilizes PokéAPI for the data.</p>
                        <div className="Links flex">
                            <a href="https://rjefferyxie.github.io/Pokepedia/" target="_blank" rel="noreferrer" className="Project-link">Demo</a>
                            <a href="https://github.com/rJefferyXie/Pokepedia" target="_blank" rel="noreferrer" className="Project-link">Code</a>
                        </div>
                    </div>
                </div>
                <div className="Project-card flex">
                    <div className="Project-left">
                        <img src={image} alt="" className="Project-image"></img>
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
                    <div className="Project-right flex-col">
                        <h1 className="Project-name">Catstronauts</h1>
                        <p className="Project-description">An arcade-like shooter game built with Unity. Travel to new planets in space to rescue your animal friends. I created this game with five other people in my CMPT 306 course.</p>
                        <div className="Links flex">
                            <a href="https://drive.google.com/file/d/1rnp4R0C5zJJRnaV1ghvS4k04SSIli_YM/view?usp=sharing" target="_blank" rel="noreferrer" className="Project-link">Demo</a>
                        </div>
                    </div>
                </div>
                <div className="Project-card flex">
                    <div className="Project-left">
                        <img src={image} alt="" className="Project-image"></img>
                        <div className="Technologies flex">
                            <div className="Tech flex-col">
                                <FontAwesomeIcon icon={faPython}></FontAwesomeIcon>
                                <p className="Tech-name">Python</p>
                            </div>
                        </div>
                    </div>
                    <div className="Project-right flex-col">
                        <h1 className="Project-name">Pathfinding Visualizer</h1>
                        <p className="Project-description">A visual pathfinding program that allows the user to create their own obstacles or mazes and then run different pathfinding algorithms on it. Built with pygame library.</p>
                        <div className="Links flex">
                            <a href="https://github.com/rJefferyXie/Pathfinding-Visualizer" target="_blank" rel="noreferrer" className="Project-link">Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;