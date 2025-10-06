import React from 'react';
import { Sparkles, Eye, Mail } from 'lucide-react';

const HeroSection = () => (
  <section id="home" className="pt-34 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">

{/* Image à droite (en haut sur mobile) */}
<div className="w-full md:w-1/2 flex justify-center relative">
  {/* Photo */}
  <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 bg-gradient-to-r from-[#003049] via-[#D62828] to-[#F77F00] shadow-lg">
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

      <a
        class="inline-flex items-center px-4 py-2 bg-[#FCBF49] text-[#003049] rounded-full text-sm font-medium text-white transition hover:scale-110 hover:rotate-2 focus:ring-3 focus:outline-hidden relative z-10"
        ><Sparkles size={16} className="mr-2 inline" />
          UX/UI Designer
      </a>

      <a
        class="inline-flex items-center px-4 py-2 bg-[#FCBF49] text-[#003049] rounded-full text-sm font-medium text-white transition hover:scale-110 hover:-rotate-2 focus:ring-3 focus:outline-hidden relative z-10"
        ><Sparkles size={16} className="mr-2 inline" />
          Développeur web
      </a>

</div>
        <h1 className="text-2xl font-bold text-[#003049] mb-6 leading-snug">
           Bonjour, moi c’est <span className="text-[#D62828]">Naima AFTAB <img  src="/portfolio/images/citron2.png" alt="Emoji coucou"className="inline w-10 h-10 sm:w-10 sm:h-10 md:w-10 md:h-10"/></span>
          <br /><br />
          Passionnée par la création de sites et d'applications modernes, j'ai fait de l'accessibilité numérique le piliers de mon travail. <br />
          Que ce soit pour le développement from scratch ou la création de sites  <a href="https://google.fr" className="text-[#F77F00] hover:text-[#FCBF49] relative z-10" target="_blank" rel="noopener noreferrer">wordpress</a>, j'accorde une grande importance au design et à l'expérience utilisateur.
          <br /><br />
          Diplômée d'un Master Informatique en 2020 ainsi que d'une formation chef de projet web option UX/UI design en 2021 <span className="">Ma double compétence me permet de comprendre et répondre aux besoins des utilisateurs tout en facilitant la collaboration avec les équipes techniques</span>. <br />
        </h1>

        {/* <p className="text-base sm:text-lg text-[#555555] mb-6 leading-relaxed">
         J’ai envie de m’investir dans des projets innovants qui stimulent ma curiosité, tout en créant des solutions concrètes qui font vraiment la différence.
        </p> */}

        <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4 px-16 py-3">
            <a className="group relative inline-block focus:ring-3 focus:outline-hidden" href="#projects">
            <span
              className="absolute inset-0 translate-x-1.5 translate-y-1.5 x-6 py-3 bg-[#D62828] text-white rounded-full hover:shadow-lg transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
            ></span>

            <span
              className="relative z-10 inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-white rounded-full hover:shadow-lg"
            >
            <Eye size={20} className="mr-2 inline" />
              Voir mes projets
            </span>
          </a>
<a className="group relative inline-block focus:ring-3 focus:outline-hidden" href="#contact">
            <span
              className="absolute inset-0 translate-x-1.5 translate-y-1.5 x-6 py-3 bg-[#D62828] text-white rounded-full hover:shadow-lg transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
            ></span>

            <span
              className="relative z-10 inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-white rounded-full hover:shadow-lg"
            >
            <Mail size={20} className="mr-2 inline" />
              Me contacter
            </span>
          </a>
          {/* <a className="group relative inline-block focus:ring-3 focus:outline-hidden" href="#projects">
            <span
              className="absolute inset-0 translate-x-1.5 translate-y-1.5 x-4 py-3 bg-[#D62828] text-white rounded-full hover:shadow-lg transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
            ></span>

            <span
              className="relative z-10 inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-white rounded-full hover:shadow-lg"
            >
            <Mail size={20} className="mr-2 inline" />
              Me contacter
            </span>
          </a> */}
          {/* Hover */}

          {/* <a className="group relative inline-block focus:ring-3 focus:outline-hidden" href="#contact">
            <span
              className="absolute inset-0 translate-x-0 translate-y-0 bg-[#D62828] text-white rounded-full hover:shadow-lg transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
            ></span>

            <span
              className="relative z-10 inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-white rounded-full hover:shadow-lg"
            > <Mail size={20} className="mr-2 inline" />
              Me contacter
            </span>
          </a> */}

      {/* <a 
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
          </a> */}

        </div>
      </div>
    </div>


{/* <br/><br/><br/>
<div class="flex justify-center"><div class="-lg flex size-10 animate-bounce items-center justify-center rounded-full bg-white p-2 ring-1 ring-gray-900/5 dark:bg-white/5 dark:ring-white/20"><svg class="size-6 text-violet-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg></div></div> */}
  </section>

);

export default HeroSection;
