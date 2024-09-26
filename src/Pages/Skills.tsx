import React from 'react';
import SkillsList from '../sections/SkillsList';
import Preloader from '../components/Preloader';

const Skills = () => {
    return(
        <main className="main">
            <Preloader></Preloader>
            <SkillsList></SkillsList>
        </main>    
    );
}

export default Skills;