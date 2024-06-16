"use client";
import { motion } from "framer-motion";
import Profile from "@/components/leftsection/contact/Profile.jsx";
import Contact from "@/components/leftsection/contact/Contact.jsx";
import Skills from "@/components/leftsection/skills/Skills.jsx";

const LeftSection = ({className}) => {
  return (
    <motion.section
      className={"col-span-4 h-full border-2 border-white overflow-hidden " + className}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div>
        <Profile />
        <Contact />
        <Skills />
      </div>
    </motion.section>
  );
};

export default LeftSection;
