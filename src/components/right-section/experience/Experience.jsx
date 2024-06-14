import ExperienceItem from "@/components/right-section/Experience/ExperienceItem";
import { experienceData } from "@/data/experienceData";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="space-y-2 mt-8">
      <motion.h1
        className="text-blue-900 font-mono text-4xl uppercase font-semibold tracking-wide pl-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Experience
      </motion.h1>
      {experienceData.map((experience, index) => (
        <div key={index} className={"p-5"}>
          <ExperienceItem
            companyName={experience.companyName}
            location={experience.location}
            timePeriod={experience.timePeriod}
            position={experience.position}
            type={experience.type}
            description={experience.description}
          />
          {index !== experienceData.length - 1 && <hr />}
        </div>
      ))}
    </section>
  );
};

export default Experience;
