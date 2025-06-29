import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DownloadCVButton = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative w-[12rem] text-center"
    >
      <a
        href="/assets/112315102.pdf"
        download="Manorath_CV.pdf"
        onClick={handleDownload}
        className="block px-1 py-4 text-sm rounded-full font-extralight bg-primary text-white cursor-pointer overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {downloaded ? (
            <motion.p
              key="downloaded"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center gap-2"
            >
              <img src="/assets/copy-done.svg" className="w-5" alt="check icon" />
              CV Downloaded!
            </motion.p>
          ) : (
            <motion.p
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center gap-2"
            >
              <img src="/assets/copy.svg" className="w-5" alt="download icon" />
              See My CV
            </motion.p>
          )}
        </AnimatePresence>
      </a>
    </motion.div>
  );
};

export default DownloadCVButton;
