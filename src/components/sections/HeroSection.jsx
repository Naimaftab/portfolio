import React from 'react';
import { Sparkles, Eye, Mail } from 'lucide-react';

const HeroSection = () => (
  <section id="home" className="pt-36 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">

{/* Image à droite (en haut sur mobile) */}
<div className="w-full md:w-1/2 flex justify-center relative">
  {/* Photo */}
  <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#D6E932] shadow-lg">
    <img 
      src="/portfolio/images/portrait2.png"
      alt="Portrait de Naïmagique"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Emoji par-dessus, centré verticalement à gauche */}
  <img 
    src="/portfolio/images/citron1.png"
    alt="Emoji coucou"
    className="absolute top-1/2 left-[calc(50%-185px)] transform -translate-y-1/2 w-16 h-16 sm:w-16 sm:h-16 md:w-20 md:h-20 z-30"
  />
</div>

      {/* Texte à gauche (en bas sur mobile) */}
      <div className="w-full md:w-1/2 text-center md:text-left">
     <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
  <div className="inline-flex items-center px-4 py-2 bg-[#FCBF49] text-[#003049] rounded-full text-sm font-medium">
    <Sparkles size={16} className="mr-2" />
    UX/UI Designer
  </div>

  <div className="inline-flex items-center px-4 py-2 bg-[#FCBF49] text-[#003049] rounded-full text-sm font-medium">
    <Sparkles size={16} className="mr-2" />
    Développeur web
  </div>
</div>
        <h1 className="text-2xl font-bold text-[#003049] mb-6 leading-snug">
           Bonjour, moi c’est <span className="text-[#D62828]">Naima AFTAB <img  src="/portfolio/images/citron2.png" alt="Emoji coucou"className="inline w-10 h-10 sm:w-10 sm:h-10 md:w-10 md:h-10"/></span>
          <br /><br />
          Passionnée par la création de sites et d'applications modernes, j'ai fait de l'accessibilité numérique le piliers de mon travail. <br />
          Que ce soit pour le développement from scratch ou la création de sites  <a href="https://google.fr" className="text-[#F77F00] hover:text-[#FCBF49]" target="_blank" rel="noopener noreferrer">wordpress</a>, j'accorde une grande importance au design et à l'expérience utilisateur.
          <br /><br />
          Diplômée d'un Master Informatique en 2020 ainsi que d'une formation chef de projet web option UX/UI design en 2021 <span className="">Ma double compétence me permet de comprendre et répondre aux besoins des utilisateurs tout en facilitant la collaboration avec les équipes techniques</span>. <br />
        </h1>

        {/* <p className="text-base sm:text-lg text-[#555555] mb-6 leading-relaxed">
         J’ai envie de m’investir dans des projets innovants qui stimulent ma curiosité, tout en créant des solutions concrètes qui font vraiment la différence.
        </p> */}

        <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
      <a 
            href="#projects" 
            className="inline-flex items-center justify-center px-6 py-3 bg-[#D62828] text-white rounded-full hover:shadow-lg transition-all transform hover:scale-105">
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
