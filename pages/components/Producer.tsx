import Image from "next/image";
import React from "react";
import { Variants, motion } from "framer-motion";

type Props = {};

const LinkEntry: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
}; // Framer Motion animation

export default function Producer({}: Props) {
  return (
    <motion.a
      variants={LinkEntry}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, type: "spring" }}
      href="https://twitter.com/Ali_Developer05"
      target="_blank"
      className="fixed left-0 flex items-center gap-4 px-4 py-2 pr-12 text-black bg-white rounded-r-full top-4 hover:bg-[#00acee] hover:text-white duration-200"
    >
      <Image
        src="https://pbs.twimg.com/profile_images/1598932468492476416/tTkHaLF7_400x400.jpg"
        width={100}
        height={100}
        alt=""
        className="w-12 h-12 rounded-full"
      />
      <div>
        <h1 className="font-medium leading-3">Ali Reza</h1>
        <small className="opacity-80">@Ali_Developer05</small>
      </div>
    </motion.a>
  );
}
