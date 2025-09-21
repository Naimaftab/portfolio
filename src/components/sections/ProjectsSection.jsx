import React from 'react';
import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';

const ProjectsSection = ({ onProjectClick }) => (
  <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6" style={{color: '#B4A7D6'}}>
          MES PROJETS
        </h2>
        <div className="w-16 h-1 bg-purple-300 mb-8"></div>
        <p className="text-2xl text-gray-600 leading-relaxed max-w-3xl">
          Des interfaces pensées avec soin pour une expérience fluide et intuitive
        </p>
      </div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            onClick={onProjectClick}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;