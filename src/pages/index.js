"use client";
import LeftSection from "@/components/left-section/LeftSection";
import RightSection from "@/components/right-section/RightSection";
import Toast from "@/components/left-section/contact/Toast";
import { motion } from "framer-motion";
import { usePDF } from "react-to-pdf";

export default function Resume() {
  const { targetRef, toPDF } = usePDF({
    filename: "Artur_Dev-CV.pdf",
    page: { margin: 3 },
  });

  const downloadResume = () => {
    toPDF();
  };

  return (
    <>
      <Toast className="bg-red-500">
        <p onClick={downloadResume}>Download Curriculum</p>
      </Toast>
      <motion.main
        className="resume-contents"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        ref={targetRef}
      >
        <LeftSection />
        <RightSection />
      </motion.main>
    </>
  );
}
