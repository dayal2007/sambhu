import React, {useEffect} from 'react';
import ContactForm from '../sections/ContactForm';
import Preloader from '../components/Preloader';
import Colab from '../sections/Colab';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top
      }, []);
       

    return (
        <main className="main">
        <Preloader></Preloader>
        <Colab></Colab>
        <ContactForm></ContactForm>
        </main>
    );
}

export default Contact;