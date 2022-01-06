import './Contact.css';

const Contact = () => {
    const sendEmail = () => {
        window.open('mailto:jeffxie27@outlook.com');
    }

    return (
        <section id="Contact" className="flex-col">
            <h1 className="Page-title">Get In Touch</h1>
            <div id="Contact-container" className="Page-container flex-col">
                <button onClick={sendEmail}>Send Email</button>
            </div>
        </section>
    )
}

export default Contact;