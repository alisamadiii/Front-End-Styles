import React, { useState } from "react";
import { motion } from "framer-motion";

import { MdDeleteOutline, MdDoneAll } from "react-icons/md";

type Props = {
  list: { id: number; work: string };
  deletingFunction: (a: number) => void;
};

export default function List({ list, deletingFunction }: Props) {
  const [completed, setCompleted] = useState<boolean>(false);

  return (
    <motion.li
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: "auto",
        opacity: 1,
        transition: { type: "spring", bounce: 0.5 },
      }}
      layout="position"
      className={`overflow-hidden ${completed && "animate-list"}`}
    >
      <div
        className={`flex items-center justify-between p-2 rounded-md ${
          completed
            ? "bg-primary text-white hover:bg-primary/90"
            : "hover:bg-gray-100"
        }`}
      >
        <p>{list.work}</p>
        <div className="flex items-center gap-1">
          <p onClick={() => setCompleted(!completed)}>
            <MdDoneAll />
          </p>
          <p onClick={() => deletingFunction(list.id)}>
            <MdDeleteOutline />
          </p>
        </div>
      </div>
    </motion.li>
  );
}
