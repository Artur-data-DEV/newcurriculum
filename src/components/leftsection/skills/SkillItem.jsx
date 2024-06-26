import { motion } from "framer-motion";
import SkillIcon from "@/components/leftsection/skills/SkillIcon.jsx";

const SkillItems = ({ title, delay, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: delay }}
      className="flex flex-col mx-4  border-solid border-t-2 border-white"
    >
      <div className="pb-4 space-y-4">
        <h4 className="text-xl font-bold text">{title}</h4>
        <div className="grid grid-cols-4">
          {skills.map((skill, index) => (
            <SkillIcon
              key={index}
              icon={skill.icon}
              alt={skill.alt}
              title={skill.title}
              width={skill.width}
              height={skill.height}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillItems;
