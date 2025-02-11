import './Projects.css';

import pokemongame1 from '../../images/projects/pokemongame-1.png';
import pokemongame2 from '../../images/projects/pokemongame-2.png';
import pokemongame3 from '../../images/projects/pokemongame-3.png';

import pokepedia1 from "../../images/projects/pokepedia-1.png";
import pokepedia2 from "../../images/projects/pokepedia-2.png";
import pokepedia3 from "../../images/projects/pokepedia-3.png";

// import unite1 from "../../images/projects/unite-1.png";
// import unite2 from "../../images/projects/unite-2.png";
// import unite3 from "../../images/projects/unite-3.png";

import prosper1 from "../../images/projects/prosper-1.png"
import prosper2 from "../../images/projects/prosper-2.png"
import prosper3 from "../../images/projects/prosper-3.png"

import pathfinder1 from "../../images/projects/pathfinder-1.png";
import pathfinder2 from "../../images/projects/pathfinder-2.png";
import pathfinder3 from "../../images/projects/pathfinder-3.png";

import spotify1 from "../../images/projects/spotify-3.png";
import spotify2 from "../../images/projects/spotify-2.png";
import spotify3 from "../../images/projects/spotify-1.png";

import catstronauts1 from "../../images/projects/catstronauts-1.png";
import catstronauts2 from "../../images/projects/catstronauts-2.png";
import catstronauts3 from "../../images/projects/catstronauts-3.png";

// import chess1 from "../../images/projects/chess-1.png";
// import chess2 from "../../images/projects/chess-2.png";
// import chess3 from "../../images/projects/chess-3.png";

// import webscraper1 from "../../images/projects/web-scraper-1.png";
// import webscraper2 from "../../images/projects/web-scraper-2.png";
// import webscraper3 from "../../images/projects/web-scraper-3.png";

import { Button, Card } from "@mui/material";

import { useState } from 'react';

