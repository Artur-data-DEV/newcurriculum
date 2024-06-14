"use client";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { animate, motion } from "framer-motion";
const fakeData = new Promise((resolve) => setTimeout(() => resolve(), 7000));

const Toast = ({ props, children }) => {
  const notify = () =>
    toast.promise(fakeData, {
      pending: {
        render: () => "Loading...",
        icon: "🟢",
      },
      success: {
        render: () => "Curriculum Downloaded!",
        icon: "🟢",
      },
      error: {
        render: () => "Oops... something was gone wrong...",
        icon: "🔴",
      },
      animate: Bounce,
    });

  return (
    <>
      <motion.button
        onClick={notify}
        {...props}
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="text-white"
      >
        {children}
        <ToastContainer position="top-left" />
      </motion.button>
    </>
  );
};

export default Toast;
