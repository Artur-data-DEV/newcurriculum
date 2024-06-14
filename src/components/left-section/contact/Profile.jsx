"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="w-full border-b-1 justify-center text-center self-center block">
      <div className="flex flex-col gap-1 space-y-5  py-3">
        <Image
          className="w-[200px] h-[200px] rounded-full border-8 self-center"
          src="/Foto_Curriculo.jpg"
          alt="Profile image"
          width={300}
          height={300}
        />
        <motion.p
          className="text-3xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Artur Campos
        </motion.p>
        <motion.p
          className="text-2xl text-slate-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Fullstack Developer <br />& Data Enginner 
        </motion.p>
      </div>
    </div>
  );
};

export default Profile;
