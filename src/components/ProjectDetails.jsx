import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl w-full bg-gradient-to-l from-midnight to-navy border border-white/10 rounded-2xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Close Button (inside card) */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 p-2 bg-midnight rounded-full hover:bg-gray-500"
        >
          <span className="text-white text-2xl leading-none">×</span>
        </button>

        {/* Project Image */}
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-cover rounded-t-2xl"
          />
        )}

        {/* Project Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
          <p className="text-neutral-400 mb-3">{description}</p>

          {subDescription?.map((subDesc, index) => (
            <p key={index} className="text-neutral-400 mb-3">
              {subDesc}
            </p>
          ))}

          <div className="flex items-center justify-between mt-4">
            {/* Tags */}
            <div className="flex gap-3 flex-wrap">
              {tags?.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="size-10 rounded-lg hover:scale-105 transition-transform"
                />
              ))}
            </div>

            {/* View Project Link */}
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium inline-flex items-center gap-2 hover:underline"
              >
                View Project
                <img src="assets/arrow-up.svg" className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
