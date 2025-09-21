import React from 'react';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import ProjectModal from './components/ui/ProjectModal';
import ImageZoom from './components/ui/ImageZoom';
import useModal from './hooks/useModal';

const App = () => {
  const {
    selectedProject,
    zoomedImage,
    openProject,
    closeProject,
    openImageZoom,
    closeImageZoom
  } = useModal();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection onProjectClick={openProject} />
      <ContactSection />
      <Footer />

      {/* Modals */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={closeProject}
          onImageClick={openImageZoom}
        />
      )}
      
      {zoomedImage && (
        <ImageZoom 
          src={zoomedImage} 
          onClose={closeImageZoom} 
        />
      )}
    </div>
  );
};

export default App;