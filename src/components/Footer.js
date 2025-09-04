// src/components/Footer.js
import React from 'react';
import portfolioData from '../data/portfolioData';

const Footer = () => {
  const { personal } = portfolioData;

  return (
    <footer style={{
      background: '#1a1a1a',
      color: 'white',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ margin: 0, opacity: 0.7 }}>
          © 2024 {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;