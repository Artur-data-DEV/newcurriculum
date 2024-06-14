import SkillItem from "@/components/left-section/skills/SkillItem"; // Adjust the path as needed
import { skillsData } from "@/data/skillsData"; // Adjust the path as needed

const Skills = () => {
  return (
    <div className="skills">
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
