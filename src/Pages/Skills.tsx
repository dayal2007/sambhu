import React, {useEffect} from 'react';
import SkillsList from '../sections/SkillsList';
import Preloader from '../components/Preloader';
import Colab from '../sections/Colab';

const Skills = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top
      }, []); 
    
    return(
        <main className="main">
            <Preloader></Preloader>
            <Colab></Colab>
            <SkillsList></SkillsList>
        </main>    
    );
}

export default Skills;