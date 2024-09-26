import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/css/main.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ScrollTop from './components/ScrollTop';

import Home from './Pages/Home';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import About from './Pages/About';
import Skills from './Pages/Skills';

const App = () => {
  return (
    <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
        </Routes>
        <Footer></Footer>
        <ScrollTop></ScrollTop>
      </Router>
  );
}

export default App;