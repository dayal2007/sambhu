import React from 'react';
import ContactForm from '../sections/ContactForm';
import Preloader from '../components/Preloader';

const Contact = () => {
    return (
        <main className="main">
        <Preloader></Preloader>
        <ContactForm></ContactForm>
        </main>
    );
}

export default Contact;