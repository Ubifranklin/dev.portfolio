// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App" style={{ 
      fontFamily: 'Arial, sans-serif', 
      lineHeight: '1.6', 
      color: '#333',
      margin: 0,
      padding: 0
    }}>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App