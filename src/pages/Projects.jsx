import React from 'react';
import projects from '../data/projects';
import {
  projectsSection,
  projectsContainer,
  projectsTitle,
  projectsGrid,
  projectsCard,
  projectsTech,
  projectsTechTag,
  projectsLinks
} from '../styles/globalStyles';


function Projects() {
  return (
    <section style={projectsSection}>
      <div style={projectsContainer}>
        <h2 style={projectsTitle} className="gradient-text">Мои проекты</h2>
        <div style={projectsGrid}>
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              style={projectsCard} 
              className="fade-in scale-in"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div style={projectsTech}>
                {project.tech.map(tech => (
                  <span key={tech} style={projectsTechTag}>{tech}</span>
                ))}
              </div>
         
              
              <div style={projectsLinks}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">Live</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;