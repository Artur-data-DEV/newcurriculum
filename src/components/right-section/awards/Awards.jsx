import { certificateItems } from "@/data/certificatesData";
import Link from "next/link";
import { motion } from "framer-motion";

const Awards = () => {
  return (
    <motion.section
      className="text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="text-3xl font-bold text-purple-700 mb-6">
        Certificates
      </div>
      {certificateItems.map((item, index) => (
        <motion.div
          key={index}
          className="grid grid-cols-2 gap-4 border-b-2 border-gray-200 py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="text-left">
            <p className="text-lg font-bold text-purple-700 mb-2">
              {item.companyName}
            </p>
            <p className="text-base text-gray-600">{item.timePeriod}</p>
          </div>
          <div className="text-left">
            <p className="text-lg font-bold text-purple-700 mb-2">
              {item.name}
            </p>
            <p className="text-base text-gray-600">
              <Link
                href={item.credentialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Credential Link
              </Link>
            </p>
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Awards;
