import './Navbar.css';

const Navbar = () => {
    const menu = document.querySelector(".Mobile-menu");
    const menuLinks = document.querySelector('.Navbar-container');

    // Display Mobile Menu
    const mobileMenu = () => {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    };

    return (
        <nav className="Navbar flex">
            <button className="Navbar-logo">Jeffery Xie</button>
            <div className="Mobile-menu" onClick={mobileMenu}>
                <span className="bar"></span> 
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <div className="Navbar-container flex" onClick={mobileMenu}>
                <button className="Navbar-button">About</button>
                <button className="Navbar-button">Projects</button>
                <button className="Navbar-button">Skills</button>
                <button className="Navbar-button">Contact</button>
                <button className="Navbar-button Resume">Resume</button>
            </div>
        </nav>
    );
}

export default Navbar;
