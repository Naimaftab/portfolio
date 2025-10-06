import React from 'react';

// const customColors = [
//   '#fcbf49', // jaune
//   '#0077b6', // bleu
//   '#2a9d8f', // vert
//   '#e76f51', // orange
//   '#9d4edd', // violet
//   '#ff006e', // rose
//   '#6a4c93', // indigo
// ];

const customColors = [
  '#003049', // bleu nuit
'#6a4c93', // indigo
  '#588157', // vert olive
  '#d62828', // rouge vif
  '#f77f00', // orange chaud
  '#fcbf49', // jaune doré

];

const ProjectCard = ({ project, onClick, index }) => {
  const color = customColors[index % customColors.length];

  return (
    <div
      className="group relative block h-64 sm:h-80 lg:h-96 cursor-pointer"
      onClick={() => onClick(project)}
    >
      {/* Cadre en pointillés */}
      <span
        className="absolute inset-0 border-2 border-dashed rounded-3xl z-10 pointer-events-none"
        style={{ borderColor: color }}
      ></span>

      {/* Image en fond avec opacité */}
      <div
        className="absolute inset-0 rounded-3xl z-0 pointer-events-none transition-opacity duration-300"
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 2,
          filter: 'blur(2px)',
        }}
      ></div>

      {/* Contenu principal avec bordure colorée */}
      <div
        className="relative flex h-full transform items-end border-3 bg-white/80 rounded-3xl transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 z-20 overflow-hidden"
        style={{ borderColor: color }}
      >
        {/* Avant hover */}
        <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 z-30">
          <img
            src={project.image}
            alt={project.title}
            className="w-10 h-10 mb-4 rounded-full object-cover"
          />
          <h2 className="mt-2 text-xl font-medium sm:text-2xl text-gray-900">{project.title}</h2>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{project.category}</p>
        </div>

        {/* Après hover */}
        <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 z-30">
          <h3 className="mt-2 text-xl font-medium sm:text-2xl text-gray-900">{project.title}</h3>
          <p className="mt-4 text-sm sm:text-base text-gray-600 line-clamp-3">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-sm text-white"
                style={{
                  backgroundColor: color,
                  border: `1px solid ${color}`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-6 font-bold" style={{ color }}>Voir le projet</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
