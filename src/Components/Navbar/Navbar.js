import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="Navbar flex">
            <button className="Navbar-logo">Jeffery Xie</button>
            <div className="Navbar-container flex">
                <button className="Navbar-button">About</button>
                <button className="Navbar-button">Projects</button>
                <button className="Navbar-button">Skills</button>
                <button className="Navbar-button">Contact</button>
            </div>
        </nav>
    );
}

export default Navbar;
