import React from 'react';

const Hero = () =>{
    return(
        <section className="hero section">

        <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" className="" />
  
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div>
              
              <svg height="100.67372944894987" viewBox="0 0 150 52.527927821571915"><defs id="SvgjsDefs2219"></defs><g id="SvgjsG2220" transform="matrix(1.5515101316354643,0,0,1.5515101316354643,-0.8378155043749463,21.311542670987254)" fill="#000000"><path d="M0.54 19.7 l0 -2.82 c0.24 0.06 0.54 0.12 0.88 0.16 c0.34 0.06 0.7 0.1 1.08 0.12 s0.76 0.04 1.16 0.06 s0.78 0.04 1.12 0.04 c0.94 0 1.6 -0.06 2 -0.16 c0.38 -0.1 0.58 -0.28 0.58 -0.56 c0 -0.24 -0.18 -0.42 -0.36 -0.56 c-0.66 -0.44 -1.44 -0.62 -2.22 -0.8 c-2.2 -0.44 -4.22 -1.32 -4.22 -3.84 c0 -2.98 2.82 -3.68 5.24 -3.68 c1.34 0 2.7 0.14 4 0.46 l0 2.82 c-0.2 -0.06 -0.46 -0.1 -0.78 -0.16 c-0.34 -0.04 -0.68 -0.08 -1.06 -0.12 c-0.78 -0.08 -1.52 -0.12 -2.3 -0.12 c-0.44 0 -1.36 0 -1.78 0.16 c-0.28 0.1 -0.46 0.22 -0.46 0.54 c0 0.16 0.04 0.3 0.12 0.42 c0.08 0.14 0.22 0.24 0.4 0.34 c0.54 0.3 1.24 0.48 1.84 0.62 c0.5 0.12 1 0.26 1.52 0.4 c1.76 0.48 2.92 1.46 2.92 3.34 c0 3.1 -3.08 3.76 -5.56 3.76 c-1.36 0 -2.78 -0.1 -4.12 -0.42 z M18.759999999999998 15 c-0.08 -1.46 -0.74 -2.32 -2.26 -2.32 c-0.42 0 -0.78 0.06 -1.08 0.18 c-0.92 0.42 -1.26 1.2 -1.26 2.16 c0 0.32 0.04 0.62 0.14 0.88 c0.3 1.04 1.2 1.42 2.2 1.42 c1.52 0 2.26 -0.82 2.26 -2.32 z M22.560000000000002 20 l-3 0 c-0.2 -0.5 -0.38 -1 -0.5 -1.52 c-0.68 1.12 -1.72 1.62 -3 1.62 c-2.86 0 -4.9 -2.4 -4.9 -5.14 c0 -3.16 2.36 -5.06 5.34 -5.06 c3.18 0 5.18 2.04 5.26 5.1 c0.02 0.26 0.02 0.56 0.02 0.92 c0 1.4 0.22 2.8 0.78 4.08 z M39.76 14.6 l0 5.4 l-3 0 l0 -5.4 c0 -1.14 -0.54 -1.92 -1.74 -1.92 c-1.18 0 -1.76 0.8 -1.76 1.92 l0 5.4 l-3 0 l0 -5.4 c0 -1.14 -0.58 -1.92 -1.78 -1.92 c-1.18 0 -1.72 0.8 -1.72 1.92 l0 5.4 l-3 0 l0 -5.4 c0 -2.9 1.98 -4.7 4.76 -4.7 c1.42 0 2.52 0.66 3.24 1.88 c0.72 -1.22 1.82 -1.88 3.24 -1.88 c2.88 0 4.76 1.9 4.76 4.7 z M44.599999999999994 15 c0 1.48 0.74 2.32 2.24 2.32 c0.42 0 0.8 -0.06 1.1 -0.2 c0.56 -0.22 0.94 -0.64 1.14 -1.22 c0.08 -0.28 0.12 -0.58 0.12 -0.9 s-0.04 -0.62 -0.12 -0.9 c-0.22 -0.62 -0.56 -0.96 -1.14 -1.24 c-0.3 -0.12 -0.68 -0.18 -1.1 -0.18 c-1.5 0 -2.24 0.84 -2.24 2.32 z M41.599999999999994 6 l3 0 l0 5 c0.68 -0.78 1.6 -1.1 2.62 -1.1 c2.92 0 4.98 2.34 4.98 5.14 c0 3.16 -2.34 5.06 -5.32 5.06 c-3.1 0 -5.28 -2.04 -5.28 -5.1 l0 -9 z M56.599999999999994 15 l0 5 l-3 0 l0 -14 l3 0 l0 4.92 c0.7 -0.74 1.58 -1.02 2.58 -1.02 c2.84 0 4.62 2.44 4.62 5.1 l0 5 l-3 0 l0 -5 c0 -1.36 -0.54 -2.32 -2 -2.32 c-1.44 0 -2.2 0.92 -2.2 2.32 z M72.68 10 l3 0 l0 5 c0 3.06 -2.12 5.1 -5.1 5.1 c-3.06 0 -5.1 -2.14 -5.1 -5.1 l0 -5 l3 0 l0 5 c0 1.34 0.68 2.32 2.1 2.32 c1.46 0 2.1 -0.96 2.1 -2.32 l0 -5 z M80.86 18.38 c0 1.02 -0.7 1.72 -1.72 1.72 s-1.74 -0.68 -1.74 -1.72 c0 -1.02 0.72 -1.74 1.74 -1.74 c1.06 0 1.72 0.68 1.72 1.74 z M82.96000000000001 10 l3 0 l0 10 l-3 0 l0 -10 z M84.46000000000001 9.06 c-1.02 0 -1.74 -0.72 -1.74 -1.74 c0 -1.04 0.72 -1.72 1.74 -1.72 c1.04 0 1.72 0.68 1.72 1.72 c0 1.06 -0.66 1.74 -1.72 1.74 z M90.76 13.8 c0.3 0.1 0.64 0.18 1 0.22 c0.36 0.06 0.7 0.08 1.02 0.08 c0.4 0 1.42 -0.08 1.42 -0.66 c0 -0.62 -0.88 -0.64 -1.32 -0.64 c-0.88 0 -1.64 0.2 -2.12 1 z M96.42 16.88 l0 2.8 c-1.12 0.26 -2.24 0.44 -3.4 0.44 c-3.18 0 -5.54 -1.86 -5.54 -5.08 c0 -3.18 2.28 -5.14 5.3 -5.14 c2.06 0 4.44 0.98 4.44 3.32 c0 2.32 -2.52 3.18 -4.46 3.18 c-0.74 0 -1.48 -0.2 -2.16 -0.48 c0.4 1.12 1.6 1.3 2.64 1.3 c0.54 0 1.08 -0.02 1.62 -0.1 c0.5 -0.04 1.08 -0.1 1.56 -0.24 z"></path></g></svg>
              
          </div>  
          <h2 className="text-gradient">Sambhu Dayal Bahuleyan</h2>
          <p><span className="typed" data-typed-items="Full-stack web-developer, Front-End Developer, Back-End Developer, Designer, Artist"></span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
        </div>
       </section>
    );
}

export default Hero;