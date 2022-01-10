import "./Hero.css";

import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import hero from "../../images/undraw/hero.svg";
import Resume from "../../images/Resume.pdf";

const Hero = () => {
    const ScrollTo = (id) => {
        let section = document.querySelector(id).offsetTop - 80;
        window.scroll({
            top: section,
            behavior: "smooth"
        });
    }

    return (
        <section id="Hero" className="flex">
            <div className="Intro-container flex">
                <div className="Intro-left flex-col">
                    <p id="Hero-header" className="hero-p">Hello there! My name is 
                        <span className="Shadow-span Hero-text"> Jeffery Xie. </span>
                    </p>
                    <p className="hero-p">I am a 
                        <span className="Shadow-span Hero-text"> Front-End Web Developer </span>
                        who is passionate about creating interactive web applications and positive user experiences.
                    </p>
                    <a href={Resume} target="_blank" rel="noreferrer" id="Resume" className="nav-button flex">Resume</a>
                </div>
                <img id="Hero-image" alt="" src={hero}></img>
                <div className="Arrow-container flex">
                    <FontAwesomeIcon icon={faArrowDown} className="Down-arrow" onClick={() => ScrollTo("#Projects")}></FontAwesomeIcon>
                </div>
            </div>
        </section>
    )
}

export default Hero;