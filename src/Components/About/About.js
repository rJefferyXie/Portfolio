import './About.css';

import open from "../../images/undraw/creative.svg";
import learn from "../../images/undraw/learn.svg";
import creative from "../../images/undraw/team.svg";
import gym from "../../images/undraw/gym.svg";
import cooking from "../../images/undraw/cooking.svg";
import videogames from "../../images/undraw/video-games.svg";

const About = () => {
    return (
        <section id="About" className="flex-col">
            <h1>About Me</h1>
            <div id="About-container" className="page-container flex-col">
                <p className="about-text">I am a web developer who is always looking to explore new technologies and frameworks that interest me. 
                I have experience creating and hosting full stack web applications using the MERN stack and with Google Firebase.
                Being able to utilize my creativity and problem-solving skills is my favourite part about coding, which is why I chose web development. 
                If you're looking for a web developer to add to your team, I'd love to hear from you!</p>
                <div id="About-image-container" className="flex">
                    <div id="Work-container" className="flex-col">
                        <h3 className="about-header">I am...</h3>
                        <div className="wrapper flex">
                            <div className="image-wrapper flex-col">
                                <img className="about-image" src={open} alt=""></img>
                                <p>Creative</p>
                            </div>
                            <div className="image-wrapper flex-col">
                                <img className="about-image" src={creative} alt=""></img>
                                <p>Open-Minded</p>
                            </div>
                            <div className="image-wrapper flex-col">
                                <img className="about-image" src={learn} alt=""></img>
                                <p>Willing to Learn</p>
                            </div>
                        </div>
                    </div>
                    <div id="Hobby-container" className="flex-col">
                        <h3 className="about-header">Some of my hobbies are...</h3>
                        <div className="wrapper flex">
                            <div className="image-wrapper flex-col">
                                <img className="about-image" src={gym} alt=""></img>
                                <p>Going to the gym</p>
                            </div>
                            <div className="image-wrapper flex-col">
                                <img className="about-image" src={cooking} alt=""></img>
                                <p>Cooking</p>
                            </div>
                            <div className="image-wrapper flex-col">
                                <img className="about-image" src={videogames} alt=""></img>
                                <p>Video Games</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;