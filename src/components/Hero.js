// src/components/Hero.js
import React, { useState, useEffect } from 'react';
import portfolioData from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  const { personal, theme, settings } = portfolioData;
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Words to rotate through in the typing animation (static)
  const rotatingWords = [
    "Full Stack Developer",
    "Software Engineer",
    "Problem Solver",
    "Tech Enthusiast"
  ];

  // ✅ Typing animation effect (fixed dependencies)
  useEffect(() => {
    if (!settings.enableTypingAnimation) return;

    const interval = setInterval(() => {
      setCurrentWordIndex(prev => (prev + 1) % rotatingWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [settings.enableTypingAnimation, rotatingWords.length]);

  // Fade in animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const smoothScrollTo = (elementId) => {
    const el = document.getElementById(elementId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(135deg, ${theme.primary} 0%, #7c3aed 100%)`,
        color: 'white',
        padding: '0 2rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          zIndex: 1
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
          transition: 'all 1s ease-out'
        }}
      >
        {/* Left Content */}
        <div>
          {/* Greeting */}
          <div
            style={{
              fontSize: '1.2rem',
              fontWeight: 500,
              marginBottom: '1rem',
              opacity: 0.9,
              animation: settings.enableAnimations ? 'fadeInUp 1s ease-out 0.2s both' : 'none'
            }}
          >
            👋 Hello, I'm
          </div>

          {/* Name */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              lineHeight: 1.1,
              background: 'linear-gradient(45deg, #ffffff, #f0f9ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: settings.enableAnimations ? 'fadeInUp 1s ease-out 0.4s both' : 'none'
            }}
          >
            {personal.name}
          </h1>

          {/* Rotating Title */}
          <h2
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 2rem)',
              fontWeight: 300,
              marginBottom: '2rem',
              opacity: 0.9,
              height: '3rem',
              display: 'flex',
              alignItems: 'center',
              animation: settings.enableAnimations ? 'fadeInUp 1s ease-out 0.6s both' : 'none'
            }}
          >
            <span style={{ marginRight: '0.5rem' }}>I'm a</span>
            <span
              style={{
                background: `linear-gradient(45deg, ${theme.secondary}, ${theme.accent})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
                transition: 'all 0.5s ease'
              }}
            >
              {settings.enableTypingAnimation ? rotatingWords[currentWordIndex] : personal.title}
            </span>
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              marginBottom: '3rem',
              opacity: 0.8,
              lineHeight: 1.6,
              maxWidth: '500px',
              animation: settings.enableAnimations ? 'fadeInUp 1s ease-out 0.8s both' : 'none'
            }}
          >
            {personal.tagline}
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              flexWrap: 'wrap',
              animation: settings.enableAnimations ? 'fadeInUp 1s ease-out 1s both' : 'none'
            }}
          >
            <button
              onClick={() => smoothScrollTo('projects')}
              style={{
                background: theme.secondary,
                color: 'white',
                border: 'none',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(239, 68, 68, 0.3)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(239, 68, 68, 0.4)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(239, 68, 68, 0.3)';
              }}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>🚀 View My Work</span>
            </button>

            <button
              onClick={() => smoothScrollTo('contact')}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              💬 Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '3rem',
              animation: settings.enableAnimations ? 'fadeInUp 1s ease-out 1.2s both' : 'none'
            }}
          >
            {Object.entries(portfolioData.social).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '50px',
                  height: '50px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {platform === 'github' && (
                  <img src="/images/github.png" alt="GitHub" style={{ width: 32, height: 32 }} />
                )}
                {platform === 'linkedin' && (
                  <img src="/images/linkedin.png" alt="LinkedIn" style={{ width: 32, height: 32 }} />
                )}
                {platform === 'twitter' && (
                  <img src="/images/twitter.png" alt="Twitter" style={{ width: 32, height: 32 }} />
                )}
                {platform === 'portfolio' && (
                  <img src="/images/facebook.png" alt="Facebook" style={{ width: 32, height: 32 }} />
                )}
                {platform === 'instagram' && (
                  <img src="/images/instagram.png" alt="Instagram" style={{ width: 32, height: 32 }} />
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            animation: settings.enableAnimations ? 'fadeInRight 1s ease-out 0.5s both' : 'none'
          }}
        >
          <div style={{ position: 'relative', width: 400, height: 400 }}>
            {/* Floating Animation Rings */}
            <div
              style={{
                position: 'absolute',
                top: -20, left: -20, right: -20, bottom: -20,
                border: '2px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                animation: settings.enableAnimations ? 'rotate 20s linear infinite' : 'none'
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: -40, left: -40, right: -40, bottom: -40,
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '50%',
                animation: settings.enableAnimations ? 'rotate 25s linear infinite reverse' : 'none'
              }}
            />

            {/* Main Image Container */}
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                overflow: 'hidden',
                position: 'relative',
                animation: settings.enableAnimations ? 'float 6s ease-in-out infinite' : 'none'
              }}
            >
              <img
                src={personal.profileImage}
                alt={personal.name}
                style={{
                  width: 320,
                  height: 320,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid rgba(255, 255, 255, 0.1)'
                }}
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    personal.name
                  )}&size=320&background=${theme.primary.slice(1)}&color=ffffff&bold=true`;
                }}
              />
            </div>

            {/* Floating Icons */}
            <div
              style={{
                position: 'absolute',
                top: '10%',
                right: '10%',
                fontSize: '2rem',
                animation: settings.enableAnimations ? 'float 4s ease-in-out infinite' : 'none',
                animationDelay: '1s'
              }}
            >
              ⚛️
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '15%',
                left: '5%',
                fontSize: '1.5rem',
                animation: settings.enableAnimations ? 'float 5s ease-in-out infinite' : 'none',
                animationDelay: '2s'
              }}
            >
              💻
            </div>
            <div
              style={{
                position: 'absolute',
                top: '20%',
                left: '15%',
                fontSize: '1.2rem',
                animation: settings.enableAnimations ? 'float 3s ease-in-out infinite' : 'none',
                animationDelay: '0.5s'
              }}
            >
              🎨
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: settings.enableAnimations ? 'bounce 2s infinite' : 'none',
          cursor: 'pointer'
        }}
        onClick={() => smoothScrollTo('about')}
      >
        <div
          style={{
            width: 30,
            height: 50,
            border: '2px solid rgba(255, 255, 255, 0.5)',
            borderRadius: 25,
            position: 'relative'
          }}
        >
          <div
            style={{
              width: 4,
              height: 8,
              background: 'rgba(255, 255, 255, 0.8)',
              borderRadius: 2,
              position: 'absolute',
              top: 8,
              left: '50%',
              transform: 'translateX(-50%)',
              animation: settings.enableAnimations ? 'scroll 2s infinite' : 'none'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;