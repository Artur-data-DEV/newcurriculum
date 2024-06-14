"use client"
import { motion } from "framer-motion";
import { links } from "@/data/linksData";
import ContactItem from "@/components/left-section/contact/ContactItem";

const Contact = () => (
  <div className="contact-info px-1">
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.1 }}
      className="text-xl text-slate-200"
    >
      Contact Information
    </motion.h2>
    <motion.ul
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
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
    </motion.ul>
  </div>
);

export default Contact;
