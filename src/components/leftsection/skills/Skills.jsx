import SkillItem from "@/components/leftsection/skills/SkillItem.jsx"; // Adjust the path as needed
import { skillsData } from "@/data/skillsData"; // Adjust the path as needed

const Skills = () => {
  return (
    <div>
      {skillsData.map((category, index) => (
        <SkillItem
          key={index}
          title={category.title}
          skills={category.skills}
          delay={category.delay}
        />
      ))}
    </div>
  );
};

export default Skills;
