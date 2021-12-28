import './Hero.css';

import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = () => {
    const ScrollTo = (id) => {
        let section = document.querySelector(id).offsetTop;
        window.scroll({
            top: section,
            behavior: "smooth"
        });
    }

    return (
        <div id="Hero">
            <div className="Intro-container flex-col">
                <div className="Text-line flex">
                    <p className="Shadow-p">Hello! My name is 
                        <span className="Shadow-span"> Jeffery Xie </span> 
                        and I am a 
                        <span className="Shadow-span"> Front-End Developer.</span>
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