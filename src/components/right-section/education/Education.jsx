"use client";
import { educationItems } from "@/data/educationData";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className="py-10 space-y-10 border-t-2 border-slate-100 ">
      <motion.h1
        className="text-blue-900 font-mono text-4xl uppercase font-semibold tracking-wide pl-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        Education
      </motion.h1>
      <div className={"p-5"} >
        {educationItems.map((item, index) => (
          <div key={index} className="grid grid-cols-2 pb-2 text-black">
            <div className="flex flex-col">
              <h2 className="capitalize text-xl">{item.schoolName}</h2>
              <p className="capitalize font-semibold">{item.timePeriod}</p>
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
