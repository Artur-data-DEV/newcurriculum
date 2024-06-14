import LeftSection from "@/components/left-section/LeftSection";
import RightSection from "@/components/right-section/RightSection";
import Toast from "@/components/left-section/contact/Toast";
import { motion } from "framer-motion";
import { usePDF } from "react-to-pdf";
import { useState, useRef } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Resume() {
  const [isLoading, setIsLoading] = useState(false);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  const { targetRef, toPDF } = usePDF({
    filename: "Artur_Dev-CV.pdf",
    page: { margin: 3 },
  });

  const downloadResume = async () => {
    setIsLoading(true);
    console.log(leftSectionRef, rightSectionRef);

    const originalColors = {
      leftBg: leftSectionRef.current?.style.backgroundColor,
      rightBg: rightSectionRef.current?.style.backgroundColor,
      leftColor: leftSectionRef.current?.style.color,
      rightColor: rightSectionRef.current?.style.color,
    };

    if (leftSectionRef.current && rightSectionRef.current) {
      leftSectionRef.current.style.backgroundColor = "white";
      rightSectionRef.current.style.backgroundColor = "white";
      leftSectionRef.current.style.color = "black";
      rightSectionRef.current.style.color = "black";
    }
    toPDF();
    if (leftSectionRef.current && rightSectionRef.current) {
      leftSectionRef.current.style.backgroundColor = originalColors.leftBg;
      rightSectionRef.current.style.backgroundColor = originalColors.rightBg;
      leftSectionRef.current.style.color = originalColors.leftColor;
      rightSectionRef.current.style.color = originalColors.rightColor;
    }
    setIsLoading(false);
  };
  return (
    <div className="w-[30cm] h-full m-auto">
      <div
        className={`${
          isLoading && "left-14"
        } fixed left-3 bottom-5 opacity-75 hover:opacity-100`}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-red-500 p-3 rounded-full cursor-pointer relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={downloadResume}
        >
          {isLoading && (
            <motion.div
              className="flex items-center justify-center"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ width: "100%", height: "100%" }}
            >
              <AiOutlineLoading3Quarters />
            </motion.div>
          )}
          <Toast>Download Curriculum</Toast>
        </motion.div>
      </div>
      <motion.main
        className="resume-contents"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        ref={targetRef}
      >
        <LeftSection ref={leftSectionRef} />
        <RightSection ref={rightSectionRef} />
      </motion.main>
    </div>
  );
}
