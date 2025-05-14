import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';

export const ProjectDetail = () => {
  const { projectId } = useParams();
  
  const projects = {
    'portfolio-website': {
      title: "Portfolio Website",
      description: "A responsive personal portfolio built with React that showcases my projects and skills. Designed with a notebook theme featuring graph paper background and pink accents to reflect my personal style while maintaining professionalism.",
      technologies: ["React", "CSS", "JavaScript", "React Router"],
      challenges: [
        "Creating a unique visual identity that stands out",
        "Implementing smooth page transitions without external libraries",
        "Ensuring consistent styling across all components"
      ],
      outcomes: [
        "Achieved Good grade on CPSC349 Portfolio Project",
      ],
      screenshots: [
        "/images/projectimages/portfolio1.png", 
        "/images/projectimages/portfolio2.png", 
        "/images/projectimages/portfolio3.png", 
        "/images/projectimages/portfolio4.png", 
        "/images/projectimages/portfolio5.png"
      ],
      githubUrl: "https://github.com/elenav24/CPSC349-Portfolio"
    },
    'mission-up': {
      title: "MissionUp",
      description: "Submission for FullyHacks 2025, a chore management app for parents and kids with a space-themed UI",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      challenges: [
        "FullyHacks2025 - 24 Hour Programming Challenge",
        "Merge Conflicts",
        "Teamwork, Communication"
      ],
      outcomes: [
        "Top 3 in Beginner Category"
      ],
      screenshots: [
        "/images/projectimages/mission1.png", 
        "/images/projectimages/mission2.png", 
        "/images/projectimages/mission3.png", 
        "/images/projectimages/mission4.png", 
        "/images/projectimages/mission5.png", 
      ],
      githubUrl: "https://github.com/elenav24/MissionUp",
      youtubeUrl: "https://www.youtube.com/watch?v=HziqXG0Pb-Q"
    }
  };

  const project = projects[projectId];

  if (!project) {
    return <div className="project-not-found">Project not found</div>;
  }

  return (
    <section id="project-detail">
      <div className="project-detail-container project-detail-paper-sheet">
        <h1 className="project-detail-title">{project.title}</h1>
        
        <div className="project-detail-content">
          <div className="project-overview">
            <h2 className="section-title">Overview</h2>
            <p className="project-description">{project.description}</p>
          </div>
          
          <div className="project-screenshots">
            <h2 className="section-title">Screenshots</h2>
            <div className="screenshot-grid">
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className="screenshot-item">
                  <img 
                    src={screenshot} 
                    alt={`${project.title} screenshot ${index + 1}`} 
                    className="screenshot-image"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="project-details-grid">
            <div className="project-technologies">
              <h2 className="section-title">Technologies</h2>
              <ul className="tech-list">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="tech-item">{tech}</li>
                ))}
              </ul>
            </div>
            
            <div className="project-challenges">
              <h2 className="section-title">Challenges</h2>
              <ul className="challenges-list">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="challenge-item">{challenge}</li>
                ))}
              </ul>
            </div>
            
            <div className="project-outcomes">
              <h2 className="section-title">Outcomes</h2>
              <ul className="outcomes-list">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="outcome-item">{outcome}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="project-links">
            <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-link"
            >
                View on GitHub
            </a>
            
            {project.youtubeUrl && (
                <a 
                href={project.youtubeUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-link"
                >
                View on YouTube
                </a>
            )}
            </div>
        </div>
      </div>
    </section>
  );
};