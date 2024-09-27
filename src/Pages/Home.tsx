import React from 'react';
import Hero from '../sections/Hero';
import TechIcons from '../sections/TechIcons';
import HomeIntro from '../sections/HomeIntro';
import Preloader from '../components/Preloader';

const Home = () => {
    
    return (
        <main className="main">
            <Preloader></Preloader>
            <Hero></Hero>
            <TechIcons></TechIcons>
            <HomeIntro></HomeIntro>
        </main>
    );
}

export default Home;