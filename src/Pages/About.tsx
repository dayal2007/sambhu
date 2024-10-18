import React, {useEffect} from 'react';
import AboutMe from '../sections/AboutMe';
import Preloader from '../components/Preloader';
import Colab from '../sections/Colab';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top
      }, []);
       

    return(
        <main className="main">
            <Preloader></Preloader>
            <Colab></Colab>
            <AboutMe></AboutMe>
        </main>    
    );
}

export default About;