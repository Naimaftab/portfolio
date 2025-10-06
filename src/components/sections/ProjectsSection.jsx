import React from 'react';
import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';
import Typewriter from 'typewriter-effect';

const ProjectsSection = ({ onProjectClick }) => (
  <section id="projects" className="py-15 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <div className="text-center mb-16">
          <div className="text-4xl md:text-5xl font-bold text-[#003049] mb-6 underline-offset-4">
            <Typewriter
              options={{
                strings: ['Mes projets', 'Mes créations', 'Mes réalisations'],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                cursor: '|',
              }}
            />
          </div>
        </div>
        <div className="w-16 h-1 mb-8"></div>
      </div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
{projects.map((project, index) => (
  <ProjectCard 
    key={index} 
    project={project} 
    index={index} 
    onClick={() => onProjectClick(project, index)} 
  />
))}


      </div>
    </div>
  </section>
);

export default ProjectsSection;
