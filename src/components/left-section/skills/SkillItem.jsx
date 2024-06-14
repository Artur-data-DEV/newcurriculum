import { motion } from "framer-motion";
import SkillIcon from "@/components/left-section/skills/SkillIcon";

const SkillItems = ({ title, delay, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: delay }}
      className="flex flex-col"
    >
      <div>
        <h4>{title}</h4>
        <div className="flex-row flex">
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
