import React from 'react';

const Navigation = () => (
  <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-40 border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        <div className="text-2xl font-bold bg-gradient-to-r from-[#003049] via-[#D62828] to-[#F77F00] bg-clip-text text-transparent">
          Portfolio AFTAB
        </div>
      
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-[#003049] hover:text-[#fdbf45] transition-colors">Accueil</a>
          <a href="#projects" className="text-[#003049] hover:text-[#fdbf45] transition-colors">Mes projets</a>
          <a href="#contact" className="text-[#003049] hover:text-[#fdbf45] transition-colors">Contact</a>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;