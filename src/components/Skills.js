// src/components/Skills.js
import React from 'react';
import portfolioData from '../data/portfolioData';

const Skills = () => {
  const { skills, theme } = portfolioData;

  return (
    <section id="skills" style={{ padding: '100px 2rem', background: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '2.5rem',
          textAlign: 'center',
          marginBottom: '3rem',
          color: theme.dark
        }}>
          Skills & Expertise
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {skills.map(skill => (
            <div key={skill.name} style={{
              background: theme.light,
              padding: '1.5rem',
              borderRadius: '10px',
              border: '1px solid #e9ecef'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <span style={{ fontWeight: 'bold', color: theme.dark }}>
                  {skill.name}
                </span>
                <span style={{ color: '#6c757d' }}>{skill.level}%</span>
              </div>
              <div style={{
                background: '#e9ecef',
                height: '8px',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
                  height: '100%',
                  width: `${skill.level}%`,
                  borderRadius: '4px',
                  transition: 'width 1s ease'
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;