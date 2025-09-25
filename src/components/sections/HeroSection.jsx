import React from 'react';
import { Sparkles, Eye, Mail } from 'lucide-react';

const HeroSection = () => (
  <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">

      {/* Image à droite (en haut sur mobile) */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#D62828] shadow-lg">
          <img 
            src="/portfolio/images/portrait.png"
            alt="Portrait de Naïmagique"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Emoji personnalisé en bas à droite */}
        <img 
          src="/images/emoji-coucou.png"
          alt="Emoji coucou"
          className="absolute bottom-0 right-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 transform translate-x-4 translate-y-4"
        />
      </div>

      {/* Texte à gauche (en bas sur mobile) */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <div className="inline-flex items-center px-4 py-2 bg-[#FCBF49] text-[#003049] rounded-full text-sm font-medium mb-6 mx-auto md:mx-0">
          <Sparkles size={16} className="mr-2" />
          UX/UI Designer disponible
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#003049] mb-6 leading-snug">
          👋 Bonjour, moi c’est <span className="text-[#D62828]">Naima AFTAB</span>
          <br />
          Blablabla
          <br />
          Blablabla <span className="bg-gradient-to-r from-[#F77F00] to-[#FCBF49] bg-clip-text text-transparent font-semibold">BlablablaBlablalabla</span>.
        </h1>

        <p className="text-base sm:text-lg text-[#555555] mb-6 leading-relaxed">
          BlablablaBlablablaBlablablaBlablablaB
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
          <a 
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#D62828] text-white rounded-full hover:shadow-lg transition-all transform hover:scale-105"
          >
            <Eye size={20} className="mr-2" />
            Découvrir mes projets
          </a>
          <a 
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#D62828] text-[#D62828] rounded-full hover:bg-[#FCBF49] transition-all"
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
