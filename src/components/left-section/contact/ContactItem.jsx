"use client";
import { motion } from "framer-motion";
import LinksIcon from "./LinksIcon";

const ContactItem = ({ href, icon: IconComponent, text, delay, width }) => (
  <motion.li
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className={"px-5 py-1 hover:text-slate-200"}
  >
    <LinksIcon
      width={width}
      icon={IconComponent}
      alt={text}
      title={text}
      href={href}
    />
  </motion.li>
);

export default ContactItem;
