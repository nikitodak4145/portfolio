import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

function Projects(){
  const sectionStyle = {
    minHeight: '100vh',
    padding: '4rem 2rem',
    backgroundColor: '#f8fafc'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '3rem',
    color: '#0f172a'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s'
  };

  const techStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    margin: '1rem 0'
  };

  const techTagStyle = {
    padding: '0.25rem 0.75rem',
    backgroundColor: '#e2e8f0',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    color: '#475569'
  };

  const linksStyle = {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem'
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Мои проекты</h2>
        <div style={gridStyle}>
          {projects.map((project, index) => (
            <div 
              style={{ ...cardStyle, animationDelay: `${index * 0.1}s` }}
              key={project.title} 
              style={cardStyle}
              className="fade-in"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div style={techStyle}>
                {project.tech.map(tech => (
                  <span key={tech} style={techTagStyle}>{tech}</span>
                ))}
              </div>
              <div style={linksStyle}>
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;