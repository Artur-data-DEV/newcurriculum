"use client";
import { educationItems } from "@/data/educationData";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.section
      className="space-y-10 pb-8 border-t-2 border-b-2 border-slate-100 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-blue-900 font-mono text-4xl uppercase font-semibold tracking-wide px-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Education
      </motion.h1>
      <div className="px-5 space-y-5">
        {educationItems.map((item, index) => (
          <motion.div
            key={index}
            className="grid grid-cols-2 text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
          >
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">{item.schoolName}</h2>
              <p className="text-sm">{item.timePeriod}</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-indigo-800">{item.degree}</p>
              <p className="text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