const Projects = () => {
    const [image1, setImage1] = useState(pokepedia1);
    const [image2, setImage2] = useState(spotify1);
    const [image3, setImage3] = useState(pathfinder1);
    const [image4, setImage4] = useState(catstronauts1);
    const [image5, setImage5] = useState(pokemongame1);
    const [image6, setImage6] = useState(prosper1);

    // const [fullImage, setFullImage] = useState("");
    // const [viewingFullImage, setViewingFullImage] = useState(false);

    // const viewFullImage = (image) => {
    //     setFullImage(image);
    //     setViewingFullImage(true);
    // }

    const setSelectedImage = (group, target, image) => {
        let selected = document.getElementById(target);
        let imageGroup = document.getElementsByClassName(group);
        for (var i = 0; i < imageGroup.length; i++) {
            imageGroup[i].style.color = "#115e9c";
        }
        selected.style.color = "#1a98ca";

        let imageNumber = group.slice(-1);
        switch(imageNumber) {
            case "1": 
                setImage1(image);
                break;
            case "2":
                setImage2(image);
                break;
            case "3": 
                setImage3(image);
                break;
            case "4":
                setImage4(image);
                break;
            case "5": 
                setImage5(image);
                break;
            case "6":
                setImage6(image);
                break;
            default:
                break;
        }
    }

    return (
        <section id="Projects" className="flex-col">
            <div id="Projects-header" className="flex">
                <h1>My Projects</h1>
            </div>
            {/* {viewingFullImage === true ? <div id="Full-image-wrapper" className="flex-col">
                <ClickAwayListener onClickAway={() => setViewingFullImage(false)} className="flex">
                    <img id="Full-image" src={fullImage} alt=""></img>
                </ClickAwayListener>
                <Button variant="outlined" onClickAway={() => setViewingFullImage(false)} style={{textShadow: "initial", margin: "8px auto", color: "white", borderColor: "white"}}>Exit Fullscreen</Button>
            </div> : null} */}
            <div id="Projects-container" className="flex-col">
                <Card className="Project-card flex" variant="outlined">
                    <div className="Project-image-container flex-col">
                        <img src={image5} alt="Pokepedia" className="Project-image"></img>
                        <div className="Project-image-buttons flex">
                            <Button variant="outlined" className="image-select-5" id="img-13" onClick={() => setSelectedImage("image-select-5", "img-13", pokemongame1)} style={{margin: "0px 4px", color: "#1a98ca", textShadow: "initial"}}>Image 1</Button>
                            <Button variant="outlined" className="image-select-5" id="img-14" onClick={() => setSelectedImage("image-select-5", "img-14", pokemongame2)} style={{margin: "0px 4px", color: "#115e9c", textShadow: "initial"}}>Image 2</Button>
                            <Button variant="outlined" className="image-select-5" id="img-15" onClick={() => setSelectedImage("image-select-5", "img-15", pokemongame3)} style={{margin: "0px 4px", color: "#115e9c", textShadow: "initial"}}>Image 3</Button>
                        </div>
                    </div>
                    <div className="Project-info-container flex-col">
                        <div className="Project-info flex-col">
                            <h2 className="Project-name">Pokémon Game</h2>
                            <h4 className="Project-header technologies">
                                Technologies Used: <span>Firebase, React.js, Next.js, TypeScript, Redux, SCSS, Cypress, Framer Motion and MaterialUI</span>
                            </h4>
                            <h4 className="Project-header">Brief Description</h4>
                            <p className="Project-description">A pokémon-themed incremental / idle game that was inspired by games like Cookie Clicker and Clicker Heroes.</p>
                            <h4 className="Project-header">Key Features</h4>
                            <ul className="Project-points">
                                <li>Used Next.js Images to optimize images for all screen sizes, reducing the initial load time for the home page by up to 8 seconds and network payloads by ~22MB.</li>
                                <li>Achieved a score of 85-100% for performance, accessibility, best practices, and SEO via <a className="Text-link" href="https://imgur.com/a/xAnkZQZ" target="_blank" rel="noreferrer">Google Lighthouse.</a></li>
                                <li>Created several <a className="Text-link" href="https://www.youtube.com/watch?v=CF9hlIZCe4o&feature=youtu.be" target="_blank" rel="noreferrer">end-to-end tests</a> using Cypress to automatically test major components of the application.</li>
                            </ul>
                        </div>
                        <div className="Links flex">
                            <Button variant="contained" href="https://heropokemon.web.app/" target="_blank" rel="noreferrer" style={{margin: "0px 4px", backgroundColor: "#115e9c"}}>Demo</Button>
                            <Button variant="contained" href="https://github.com/rJefferyXie/heropokemon" target="_blank" rel="noreferrer" style={{margin: "0px 4px", backgroundColor: "#115e9c"}}>Code</Button>
                        </div>
                    </div>
                </Card>
                <Card className="Project-card flex" variant="outlined">
                    <div className="Project-image-container flex-col">
                        <img src={image1} alt="Pokepedia" className="Project-image"></img>
                        <div className="Project-image-buttons flex">
                            <Button variant="outlined" className="image-select-1" id="img-1" onClick={() => setSelectedImage("image-select-1", "img-1", pokepedia1)} style={{margin: "0px 4px", color: "#1a98ca", textShadow: "initial"}}>Image 1</Button>
                            <Button variant="outlined" className="image-select-1" id="img-2" onClick={() => setSelectedImage("image-select-1", "img-2", pokepedia2)} style={{margin: "0px 4px", color: "#115e9c", textShadow: "initial"}}>Image 2</Button>
                            <Button variant="outlined" className="image-select-1" id="img-3" onClick={() => setSelectedImage("image-select-1", "img-3", pokepedia3)} style={{margin: "0px 4px", color: "#115e9c", textShadow: "initial"}}>Image 3</Button>
                        </div>
                    </div>
                    <div className="Project-info-container flex-col">
                        <div className="Project-info flex-col">
                            <h2 className="Project-name">Pokédex</h2>
                            <h4 className="Project-header technologies">
                                Technologies Used: <span>MongoDB, Express, React, NodeJS, Redux, MUI, Heroku, Netlify</span>
                            </h4>
                            <h4 className="Project-header">Brief Description</h4>
                            <p className="Project-description">A complete pokedex with a built-in team generator that displays information about every pokemon in a beautiful and responsive UI.</p>
                            <h4 className="Project-header">Key Features</h4>
                            <ul className="Project-points">
                                <li>Developed a loading screen with 300+ pokémon facts scraped from the Internet using Python, improving the user experience during long loading times.</li>
                                <li>Implemented a unique interface with 10+ colour themes that adapt to the selected pokémon, helping to catch and retain user attention.</li>
                                <li>Implemented lazy-loading images and pagination to improve performance on pages with 200+ images.</li>
                            </ul>
                        </div>
                        <div className="Links flex">
                            <Button variant="contained" href="https://pokepediajx.netlify.app/" target="_blank" rel="noreferrer" style={{margin: "0px 4px", backgroundColor: "#115e9c"}}>Demo</Button>
                            <Button variant="contained" href="https://github.com/rJefferyXie/Pokepedia-React" target="_blank" rel="noreferrer" style={{margin: "0px 4px", backgroundColor: "#115e9c"}}>Code</Button>
                        </div>
                    </div>
                </Card>
                <Card className="Project-card flex" variant="outlined">
                    <div className="Project-image-container flex-col">
                        <img src={image6} alt="Chess Engine Visualizer" className="Project-image"></img>
                        <div className="Project-image-buttons flex">
                            <Button variant="outlined" className="image-select-6" id="img-16" onClick={() => setSelectedImage("image-select-6", "img-16", prosper1)} style={{margin: "0px 4px", color: "#1a98ca", textShadow: "initial"}}>Image 1</Button>
                            <Button variant="outlined" className="image-select-6" id="img-17" onClick={() => setSelectedImage("image-select-6", "img-17", prosper2)} style={{margin: "0px 4px", color: "#115e9c", textShadow: "initial"}}>Image 2</Button>
                            <Button variant="outlined" className="image-select-6" id="img-18" onClick={() => setSelectedImage("image-select-6", "img-18", prosper3)} style={{margin: "0px 4px", color: "#115e9c", textShadow: "initial"}}>Image 3</Button>
                        </div>
                    </div>
                    <div className="Project-info-container flex-col">
                        <div className="Project-info flex-col">
                            <h2 className="Project-name">PROSPER</h2>
                            <h4 className="Project-header technologies">
                                Technologies Used: <span>NextJS, TypeScript, SCSS/SASS, Firebase, Redux, MUI, Figma</span>
                            </h4>
                            <h4 className="Project-header">Brief Description</h4>
                            <p className="Project-description">A website application that promotes mental health and positivity through daily diary entries.</p>
                            <h4 className="Project-header">Key Features</h4>
                            <ul className="Project-points">
                                <li>Create functional React components which were used across the application for multiple purposes, greatly reducing the size of the codebase and time spent developing.</li>
                                <li>Implemented complex features such as website hosting, user authentication, and a real-time database using Google Firebase.</li>
                                <li>Used Next.js to optimize images, improve search engine optimization, and reduce page loading times for a better user experience.</li>
                            </ul>
                        </div>
                        <div className="Links flex">
                            <Button variant="contained" href="https://prosperal.web.app/" target="_blank" rel="noreferrer" style={{margin: "0px 4px", backgroundColor: "#115e9c"}}>Demo</Button>
                            <Button variant="contained" href="https://www.figma.com/proto/FIIN3V2XnwzVwYgpQldf1K/PROSPER?node-id=57%3A197&scaling=scale-down&page-id=0%3A1&starting-point-node-id=57%3A197" target="_blank" rel="noreferrer" style={{margin: "0px 4px", backgroundColor: "#115e9c"}}>Prototype</Button>
                        </div>
                    </div>
                </Card>
                <Card className="Project-card flex" variant="outlined">
                    <div className="Project-image-container flex-col">
                        <img src={image2} alt="SpotifyXHC" className="Project-image" style={{objectPosition: "top"}}></img>
                        <div className="Project-image-buttons flex">
                            <Button variant="outlined" className="image-select-2" id="img-4" onClick={() => setSelectedImage("image-select-2", "img-4", spotify1)} style={{margin: "0px 4px", color: "#1a98ca", textShadow: "initial"}}>Image 1</Button>
                            <Button variant="outlined" className="image-select-2" id="img-5" onClick={() => setSelectedImage("image-select-2", "img-5", spotify2)} style={{margin: "0px 4px", color: "#115e9c", textShadow: "initial"}}>Image 2</Button>
                            <Button variant="outlined" className="image-select-2" id="img-6" onClick={() => setSelectedImage("image-select-2", "img-6", spotify3)} style={{margin: "0px 4px", color: "#115e9c", textShadow: "initial"}}>Image 3</Button>
                        </div>
                    </div>
                    <div className="Project-info-container flex-col">
                        <div className="Project-info flex-col">
                            <h2 className="Project-name">SpotifyXHC</h2>
                            <h4 className="Project-header technologies">
                                Technologies Used: <span>MongoDB, Express, React, NodeJS</span>
                            </h4>
                            <h4 className="Project-header">Brief Description</h4>
                            <p className="Project-description">A Spotify web player that displays a user's top tracks and albums. Will include the ability to generate playlists based off of user's top tracks and artists.</p>
                            <h4 className="Project-header">Key Features</h4>
                            <ul className="Project-points">
                                <li>Website is hosted using Heroku and Netlify.</li>
                                <li>Search bar and song cards created using MaterialUI.</li>
                                <li>State management will be implemented using react query.</li>
                            </ul>
                        </div>
                        <div className="Links flex">
                            <Button variant="contained" href="https://spotifyxhc.netlify.app/" target="_blank" rel="noreferrer" style={{margin: "0px 4px", backgroundColor: "#115e9c"}}>Demo</Button>
                            <Button variant="contained" href="https://github.com/rJefferyXie/spotifyX" target="_blank" rel="noreferrer" style={{margin: "0px 4px", backgroundColor: "#115e9c"}}>Code</Button>
                        </div>
                    </div>
                </Card>
                {/* <Card className="Project-card flex" variant="outlined">
                    <div className="Project-image-container flex-col">
                        <img src={image2} alt="Unite The World" className="Project-image"></img>
                        <div className="Project-image-buttons flex">
                            <Button variant="outlined" className="image-select-2" id="img-4" onClick={() => setSelectedImage("image-select-2", "img-4", unite1)} style={{margin: "0px 4px", color: "#1a98ca", textShadow: "initial"}}>Image 1</Button>
                            <Button variant="outlined" className="image-select-2" id="img-5" onClick={() => setSelectedImage("image-select-2", "img-5", unite2)} style={{margin: "0px 4px", color: "#115e9c", textShadow: "initial"}}>Image 2</Button>
                            <Button variant="outlined" className="image-select-2" id="img-6" onClick={() => setSelectedImage("image-select-2", "img-6", unite3)} style={{margin: "0px 4px", color: "#115e9c", textShadow: "initial"}}>Image 3</Button>
                        </div>
                    </div>
                    <div className="Project-info-container flex-col">
                        <div className="Project-info flex-col">
                            <h2 className="Project-name">UniteTheWorld</h2>
                            <h4 className="Project-header technologies">
                                Technologies Used: <span>MongoDB, Express, React, NodeJS</span>
                            </h4>
                            <h4 className="Project-header">Brief Description</h4>
                            <p className="Project-description">A community-based organization that focuses on giving food to those who need it. Includes user authentication and verification.</p>
                            <h4 className="Project-header">Key Features</h4>
                            <ul className="Project-points">
                                <li>Website is hosted using Heroku and Netlify.</li>
                                <li>Includes user authentication and verification.</li>
                                <li>Encrypts user information such as passwords using bcrypt and jwt.</li>
                            </ul>
                        </div>
                        <div className="Links flex">
                            <Button variant="contained" href="https://unitetheworld.netlify.app/" target="_blank" rel="noreferrer" style={{margin: "0px 4px", backgroundColor: "#115e9c"}}>Demo</Button>
                            <Button variant="contained" href="https://github.com/rJefferyXie/unitetheworld" target="_blank" rel="noreferrer" style={{margin: "0px 4px", backgroundColor: "#115e9c"}}>Code</Button>
                        </div>
                    </div>
                </Card> */}
                <Card className="Project-card flex" variant="outlined">
                    <div className="Project-image-container flex-col">
                        <img src={image3} alt="Pathfinding Visualizer" className="Project-image"></img>
                        <div className="Project-image-buttons flex">
                            <Button variant="outlined" className="image-select-3" id="img-7" onClick={() => setSelectedImage("image-select-3", "img-7", pathfinder1)} style={{margin: "0px 4px", color: "#1a98ca", textShadow: "initial"}}>Image 1</Button>
                            <Button variant="outlined" className="image-select-3" id="img-8" onClick={() => setSelectedImage("image-select-3", "img-8", pathfinder2)} style={{margin: "0px 4px", color: "#115e9c", textShadow: "initial"}}>Image 2</Button>
                            <Button variant="outlined" className="image-select-3" id="img-9" onClick={() => setSelectedImage("image-select-3", "img-9", pathfinder3)} style={{margin: "0px 4px", color: "#115e9c", textShadow: "initial"}}>Image 3</Button>
                        </div>
                    </div>
                    <div className="Project-info-container flex-col">
                        <div className="Project-info flex-col">
                            <h2 className="Project-name">Pathfinding Visualizer</h2>
                            <h4 className="Project-header technologies">
                                Technologies Used: <span>Python</span>
                            </h4>
                            <h4 className="Project-header">Brief Description</h4>
                            <p className="Project-description">A visual pathfinding program that allows the user to create their own obstacles or mazes and then run pathfinding algorithms on them.</p>
                            <h4 className="Project-header">Key Features</h4>
                            <ul className="Project-points">
                                <li>Includes the ability to create a maze using Prim's algorithm.</li>
                                <li>Has five algorithms to choose from including A* and Dijkstra's.</li>
                                <li>Allows the user to place weighted path nodes for weighted algorithms.</li>
                            </ul>
                        </div>
                        <div className="Links flex">
                            <Button variant="contained" href="https://rjefferyxie.github.io/Pathfinding-Demo/" target="_blank" rel="noreferrer" style={{margin: "0px 4px", backgroundColor: "#115e9c"}}>Demo</Button>
                            <Button variant="contained" href="https://github.com/rJefferyXie/Pathfinding-Visualizer" target="_blank" rel="noreferrer" style={{margin: "0px 4px", backgroundColor: "#115e9c"}}>Code</Button>
                        </div>
                    </div>
                </Card>
                <Card className="Project-card flex" variant="outlined">
                    <div className="Project-image-container flex-col">
                        <img src={image4} alt="Catstronauts" className="Project-image"></img>
                        <div className="Project-image-buttons flex">
                            <Button variant="outlined" className="image-select-4" id="img-10" onClick={() => setSelectedImage("image-select-4", "img-10", catstronauts1)} style={{margin: "0px 4px", color: "#1a98ca", textShadow: "initial"}}>Image 1</Button>
                            <Button variant="outlined" className="image-select-4" id="img-11" onClick={() => setSelectedImage("image-select-4", "img-11", catstronauts2)} style={{margin: "0px 4px", color: "#115e9c", textShadow: "initial"}}>Image 2</Button>
                            <Button variant="outlined" className="image-select-4" id="img-12" onClick={() => setSelectedImage("image-select-4", "img-12", catstronauts3)} style={{margin: "0px 4px", color: "#115e9c", textShadow: "initial"}}>Image 3</Button>
                        </div>
                    </div>
                    <div className="Project-info-container flex-col">
                        <div className="Project-info flex-col">
                            <h2 className="Project-name">Catstronauts</h2>
                            <h4 className="Project-header technologies">
                                Technologies Used: <span>Unity, GitLab, C#</span>
                            </h4>
                            <h4 className="Project-header">Brief Description</h4>
                            <p className="Project-description">A cat-themed shooter game built with Unity. Travel to other planets in space to rescue your animal friends from the evil aliens!</p>
                            <h4 className="Project-header">Key Features</h4>
                            <ul className="Project-points">
                                <li>Includes procedurally generated rooms and levels.</li>
                                <li>Enemies use the A* pathfinding algorithm to track the player.</li>
                                <li>Enemies use a state-machine model for their different actions.</li>
                            </ul>
                        </div>
                        <div className="Links flex">
                            <Button variant="contained" href="https://drive.google.com/file/d/1rnp4R0C5zJJRnaV1ghvS4k04SSIli_YM/view?usp=sharing" target="_blank" rel="noreferrer" style={{margin: "0px 4px", backgroundColor: "#115e9c"}}>Demo</Button>
                        </div>
                    </div>
                </Card>
                {/* <Card className="Project-card flex" variant="outlined">
                    <div className="Project-image-container flex-col">
                        <img src={image5} alt="Clothing Web Scraper" className="Project-image"></img>
                        <div className="Project-image-buttons flex">
                            <Button variant="outlined" className="image-select-5" id="img-13" onClick={() => setSelectedImage("image-select-5", "img-13", webscraper1)} style={{margin: "0px 4px", color: "#1a98ca", textShadow: "initial"}}>Image 1</Button>
                            <Button variant="outlined" className="image-select-5" id="img-14" onClick={() => setSelectedImage("image-select-5", "img-14", webscraper2)} style={{margin: "0px 4px", color: "#115e9c", textShadow: "initial"}}>Image 2</Button>
                            <Button variant="outlined" className="image-select-5" id="img-15" onClick={() => setSelectedImage("image-select-5", "img-15", webscraper3)} style={{margin: "0px 4px", color: "#115e9c", textShadow: "initial"}}>Image 3</Button>
                        </div>
                    </div>
                    <div className="Project-info-container flex-col">
                        <div className="Project-info flex-col">
                            <h2 className="Project-name">Clothing Web Scraper</h2>
                            <h4 className="Project-header technologies">
                                Technologies Used: <span>Python, pytest, GitLab</span>
                            </h4>
                            <h4 className="Project-header">Brief Description</h4>
                            <p className="Project-description">A webscraping application that gathers clothing information from popular clothing sites and presents the data all in one place.</p>
                            <h4 className="Project-header">Key Features</h4>
                            <ul className="Project-points">
                                <li>Application was built with test driven development in mind.</li>
                                <li>Interface is implemented with the model-view-controller pattern.</li>
                                <li>Utilizes Google Drive's cloud storage to store the clothing information.</li>
                            </ul>
                        </div>
                        <div className="Links flex">
                            <Button variant="contained" href="https://github.com/rJefferyXie/Pathfinding-Visualizer" target="_blank" rel="noreferrer" style={{margin: "0px 4px", backgroundColor: "#115e9c"}}>Code</Button>
                        </div>
                    </div>
                </Card> */}
                {/* <Card className="Project-card flex" variant="outlined">
                    <div className="Project-image-container flex-col">
                        <img src={image6} alt="Chess Engine Visualizer" className="Project-image"></img>
                        <div className="Project-image-buttons flex">
                            <Button variant="outlined" className="image-select-6" id="img-16" onClick={() => setSelectedImage("image-select-6", "img-16", chess1)} style={{margin: "0px 4px", color: "#1a98ca", textShadow: "initial"}}>Image 1</Button>
                            <Button variant="outlined" className="image-select-6" id="img-17" onClick={() => setSelectedImage("image-select-6", "img-17", chess2)} style={{margin: "0px 4px", color: "#115e9c", textShadow: "initial"}}>Image 2</Button>
                            <Button variant="outlined" className="image-select-6" id="img-18" onClick={() => setSelectedImage("image-select-6", "img-18", chess3)} style={{margin: "0px 4px", color: "#115e9c", textShadow: "initial"}}>Image 3</Button>
                        </div>
                    </div>
                    <div className="Project-info-container flex-col">
                        <div className="Project-info flex-col">
                            <h2 className="Project-name">Chess Engine Visualizer</h2>
                            <h4 className="Project-header technologies">
                                Technologies Used: <span>Python</span>
                            </h4>
                            <h4 className="Project-header">Brief Description</h4>
                            <p className="Project-description">A chess program that includes local multiplayer and single player vs an AI, which makes its moves using the minimax algorithm.</p>
                            <h4 className="Project-header">Key Features</h4>
                            <ul className="Project-points">
                                <li>Uses python modules pygame and tkinter to create the user interface.</li>
                                <li>Chess AI uses the minimax algorithm, optimized by alpha-beta pruning.</li>
                                <li>Highlights valid moves for the selected piece, along with a move history.</li>
                            </ul>
                        </div>
                        <div className="Links flex">
                            <Button variant="contained" href="https://github.com/rJefferyXie/Chess-Program-with-Minimax-Visualizer" target="_blank" rel="noreferrer" style={{margin: "0px 4px", backgroundColor: "#115e9c"}}>Code</Button>
                        </div>
                    </div>
                </Card> */}
            </div>
        </section>
    )
}

export default Projects;