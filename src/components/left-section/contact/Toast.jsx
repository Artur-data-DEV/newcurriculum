"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Toast = ({ props, children }) => {
  const notify = () =>
    toast(
      "Thank you for supporting my career and for giving me an opportunity to introduce myself!"
    );

  return (
    <>
      <motion.button
        onClick={notify}
        {...props}
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        {children}
      </motion.button>
      <ToastContainer />
    </>
  );
};

export default Toast;
