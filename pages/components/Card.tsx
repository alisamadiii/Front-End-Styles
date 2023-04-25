import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";

import Information from "./Information"; // Components
import { EachDataType } from "../contents/Data"; // Types

type Props = {
  data: EachDataType;
};

export default function Card({ data }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { id, title, description, image } = data;

  return (
    <div key={id} className="w-full max-w-[400px] bg-secondary p-4 rounded-xl">
      <Image
        src={image}
        width={700}
        height={400}
        alt="Earth & Sun"
        className="rounded-xl"
      />
      <h1 className="mt-2 mb-1 text-2xl font-bold tracking-tight">{title}</h1>
      <p className="text-sm truncate opacity-80">{description}</p>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 mt-4 text-sm font-medium duration-200 rounded-md bg-primary hover:bg-primary/80 active:scale-95"
      >
        Know More
      </button>

      <AnimatePresence>
        {isOpen && (
          <Information
            title={title}
            description={description}
            setIsOpen={setIsOpen}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
