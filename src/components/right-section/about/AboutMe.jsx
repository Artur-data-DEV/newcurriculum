import { motion } from "framer-motion";
import { aboutMeData } from "@/data/aboutMeData";

const AboutMe = () => {
  return (
    <section className="about">
      <motion.div
        className="right-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        About
      </motion.div>
      <div>
        {aboutMeData.map((content, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-black"
          >
            {content.text}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
