import './Hero.css';

import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = () => {
    const ScrollTo = (id) => {
        let section = document.querySelector(id).offsetTop - 80;
        window.scroll({
            top: section,
            behavior: "smooth"
        });
    }

    return (
        <section id="Hero">
            <div className="Intro-container flex-col">
                <div className="Text-line flex">
                    <p className="Shadow-p Hero-text">Hello! My name is 
                        <span className="Shadow-span Hero-text"> Jeffery Xie </span> 
                        and I am a 
                        <span className="Shadow-span Hero-text"> Front-End Developer.</span>
                    </p>
                </div>
                <div className="Arrow-circle flex">
                    <FontAwesomeIcon icon={faArrowDown} className="Down-arrow" onClick={() => ScrollTo("#Projects")}></FontAwesomeIcon>
                </div>
            </div>
        </section>
    )
}

export default Hero;