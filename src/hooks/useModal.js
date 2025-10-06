import { useState } from "react";

const useModal = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  const openProject = (project, index) => {
    setSelectedProject(project);
    setSelectedIndex(index);
  };
  const closeProject = () => setSelectedProject(null);
  const openImageZoom = (imageSrc) => setZoomedImage(imageSrc);
  const closeImageZoom = () => setZoomedImage(null);

  return {
    selectedIndex,
    selectedProject,
    zoomedImage,
    openProject,
    closeProject,
    openImageZoom,
    closeImageZoom,
  };
};

export default useModal;
