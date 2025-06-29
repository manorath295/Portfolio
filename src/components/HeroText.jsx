import React, { useState } from "react";
import { motion } from "framer-motion";
import FlipWords  from "./flipWords";
import { Upload, Download } from "lucide-react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/112315102.pdf"; // Adjust path to your actual CV
    link.download = "Manorath_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-20 md:mt-32 px-8 gap-12">
      {/* LEFT: Hero Text Section */}
      <div className="text-center md:text-left z-10 space-y-5 md:w-1/2">
        <motion.h1
          className="text-4xl font-medium"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          Hi I'm Manorath
        </motion.h1>

        <motion.p
          className="text-5xl font-medium text-neutral-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          A Developer <br /> Dedicated to Crafting
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <FlipWords
            words={words}
            className="font-black text-white text-8xl"
          />
        </motion.div>

        <motion.p
          className="text-4xl font-medium text-neutral-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
        >
          Web Solutions
        </motion.p>
      </div>

      {/* RIGHT: Contact & CV Card Section */}
      <motion.div
        className="flex justify-center md:justify-end md:w-1/2 z-10 ml-[400px] right-0"

        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4 }}
      >
        <div className="bg-gradient-to-br from-purple-900/40 to-cyan-900/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl max-w-md w-full">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">
              Let's Connect & Collaborate
            </h3>

            {/* Profile Upload */}
            <div className="relative mx-auto">
              <div className="w-40 h-40 mx-auto rounded-full border-4 border-gradient-to-r from-purple-400 to-cyan-400 p-1 bg-gradient-to-r from-purple-400 to-cyan-400">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                  
                    <img
                      src="/assets/myimage.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full m-5"
                    />
                  
                   
                </div>
              </div>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-full"
              />

              {!imagePreview && (
                <div className="absolute inset-0 w-40 h-40 rounded-full border-2 border-dashed border-purple-400/50 flex items-center justify-center pointer-events-none" />
              )}
            </div>

            {/* Download CV Button */}
           <div className="relative z-10">
  <button
    onClick={handleDownloadCV}
    className="group relative w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
  >
    <div className="flex items-center justify-center space-x-3">
      <Download className="w-5 h-5 group-hover:animate-bounce" />
      <span>Download CV</span>
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity -z-10"></div>
  </button>
</div>


            

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl p-4 border border-purple-500/20">
             
            <button
  onClick={() => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="w-full bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40"
>
  See Projects
</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroText;
