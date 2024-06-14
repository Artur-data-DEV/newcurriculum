"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Toast from "./Toast";

const Profile = () => {
  return (
    <div className="profile">
      <div className="flex flex-col gap-5 space-y-5">
        <Image
          className="profile-image"
          src="/Foto_Curriculo.jpg"
          alt="Profile image"
          width={300}
          height={300}
        />
        <motion.p
          className="name"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Artur Campos
        </motion.p>
        <motion.p
          className="profession"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Fullstack Developer <br />
          Data Enginner
        </motion.p>
      </div>
    </div>
  );
};

export default Profile;
