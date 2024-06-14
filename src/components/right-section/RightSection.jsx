"use client";
import { motion } from "framer-motion";
import Experience from "@/components/right-section/Experience/Experience";
import AboutMe from "@/components/right-section/about/AboutMe";
import Education from "@/components/right-section/Education/Education";
import Awards from "@/components/right-section/awards/Awards";

const RightSection = () => {
  return (
    <motion.section
      className="col-span-6 h-full bg-slate-300 border-[0.25rem] border-white border-solid"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="p-2">
        <AboutMe />
        <Experience />
        <Education />
        <Awards />
      </div>
    </motion.section>
  );
};

export default RightSection;
