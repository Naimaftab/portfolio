import React from 'react';

const ProjectCard = ({ project, onClick }) => (
  <div 
    className="group cursor-pointer"
    onClick={() => onClick(project)}
  >
    <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-[1.02]">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full">
            <span className="text-gray-900 font-medium">Voir le projet</span>
          </div>
        </div>
      </div>
      
      <div className="p-8">
        <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full mb-4">
          {project.category}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-6 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;