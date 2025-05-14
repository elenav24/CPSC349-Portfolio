import React from 'react';
import './Skills.css';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Technical',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node.js',
        'Git',
        'TypeScript',
        'Responsive Design'
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        'Communication',
        'Team Collaboration',
        'Creative Problem Solving',
        'Time Management',
        'Adaptability',
        'Attention to Detail'
      ]
    },
    {
      title: 'Design',
      skills: [
        'UI/UX Principles',
        'Figma',
        'Adobe Creative Suite',
        'Color Theory',
        'Typography',
        'Wireframing'
      ]
    }
  ];

  return (
    <section id="skills">
      <div className="skills-container skills-paper-sheet">
        <h1 className="skills-title">Skills & Expertise</h1>
        
        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills-category">
              <h2 className="skills-category-title">
                <span className="visually-hidden">{category.icon}</span>
                {category.title}
              </h2>
              <ul className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skills-item">
                    <span className="skills-name">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};