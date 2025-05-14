import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

export const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A responsive personal portfolio showcasing my work and skills.",
      technologies: ["React", "CSS", "JavaScript"],
      challenges: [
        "Creating a unique visual identity",
        "Implementing smooth animations",
        "Ensuring mobile responsiveness"
      ],
      outcomes: [
        "Increased professional visibility",
        "Showcased technical and design skills",
        "Received positive feedback from peers"
      ],
      link: "/projects/portfolio-website"
    },
    {
      id: 2,
      title: "MissionUp",
      description: "Submission for FullyHacks 2025, a chore management app for parents and kids with a space-themed UI",
      technologies: ["Swift", "SwiftUI", "Figma", "XCode"],
      challenges: [
        "FullyHacks2025 - 24 Hour Programming Challenge",
        "Merge Conflicts",
        "Teamwork, Communication"
      ],
      outcomes: [
        "Top 3 in Beginner Category"
      ],
      link: "/projects/mission-up"
    },
    
  ];

  const toggleExpand = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="projects-page">
      <div className="projects-container projects-paper-sheet">
        <h1 className="projects-title">Project Portfolio</h1>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`project-card ${expandedProject === project.id ? 'expanded' : ''}`}
            >
              <div 
                className="project-header"
                onClick={() => toggleExpand(project.id)}
              >
                <h2 className="project-title">{project.title}</h2>
                <span className="project-toggle">
                  {expandedProject === project.id ? '−' : '+'}
                </span>
              </div>
              
              <div className="project-content">
                <p className="project-description">{project.description}</p>
                
                <div className="project-details">
                  <div className="project-section">
                    <h3 className="section-title">Technologies</h3>
                    <ul className="tech-list">
                      {project.technologies.map((tech, index) => (
                        <li key={index} className="tech-item">{tech}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="project-section">
                    <h3 className="section-title">Challenges</h3>
                    <ul className="challenges-list">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="challenge-item">{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="project-section">
                    <h3 className="section-title">Outcomes</h3>
                    <ul className="outcomes-list">
                      {project.outcomes.map((outcome, index) => (
                        <li key={index} className="outcome-item">{outcome}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Link to={project.link} className="project-link">
                  View Project Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};