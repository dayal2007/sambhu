import React from 'react';
import Hero from '../sections/Hero';
import TechIcons from '../sections/TechIcons';
import Preloader from '../components/Preloader';

const Home = () => {
    
    return (
        <main className="main">
            <Preloader></Preloader>
            <Hero></Hero>
            <TechIcons></TechIcons>
        </main>
    );
}

export default Home;