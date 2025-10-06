import React from 'react';
import { Mail, Linkedin, Download } from 'lucide-react';
import { SOCIAL_LINKS, COLORS } from '../../utils/constants';

const AnimatedTitle = () => {
  const line1 = "Tu as une question, un projet en tête";
  const line2 = "ou simplement envie d'échanger ?";

  const renderLine = (text, isBold = false) => (
    <div className={`mb-2 ${isBold ? 'font-normal' : ''}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block"
          style={{
            animation: `bounceLetter 0.6s ease-out ${index * 0.1}s`,
            animationFillMode: 'forwards',
            animationIterationCount: 'infinite',
            animationDuration: '7s',
            display: 'inline-block',
            color: 'white',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );

  return (
    <h2 className="text-2xl sm:text-4xl font-light mb-8 text-center leading-snug px-4">
      {renderLine(line1)}
      {renderLine(line2, true)}
      <style>
        {`
          @keyframes bounceLetter {
            0% { transform: translateY(0); opacity: 1; }
            10% { transform: translateY(-10px); }
            20% { transform: translateY(0); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </h2>
  );
};

const ContactSection = () => (
  <section id="contact" className="pb-16 relative">
    <div className="absolute inset-0 opacity-30"></div>

    <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center">
        <AnimatedTitle />

        <div className="mb-8">
          <p className="text-lg mb-4" style={{ color: COLORS.PRIMARY }}>
            Tu peux me retrouver ici :
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/naima-aftab-a21757148/"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-transform hover:scale-110"
              style={{ backgroundColor: '#D4E3FF' }}
            >
              <Linkedin size={32} color="#4A90E2" />
            </a>

            <a
              href="mailto:aftab.naima@outlook.fr"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-transform hover:scale-110"
              style={{ backgroundColor: '#FFD4D4' }}
            >
              <Mail size={32} color="#E57373" />
            </a>

            <a
              href="/AFTAB_CV.pdf"
              download="/AFTAB_CV.pdf"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-transform hover:scale-110"
              style={{ backgroundColor: '#f8da64ff' }}
            >
              <Download size={32} color={COLORS.ACCENT} />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center sm:text-right sm:absolute sm:bottom-8 sm:right-8">
          <div
            className="flex flex-col sm:text-right text-center"
            style={{
              animation: 'slideInRight 0.8s ease-out',
              animationFillMode: 'forwards',
            }}
          >
            <div
              className="text-3xl font-script"
              style={{ color: COLORS.PRIMARY, fontFamily: 'cursive' }}
            >
              AFTAB
            </div>
            <div
              className="text-2xl font-script"
              style={{ color: COLORS.PRIMARY, fontFamily: 'cursive' }}
            >
              <img
                src="/portfolio/images/citron3.png"
                alt="Emoji coucou"
                className="inline w-10 h-10"
              />{' '}
              Naima
            </div>
            <br />
            <br />
          </div>

          <style>
            {`
              @keyframes slideInRight {
                0% { transform: translateX(100%); opacity: 0; }
                80% { transform: translateX(-10px); opacity: 1; }
                100% { transform: translateX(0); }
              }
            `}
          </style>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
