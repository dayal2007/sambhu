import React,{useEffect} from 'react';
import { NavLink } from 'react-router-dom';
//import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useState, useRef } from 'react';

const Header = () => {

  const [isActive, setIsActive] = useState(false);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const toggleClass = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    button.classList.toggle('bi-x');
    if (boxRef.current) {
      boxRef.current.classList.toggle('header-show');
      setIsActive(prev => !prev);
    }
  };

  return (
    <>
    <header id="header" className="header d-flex flex-column" ref={boxRef}>
    <i id='header-toggle' className="header-toggle d-xl-none bi bi-list" onClick={toggleClass} ref={buttonRef}></i>

    <div className="profile-img">
      <img src="assets/img/my-profile-img.jpg" alt="" className="img-fluid rounded-circle" />
    </div>

    <a href="index.php" className="logo d-flex align-items-center justify-content-center">
      <h1 className="sitename text-center">Sambhu Dayal Bahuleyan</h1>
    </a>
    <p className="text-center">Web developer, Artist<br /><small>Limerick, Ireland</small></p>
    <div className="social-links text-center">
      <a href="https://www.facebook.com/sambhu.dayal" target="_blank" className="facebook" title="Facebook"><i className="bi bi-facebook"></i></a>
      <a href="https://github.com/dayal2007" target="_blank" className="instagram" title="GitHub"><i className="bi bi-git"></i></a>
      <a href="https://www.google.ie/maps/place/Mountkennet,+Limerick,+V94+A580/@52.6599689,-8.6347107" className="google-plus"  title="Location" target="_blank"><i className="bi bi-map"></i></a>
      <a href="https://www.linkedin.com/in/sambhudayalb/" target="_blank" className="linkedin"><i className="bi bi-linkedin"  title="Linkedin"></i></a>
    </div>
    <nav id="navmenu" className="navmenu">
      <ul>
        <li><NavLink to="/"><i className="bi bi-house navicon"></i> Home</NavLink></li>
        <li><NavLink to="/about"><i className="bi bi-person navicon"></i> About me</NavLink></li>
        <li><NavLink to="/skills"><i className="bi bi-brightness-alt-high navicon"></i> Skills</NavLink></li>
        <li><NavLink to="/contact"><i className="bi bi-envelope navicon"></i> Contact</NavLink></li>
      </ul>
    </nav>
  </header>
  </>
  );
}

export default Header;