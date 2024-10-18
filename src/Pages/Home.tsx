import React,{useEffect} from 'react';
import Hero from '../sections/Hero';
import TechIcons from '../sections/TechIcons';
import HomeIntro from '../sections/HomeIntro';
import Preloader from '../components/Preloader';
import Colab from '../sections/Colab';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top
      }, []);
       
    return (
        <main className="main">
            <Preloader></Preloader>
            <Colab></Colab>
            <Hero></Hero>
            <TechIcons></TechIcons>
            <HomeIntro></HomeIntro>
        </main>
    );
}

export default Home;