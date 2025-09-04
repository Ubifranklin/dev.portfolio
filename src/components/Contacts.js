// src/components/Contact.js
import React from 'react';
import portfolioData from '../data/portfolioData';

const Contact = () => {
  const { personal, theme } = portfolioData;

  return (
    <section id="contact" style={{
      padding: '100px 2rem',
      background: `linear-gradient(135deg, ${theme.dark} 0%, #34495e 100%)`,
      color: 'white'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Let's Work Together</h2>
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '3rem',
          opacity: 0.9,
          lineHeight: '1.6'
        }}>
          I'm always interested in hearing about new opportunities and exciting projects.
          Let's create something amazing together!
        </p>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={`mailto:${personal.email}`} style={{
            background: theme.secondary,
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'transform 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.transform = 'translateY(-3px)'}
          onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            📧 Send Email
          </a>
          <a href={`tel:${personal.phone}`} style={{
            background: 'transparent',
            color: 'white',
            border: '2px solid white',
            padding: '1rem 2rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.background = 'white';
            e.target.style.color = theme.dark;
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = 'white';
          }}
          >
            📱 Call Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;