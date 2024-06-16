import LeftSection from "@/components/leftsection/LeftSection";
import RightSection from "@/components/rightsection/RightSection";
import Toast from "@/components/leftsection/contact/Toast";
import { motion } from "framer-motion";
import { usePDF } from "react-to-pdf";
import { useState, useRef } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import useToastNotification from "@/components/leftsection/hooks/useToastNotification";

export default function Resume() {
  const [isLoading, setIsLoading] = useState(false);
  const { notifySuccess, notifyError } = useToastNotification();
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  const { targetRef, toPDF } = usePDF({
    filename: "Artur_Dev-CV.pdf",
    page: { margin: 3 },
  });

  const downloadResume = () => {
    setIsLoading(true);

    try {
      toPDF();
      setIsLoading(false);
      notifySuccess("Curriculum Downloaded!");
    } catch (error) {
      setIsLoading(false);
      notifyError("Failed to generate PDF. " + error);
    }
  };

  return (
    <div className="w-[30cm] h-full m-auto">
      <div className="sm:fixed z-50 sm:bottom-5 sm:left-3 top-5 sticky bottom-0 left-0 ">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-red-500/90 hover:bg-red-500 py-3 rounded-full cursor-pointer relative w-44 text-center"
          onClick={downloadResume}
        >
          {isLoading ? (
            <motion.div
              className="flex items-center justify-center"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <AiOutlineLoading3Quarters size={32} />
            </motion.div>
          ) : (
            <span>Download Curriculum</span>
          )}
        </motion.div>
      </div>

      <motion.main
        className="min-h-screen w-full my-8 mx-auto grid grid-cols-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        ref={targetRef}
      >
        <LeftSection
          ref={leftSectionRef}
          className={"bg-slate-500 text-white"}
        />
        <RightSection ref={rightSectionRef} className={"bg-white"} />
      </motion.main>
      <Toast />
    </div>
  );
}
