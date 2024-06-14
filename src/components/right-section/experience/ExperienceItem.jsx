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
      className="grid grid-cols-3 pb-6 text-black border-b border-gray-300"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center col-span-1">
        <div className="bg-blue-500 text-white rounded-full p-2 mr-4 flex items-center justify-center">
          <FaMapMarker size={16} />
        </div>
        <div>
          <p className="text-lg font-bold">{companyName}</p>
          <p className="text-gray-600">{location}</p>
        </div>
      </div>
      <div className="flex flex-col col-span-2">
        <p className="text-lg font-bold">{position}</p>
        <p className="text-gray-600">{timePeriod}</p>
        <p className="text-sm mt-2">{description}</p>
        <p className="text-sm mt-auto text-gray-500">{type}</p>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
