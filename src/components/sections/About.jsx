import React from 'react';
import './About.css';

export const About = () => {
  return (
    <section id="about">
      <div className="about-container about-paper-sheet">
        <h1 className="about-title">About Me</h1>
        
        <div className="about-content">
          <div className="about-section">
            <h2 className="section-title">Background</h2>
            <p className="about-text">
              I'm a 20-year old Computer Science major at CSUF. I decided to pursue a career in programming after taking
              AP Computer Science A in high school and really enjoying it. I am also very passionate about musical theater on the side,
              and I have been involved in 16 musicals since I was in 1st grade. I am the oldest child of 3, and I am Filipino and Italian.
              I love to travel and have been to 7 countries and 15 states so far. I can't wait to see where life takes me next!
            </p>
          </div>
          
          <div className="about-section">
            <h2 className="section-title">Education</h2>
            <div className="education-item">
                <h3 className="education-title">Bachelor of Science in Computer Science</h3>
                <p className="education-info">CSU Fullerton, 2022-2026</p>
                
                <div className="club-involvement">
                <h3 className="club-subtitle">Club Involvement</h3>
                <ul className="club-list">
                    <li>
                    <strong>ACM (Association for Computing Machinery)</strong> - Treasurer, Event Coordinator, Node Buds Team Lead
                    <span className="club-dates">2023-Present</span>
                    </li>
                    <li>
                    <strong>Women in Business and STEM</strong> - Member
                    <span className="club-dates">2024-Present</span>
                    </li>
                    <li>
                    <strong>FullyHacks 2025</strong> - Participant
                    <span className="club-dates">2025</span>
                    </li>
                </ul>
                </div>
            </div>
          </div>  
          
          <div className="about-section">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3 className="skill-category-title">Frontend</h3>
                <ul className="skill-list">
                  <li>React</li>
                  <li>JavaScript/TypeScript</li>
                  <li>HTML/CSS</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h3 className="skill-category-title">Backend</h3>
                <ul className="skill-list">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>REST APIs</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h3 className="skill-category-title">Tools</h3>
                <ul className="skill-list">
                  <li>Git/GitHub</li>
                  <li>VS Code</li>
                  <li>Figma</li>
                  <li>Jest/Testing</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="about-section">
            <h2 className="section-title">Interests</h2>
            <p className="about-text">
              When I'm not coding, you can find me sketching UI designs, contributing to open source projects,
              or hiking in nature. I'm passionate about accessibility in tech and regularly volunteer to teach
              coding to underrepresented groups in STEM.
            </p>
          </div>
          
          <div className="resume-download">
            <a 
              href={"https://drive.google.com/file/d/1Wn3XNT0bEPfMEG0ZmDPaC1hVUakOvRBN/view"} 
              className="resume-button"
              target="_blank"
            >
              View Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};