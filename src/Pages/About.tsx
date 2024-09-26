import React from 'react';
import AboutMe from '../sections/AboutMe';
import Preloader from '../components/Preloader';

const About = () => {
    return(
        <main className="main">
            <Preloader></Preloader>
            <AboutMe></AboutMe>
        </main>    
    );
}

export default About;