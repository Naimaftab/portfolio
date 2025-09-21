import React from 'react';
import { Sparkles, Eye, Mail } from 'lucide-react';

const HeroSection = () => (
  <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
          <Sparkles size={16} className="mr-2" />
          UX/UI Designer disponible
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Des interfaces pensées avec
          <br />
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            soin pour une expérience
          </span>
          <br />
          fluide et intuitive
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Voici une sélection de <strong>projets créatifs</strong> imaginés autour de <strong>thématiques sensibles</strong> et actuelles.
        </p>
        
        <p className="text-gray-600 mb-8">
          Chaque interface a été pensée pour aller <strong>esthétique, accessibilité et cohérence</strong> narrative avec une attention particulière.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transition-all transform hover:scale-105"
          >
            <Eye size={20} className="mr-2" />
            Découvrir mes projets
          </a>
          <a 
            href="#contact"
            className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full hover:border-purple-600 hover:text-purple-600 transition-all"
          >
            <Mail size={20} className="mr-2" />
            Me contacter
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;