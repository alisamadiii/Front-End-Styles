import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { EachFAQTypes } from "../content/FAQ";

type Props = {
  faq: EachFAQTypes;
};

import { MdKeyboardArrowDown } from "react-icons/md";

export default function Faq({ faq }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { question, answer } = faq;

  return (
    <div
      className={`w-full max-w-[600px] mx-auto rounded-lg p-4 duration-150 ${
        isOpen ? "bg-[#4B5EFC]" : "bg-[#2E2F38]"
      }`}
    >
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1>{question}</h1>
        <MdKeyboardArrowDown
          className={`text-2xl duration-200 ${isOpen && "rotate-180"}`}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.p
            initial={{ height: 0, marginTop: 0, opacity: 0 }}
            animate={{ height: "auto", marginTop: 12, opacity: 0.8 }}
            exit={{ height: 0, marginTop: 0, opacity: 0 }}
            className="overflow-hidden text-sm"
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
