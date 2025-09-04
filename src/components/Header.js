// src/components/Header.js
import React from 'react';
import portfolioData from '../data/portfolioData';

const Header = () => {
  const { personal, theme } = portfolioData;

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      padding: '1rem 2rem',
      zIndex: 1000,
      borderBottom: '1px solid #e5e5e5'
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Logo */}
        <div style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          color: theme.primary,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: theme.primary,
            color: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold'
          }}>
            {personal.logo}
          </div>
          {personal.name.split(' ')[0]}
        </div>
        
        {/* Navigation */}
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['About', 'Projects', 'Skills', 'Contact'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                textDecoration: 'none',
                color: '#333',
                fontWeight: '500',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.color = theme.primary}
              onMouseOut={(e) => e.target.style.color = '#333'}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;