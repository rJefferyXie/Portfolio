import "./ContactForm.css";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mnqwnkpa");
    
    if (state.succeeded) { return <p id="Form-success">Thank you, your message has been sent to jeffxie27@outlook.com.</p>; }
    
    return (
        <div id="Contact-form" className="flex-col">
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit} className="flex-col">
                <label htmlFor="name"></label>
                <input type="text" name="name" required placeholder="Your Name*"/>
                <ValidationError prefix="Name" field="name" errors={state.errors}/>
                <label htmlFor="email"></label>
                <input type="email" name="email" required placeholder="Your Email*"/>
                <ValidationError prefix="Email" field="email" errors={state.errors}/>
                <label htmlFor="subject"></label>
                <input type="text" name="subject" required placeholder="Subject*"/>
                <ValidationError prefix="Subject" field="subject" errors={state.errors}/>
                <label htmlFor="message"></label>
                <textarea name="message" required placeholder="Your Message*"></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors}/>
                <button id="Form-submit" type="submit" className="flex" disabled={state.submitting}>SUBMIT</button>
            </form>
        </div>
    );
}

export default ContactForm;