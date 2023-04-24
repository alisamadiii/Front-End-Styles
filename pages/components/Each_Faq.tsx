import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { EachFAQTypes } from "../content/FAQ"; // Types

import { MdKeyboardArrowDown } from "react-icons/md"; // Arrow Icon

type Props = {
  faq: EachFAQTypes;
  faqNum: number;
  setFaqNum: (a: number) => void;
};

export default function Faq({ faq, faqNum, setFaqNum }: Props) {
  const { id, question, answer } = faq;

  return (
    <div
      className={`w-full max-w-[600px] mx-auto rounded-lg p-4 duration-150 ${
        faqNum == id ? "bg-[#4B5EFC]" : "bg-[#2E2F38]"
      }`}
    >
      {/* Question + Arrow */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setFaqNum(id)}
      >
        <h1>{question}</h1>
        <MdKeyboardArrowDown
          className={`text-2xl duration-200 ${faqNum == id && "rotate-180"}`}
        />
      </div>
      {/* Answer */}
      <AnimatePresence>
        {faqNum == id && (
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
