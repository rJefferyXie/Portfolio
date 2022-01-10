import './Contact.css';

import ContactForm from './ContactForm/ContactForm';

import email from "../../images/undraw/email.svg";

const Contact = () => {
    const sendEmail = () => {
        window.open('mailto:jeffxie27@outlook.com');
    }

    return (
        <section id="Contact" className="flex-col">
            <h1>Contact</h1>
            <div id="Contact-container" className="page-container flex">
            <h2 id="Contact-header">Get In Touch</h2>
                <div id="Contact-left" className="flex-col">
                    <img id="Email-image" src={email} alt="Click this to send an email." onClick={sendEmail}></img>
                    <button id="Send-email" onClick={sendEmail}>SEND EMAIL</button>
                </div>
                <ContactForm></ContactForm>
            </div>
        </section>
    )
}

export default Contact;