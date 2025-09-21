import { useState } from "react";

const useModal = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  const openProject = (project) => setSelectedProject(project);
  const closeProject = () => setSelectedProject(null);
  const openImageZoom = (imageSrc) => setZoomedImage(imageSrc);
  const closeImageZoom = () => setZoomedImage(null);

  return {
    selectedProject,
    zoomedImage,
    openProject,
    closeProject,
    openImageZoom,
    closeImageZoom,
  };
};

export default useModal;
