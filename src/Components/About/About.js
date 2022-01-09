import './About.css';

const About = () => {
    return (
        <section id="About" className="flex-col">
            <h1 className="Page-title">About Me</h1>
            <div id="About-container" className="Page-container flex-col">
                <p className="about-text">I am a front-end web developer with a focus on the MERN stack, but I am always willing to explore and learn other technologies and frameworks as needed. If you're looking for a developer to add to your team, I'd love to hear from you!</p>
            </div>
        </section>
    )
}

export default About;