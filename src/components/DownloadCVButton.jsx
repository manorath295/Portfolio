import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"; // use framer-motion
// If using motion.dev, adjust import: from "motion/react" instead of "framer-motion"

const DownloadCVButton = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/Manorath_Resume.pdf"; // 👈 Path to your CV in public/assets/
    link.download = "Manorath_CV.pdf"; // 👈 What you want to name the file
    link.click();

    setDownloaded(true);

    setTimeout(() => {
      setDownloaded(false);
    }, 2000);
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {downloaded ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="downloaded"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <img src="/assets/copy-done.svg" className="w-5" alt="check icon" />
            CV Downloaded!
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <img src="/assets/copy.svg" className="w-5" alt="download icon" />
            See My CV
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default DownloadCVButton;
