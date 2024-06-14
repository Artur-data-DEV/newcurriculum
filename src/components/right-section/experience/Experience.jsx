import ExperienceItem from "@/components/right-section/Experience/ExperienceItem";
import { experienceData } from "@/data/experienceData";

const Experience = () => {
  return (
    <section className="experience">
      <br />
      <div className="right-title">Experience</div>
      <br />
      {experienceData.map((experience, index) => (
        <div key={index}>
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
