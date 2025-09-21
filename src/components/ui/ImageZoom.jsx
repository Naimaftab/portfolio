import React from 'react';
import { X } from 'lucide-react';

const ImageZoom = ({ src, onClose }) => (
  <div className="fixed inset-0 bg-black/90 z-60 flex items-center justify-center p-4" onClick={onClose}>
    <div className="relative max-w-6xl max-h-full">
      <button 
        onClick={onClose}
        className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
      >
        <X size={32} />
      </button>
      <img 
        src={src}
        alt="Maquette agrandie"
        className="max-w-full max-h-[90vh] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  </div>
);

export default ImageZoom;