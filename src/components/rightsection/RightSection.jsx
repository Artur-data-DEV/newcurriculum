"use client";
import { motion } from "framer-motion";
import Experience from "@/components/rightsection/experience/Experience";
import AboutMe from "@/components/rightsection/about/AboutMe.jsx";
import Education from "@/components/rightsection/education/Education.jsx";
import Awards from "@/components/rightsection/awards/Awards.jsx";

const RightSection = ({ className }) => {
  return (
    <motion.section
      className={
        "col-span-8 h-full " +
        className
      }
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="px-2">
        <AboutMe />
        <Education />
        <Experience />
        <Awards />
      </div>
    </motion.section>
  );
};

export default RightSection;
