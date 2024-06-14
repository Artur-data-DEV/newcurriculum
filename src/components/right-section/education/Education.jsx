"use client"
import { educationItems } from "@/data/educationData";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className="education">
      <motion.div
        className="right-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        Education
      </motion.div>
      <div>
        {educationItems.map((item, index) => (
          <div key={index} className="education-contents">
            <div className="education-left">
              <p className="education-school-name">{item.schoolName}</p>
              <p className="education-time-period">{item.timePeriod}</p>
            </div>
            <div className="education-right">
              <p className="exp-type">{item.degree}</p>
              <p className="education-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
