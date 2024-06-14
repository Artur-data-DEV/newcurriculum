"use client";
import { motion } from "framer-motion";
import Profile from "@/components/left-section/contact/Profile";
import Contact from "@/components/left-section/contact/Contact";
import Skills from "@/components/left-section/skills/Skills";

const LeftSection = () => {
  return (
    <motion.section
      className="left-section"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="left-section-contents">
        <Profile />
        <Contact />
        <Skills />
      </div>
    </motion.section>
  );
};

export default LeftSection;
