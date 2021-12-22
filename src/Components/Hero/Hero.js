import './Hero.css';

import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = () => {
    const ScrollTo = (id) => {
        let section = document.querySelector(id);
        section.scrollIntoView({ 
            behavior: "smooth",
            block: "center"
        });
    }

    return (
        <div id="Hero">
            <div className="Intro-container flex-col">
                <div className="Text-line flex">
                    <p>Hello! My name is 
                        <span> Jeffery Xie </span> 
                        and I am a 
                        <span> Front-End Developer.</span>
                    </p>
                </div>
                <div className="Arrow-circle flex">
                    <FontAwesomeIcon icon={faArrowDown} className="Down-arrow" onClick={() => ScrollTo("#Projects")}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    )
}

export default Hero;