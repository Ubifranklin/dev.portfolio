// src/components/Projects.js
import React from 'react';
import portfolioData from '../data/portfolioData';

const Projects = () => {
  const { projects, theme } = portfolioData;

  return (
    <section id="projects" style={{ 
      padding: '100px 2rem', 
      background: theme.light 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '2.5rem',
          textAlign: 'center',
          marginBottom: '3rem',
          color: theme.dark
        }}>
          Featured Projects
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map(project => (
            <div key={project.id} style={{
              background: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  // Fallback to placeholder if image doesn't load
                  e.target.src = `https://via.placeholder.com/400x250/${theme.primary.slice(1)}/white?text=${project.title.replace(/\s+/g, '+')}`;
                }}
              />
              <div style={{ padding: '2rem' }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  marginBottom: '1rem',
                  color: theme.dark
                }}>
                  {project.title}
                </h3>
                <p style={{
                  color: '#6c757d',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}>
                  {project.description}
                </p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.5rem'
                }}>
                  {project.tech.map(tech => (
                    <span key={tech} style={{
                      background: '#e3f2fd',
                      color: '#1976d2',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '15px',
                      fontSize: '0.85rem',
                      fontWeight: '500'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      color: theme.primary,
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      fontSize: '0.9rem'
                    }}
                  >
                  
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      color: '#333',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      fontSize: '0.9rem'
                    }}
                  >
            
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;