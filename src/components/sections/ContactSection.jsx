import React from 'react';
import { Mail, Linkedin, Download } from 'lucide-react';
import { SOCIAL_LINKS, COLORS } from '../../utils/constants';
//import PixelHeart from '../decorations/PixelHeart';
//import FlowerDecoration from '../decorations/FlowerDecoration';
//import BunnyDecoration from '../decorations/BunnyDecoration';

const ContactSection = () => (
  <section id="contact" className="">
    {/* Grid Background */}
    <div 
      className="absolute inset-0 opacity-30"
      // style={{
      //   backgroundImage: `linear-gradient(rgba(139, 69, 19, 0.1) 1px, transparent 1px),
      //                    linear-gradient(90deg, rgba(139, 69, 19, 0.1) 1px, transparent 1px)`,
      //   backgroundSize: '24px 24px'
      // }}
    ></div>
    
    <div className="relative max-w-6xl mx-auto">
      {/* Decorations */}
      {/* <PixelHeart />
      <FlowerDecoration />
      <BunnyDecoration /> */}

      <div className="text-center">
        <h2 className="text-4xl md:text-6xl font-light mb-8" style={{color: COLORS.PRIMARY}}>
          Tu as une question, un projet en<br />
          tête ou<br />
          <span className="font-normal">simplement envie d'échanger ?</span>
        </h2>
        

        <div className="mb-8">
          <p className="text-lg mb-4" style={{color: COLORS.PRIMARY}}>
            Tu peux me retrouver ici :
          </p>
          
          <div className="flex justify-center space-x-4">
            {/* <a 
              href={SOCIAL_LINKS.INSTAGRAM} 
              className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform hover:scale-110"
              style={{backgroundColor: COLORS.PRIMARY_LIGHT}}
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#FF6B9D">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a> */}
            
            <a 
              href="https://www.linkedin.com/in/naima-aftab-a21757148/"
              className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform hover:scale-110"
              style={{backgroundColor: '#D4E3FF'}}
            >
              <Linkedin size={32} color="#4A90E2" />
            </a>
            
            {/* <a 
              href={SOCIAL_LINKS.DRIBBBLE} 
              className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform hover:scale-110"
              style={{backgroundColor: '#FFE5D4'}}
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#FF8A65">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.692 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"/>
              </svg>
            </a> */}
            
            <a 
              href="mailto:aftab.naima@outlook.fr" 
              className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform hover:scale-110"
              style={{backgroundColor: '#FFD4D4'}}
            >
              <Mail size={32} color="#E57373" />
            </a>

            <a 
              href="./assets/AFTAB_CV.pdf" 
              download="AFTAB_CV.pdf"
              className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform hover:scale-110"
              style={{backgroundColor: '#E8F5E8'}}
            >
              <Download size={32} color={COLORS.ACCENT} />
            </a>
          </div>
        </div>

        {/* Signature */}
        <div className="absolute bottom-8 right-8">
          <div className="text-right">
            <div className="text-3xl font-script mb-2" style={{color: COLORS.PRIMARY, fontFamily: 'cursive'}}>
              Naima
            </div>
            <div className="text-2xl font-script" style={{color: COLORS.PRIMARY, fontFamily: 'cursive'}}>
             AFTAB
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;