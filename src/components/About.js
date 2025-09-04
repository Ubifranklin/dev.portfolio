// src/components/About.js
import React from 'react';
import portfolioData from '../data/portfolioData';

const About = () => {
  const { personal, social, theme } = portfolioData;

  return (
    <section id="about" style={{ padding: '100px 2rem', background: theme.light }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '2.5rem',
          textAlign: 'center',
          marginBottom: '3rem',
          color: theme.dark
        }}>
          About Me
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <img
              src={personal.profileImage}
              alt={personal.name}
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '1rem'
              }}
              onError={(e) => {
                // Fallback to placeholder if image doesn't load
                e.target.src = `https://via.placeholder.com/200x200/${theme.primary.slice(1)}/white?text=${personal.name.split(' ').map(n => n[0]).join('')}`;
              }}
            />
            <h3 style={{ marginBottom: '0.5rem', color: theme.dark }}>
              {personal.name}
            </h3>
            <p style={{ color: '#7f8c8d', marginBottom: '1rem' }}>
              {personal.title}
            </p>
            
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
              <a href={social.github} target="_blank" rel="noopener noreferrer" style={{ 
                color: theme.primary, 
                fontSize: '1.5rem',
                textDecoration: 'none'
              }}><img src="/images/github.png" alt="GitHub" style={{ width: "32px", height: "32px", margin: "0 10px", cursor: "pointer" }}/></a>
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" style={{ 
                color: theme.primary, 
                fontSize: '1.5rem',
                textDecoration: 'none'
              }}><img src="/images/linkedin.png" alt="LinkedIn" style={{ width: "32px", height: "32px", margin: "0 10px", cursor: "pointer" }} /></a>
              <a href={social.twitter} target="_blank" rel="noopener noreferrer" style={{ 
                color: theme.primary, 
                fontSize: '1.5rem',
                textDecoration: 'none'
              }}><img src="/images/twitter.png" alt="Twitter" style={{ width: "32px", height: "32px", margin: "0 10px", cursor: "pointer" }}/></a>
            </div>
          </div>
          
          <div>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '2rem',
              color: '#555',
              lineHeight: '1.8'
            }}>
              {personal.bio}
            </p>
            
            {/* Contact Info */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <div style={{
                background: '#e3f2fd',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
                color: '#1976d2'
              }}>
                📧 {personal.email}
              </div>
              <div style={{
                background: '#e8f5e8',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
                color: '#2e7d32'
              }}>
                📱 {personal.phone}
              </div>
              <div style={{
                background: '#fff3e0',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
                color: '#f57c00'
              }}>
                📍 {personal.location}
              </div>
            </div>
            
            <a 
              href={personal.resumeUrl}
              download
              style={{
                background: theme.primary,
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                textDecoration: 'none',
                display: 'inline-block'
              }}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;           