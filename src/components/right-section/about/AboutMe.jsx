import { motion } from "framer-motion";
import { aboutMeData } from "@/data/aboutMeData";

const AboutMe = () => {
  return (
    <section className="space-y-2 mt-8">
      <motion.h1
        className="text-blue-900 font-mono text-4xl uppercase font-semibold tracking-wide pl-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        About Me
      </motion.h1>
      <div>
        {aboutMeData.map((content, index) => (
          <div className={"py-1"}>
            <motion.p
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.7 }}
              className="text-black text-justify gap-10 px-5"
            >
              {content.text}
            </motion.p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
