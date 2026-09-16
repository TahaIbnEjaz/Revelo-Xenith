import { useRef } from 'react';
import { motion } from 'framer-motion';

// Masonry/grid portfolio tile with an image-zoom hover effect and
// a gradient overlay revealing the project title + category on hover.
function PortfolioCard({ project }) {
  const videoRef = useRef(null);
  const isVideo = project.image.endsWith('.mp4');

  const playVideo = () => {
    videoRef.current?.play().catch(() => {});
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-2xl"
      onMouseEnter={isVideo ? playVideo : undefined}
      onMouseLeave={isVideo ? pauseVideo : undefined}
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        {isVideo ? (
          <video
            ref={videoRef}
            src={project.image}
            muted
            playsInline
            loop
            preload="metadata"
            aria-label={project.title}
            className="h-full w-full object-contain object-center transition-transform duration-700 ease-out"
          />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-contain object-center transition-transform duration-700 ease-out"
          />
        )}
      </div>

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-rx-navy-deep/95 via-rx-navy-deep/20 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="text-xs font-medium uppercase tracking-wider text-rx-cyan">
          {project.category}
          {project.subcategory ? ` · ${project.subcategory}` : ''}
        </span>
        <h3 className="mt-1 text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-1 text-sm text-white/80">{project.description}</p>
      </div>
    </motion.div>
  );
}

export default PortfolioCard;
