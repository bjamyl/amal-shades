import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isVisible, onClose, children }: ModalProps) {
  const dropIn = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 30,
        stiffness: 600,
      },
    },
    exit: { y: "-100vh", opacity: 0 },
  };

  if (!isVisible) return null;
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).id === "background") onClose();
  };
  return (
    <motion.div
      id="background"
      onClick={handleClose}
      className="fixed z-50 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="w-[95%] xl:w-[70%] flex flex-col">
        <button
          onClick={() => onClose()}
          className="text-white xl:text-4xl text-2xl place-self-end"
        >
          X
        </button>
        <motion.div
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-white rounded-md"
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}
