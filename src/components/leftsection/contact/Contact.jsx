"use client";
import { motion } from "framer-motion";
import { links } from "@/data/linksData";
import ContactItem from "@/components/leftsection/contact/ContactItem.jsx";

const Contact = () => (
  <div className="text-md border-t-2 m-4 space-y-3 py-1">
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.1 }}
      className="text-xl text-white font-semibold py-2 text-center"
    >
      Contact Information
    </motion.h2>
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className={"space-y-2"}
    >
      {/* Map through the links array */}
      {links.map((link, index) => (
        <ContactItem
          key={index}
          href={link.href}
          icon={link.icon}
          text={link.text}
          width={link.width}
          delay={0.8 + index * 0.2} // Adjust the delay for each link
        />
      ))}
    </motion.div>
  </div>
);

export default Contact;
