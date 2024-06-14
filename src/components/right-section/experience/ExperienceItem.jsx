"use client"
import { motion } from "framer-motion";
import { FaMapMarker } from "react-icons/fa";

const ExperienceItem = ({
  companyName,
  location,
  timePeriod,
  position,
  type,
  description,
}) => {
  return (
    <motion.div
      className="experience-contents"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="exp-left">
        <p className="exp-company-name">{companyName}</p>
        <p>
          <FaMapMarker /> {location}
        </p>
        <br />
        <p className="exp-time-period">{timePeriod}</p>
      </div>
      <div className="exp-right">
        <p className="exp-position">{position}</p>
        <p className="exp-type">{type}</p>
        <p className="exp-desc">{description}</p>
      </div>
    </motion.div>
  );
};
export default ExperienceItem;