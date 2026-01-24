// src/App.js
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components - KIỂM TRA CÁCH IMPORT NÀY
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import PizzaList from './components/PizzaList';
import About from './components/About';
import Contact from './components/Contact';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <Header />
        
        {/* Routes */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <>
              <HeroCarousel />
              <PizzaList />
              <Specials />
              <Testimonials />
            </>
          } />
          
          {/* Menu Page */}
          <Route path="/menu" element={<PizzaList />} />
          
          {/* Specials Page */}
          <Route path="/specials" element={<Specials />} />
          
          {/* About Page */}
          <Route path="/about" element={<About />} />
          
          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        {/* Footer */}
        <Footer />
        
        {/* Floating Action Buttons */}
        <div className="floating-buttons">
          <button 
            className="btn btn-danger btn-floating"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            title="Back to Top"
          >
            ↑
          </button>
          <button 
            className="btn btn-success btn-floating"
            onClick={() => alert('📞 Call us: 1900-1234')}
            title="Call Now"
          >
            📞
          </button>
        </div>
      </div>
    </Router>
  );
}

export default App;