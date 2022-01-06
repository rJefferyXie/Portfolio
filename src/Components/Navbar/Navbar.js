import './Navbar.css';

import Resume from "../../images/Resume.pdf";

const Navbar = () => {

    // Switch to mobile menu
    const MobileMenu = () => {
        document.querySelector("#Mobile-menu").classList.toggle('is-active');
        document.querySelector('#Navbar-container').classList.toggle('active');
    };

    const ScrollTo = (id) => {
        let section = document.querySelector(id).offsetTop - 80;
        window.scroll({
            top: section,
            behavior: "smooth"
        });
    }

    return (
        <nav id="Navbar" className="flex">
            <button id="Navbar-logo" onClick={() => ScrollTo("#Hero")}>Jeffery Xie</button>
            <div id="Mobile-menu" onClick={MobileMenu}>
                <span className="bar"></span> 
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <div id="Navbar-container" className="flex" onClick={MobileMenu}>
                <button onClick={() => ScrollTo("#Projects")} className="Navbar-button">Projects</button>
                <button onClick={() => ScrollTo("#Skills")} className="Navbar-button">Skills</button>
                <button onClick={() => ScrollTo("#About")} className="Navbar-button">About</button>
                <button onClick={() => ScrollTo("#Contact")} className="Navbar-button">Contact</button>
                <a href={Resume} target="_blank" rel="noreferrer" id="Resume" className="Navbar-button flex">Resume</a>
            </div>
        </nav>
    );
}

export default Navbar;
