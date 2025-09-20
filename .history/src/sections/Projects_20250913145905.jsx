import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  
  const [preview, setPreview] = useState(null);
  
  // Helper function to determine if the file is a video
  const isVideo = (url) => {
    if (!url) return false;
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
    return videoExtensions.some(ext => 
      url.toLowerCase().includes(ext.toLowerCase())
    );
  };
  
  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {preview && (
        <motion.div
          className="fixed top-0 left-0 z-50 pointer-events-none"
          style={{ x: springX, y: springY }}
        >
          {isVideo(preview) ? (
            <video
              className="object-cover h-56 rounded-lg shadow-lg w-80"
              src={preview}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img
              className="object-cover h-56 rounded-lg shadow-lg w-80"
              src={preview}
              alt="Project preview"
            />
          )}
        </motion.div>
      )}
    </section>
  );
};

export default Projects;