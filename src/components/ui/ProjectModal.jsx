import React from 'react';
import { 
  X, 
  Sparkles, 
  Eye, 
  ExternalLink, 
  CheckCircle 
} from 'lucide-react';

// Couleurs directement dans le fichier
const modalColors = [
  '#003049', // projet 1 - bleu nuit
  '#6a4c93', // projet 2 - indigo
  '#588157', // projet 3 - vert olive
  '#d62828', // projet 4 - rouge vif
  '#f77f00', // projet 5 - orange chaud
  '#fcbf49', // projet 6 - jaune doré
];

const ProjectModal = ({ project, index, onClose, onImageClick }) => {
  const color = modalColors[index % modalColors.length];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between rounded-t-3xl">
          <div>
            <h3 className="text-2xl font-bold" style={{ color }}>{project.title}</h3>
            <p className="text-gray-500 mt-1">{project.category}</p>
          </div>
    <button 
        onClick={onClose}
        className="p-2 rounded-full transition-all"
        style={{
          color: color,
          border: `2px solid ${color}`,
          backgroundColor: `${color}20`, // opacité légère (hex alpha 20 = ~12%)
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = `${color}10`; // opacité plus forte (~25%)
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = `${color}20`; // revient à l’opacité légère
        }}
      >
  <X size={24} />
</button>
        </div>
        
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">DESCRIPTION DU PROJET</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Objectifs du projet</h4>
              <ul className="space-y-3">
                {project.objectives.map((objective, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color }} />
                    <span className="text-gray-600">{objective}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 mt-8">
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg transition-all"
                  >
                    <Eye size={16} className="mr-2" />
                    Voir le projet
                  </a>
                )}
                {project.behance && (
                  <a 
                    href={project.behance} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-full hover:border-purple-500 hover:text-purple-500 transition-all"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Behance
                  </a>
                )}
              </div>
              <br/>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">MAQUETTES COMPLÈTES</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.mockups.map((mockupUrl, idx) => (
                  <div 
                    key={idx}
                    className="cursor-pointer group"
                    onClick={() => onImageClick(mockupUrl)}
                  >
                    <img 
                      src={mockupUrl}
                      alt={`${project.title} mockup ${idx + 1}`}
                      className="w-full h-48 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-[1.02]"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">Cliquer sur une image pour l'agrandir</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
