import { certificateItems } from "@/data/certificatesData";
import Link from "next/link";
import { motion } from "framer-motion";

const Awards = () => {
  return (
    <motion.section
      className="text-left pb-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <h1 className="text-3xl font-semibold text-purple-700 text-left p-5">
        CERTIFICATES
      </h1>
      {certificateItems.map((item, index) => (
        <motion.div
          key={index}
          className="grid grid-cols-2 gap-y-2 border-b-2 border-gray-200 py-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="flex flex-col justify-center px-4">
            <p className="text-lg font-bold text-purple-700">{item.companyName}</p>
            <p className="text-base text-gray-600">{item.timePeriod}</p>
          </div>
          <div className="flex flex-col justify-center px-4">
            <p className="text-lg font-bold text-purple-700">{item.name}</p>
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
