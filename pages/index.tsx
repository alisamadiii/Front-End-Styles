import { Inter } from "next/font/google";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

import {
  AiFillHome,
  AiOutlineFolderView,
  AiFillHighlight,
} from "react-icons/ai";
import { BsViewList } from "react-icons/bs";
import { HiViewGrid } from "react-icons/hi";

const INITIAL_VALUE = [
  {
    id: 1,
    icon: AiFillHome,
  },
  {
    id: 2,
    icon: BsViewList,
  },
  {
    id: 3,
    icon: HiViewGrid,
  },
  {
    id: 4,
    icon: AiOutlineFolderView,
  },
  {
    id: 5,
    icon: AiFillHighlight,
  },
];

export default function Home() {
  const [active, setActive] = useState(1);

  return (
    <main
      className={`${inter.className} flex flex-col items-center gap-8 px-4 mt-24 pb-12`}
    >
      <div className="absolute h-24 -translate-y-10 bg-primary/30 w-96 -z-50 blur-3xl"></div>
      <nav className="fixed top-0 left-0 flex flex-col items-center w-16 h-full py-4 pl-2 text-2xl text-white bg-primary">
        {INITIAL_VALUE.map((value) => {
          const Icon = value.icon;
          return (
            <div
              key={value.id}
              className={`relative isolate cursor-pointer w-full h-12 flex items-center justify-center ${
                active == value.id ? "text-primary delay-200" : ""
              }`}
              onClick={() => setActive(value.id)}
            >
              <Icon />
              {active == value.id && (
                <motion.div
                  layoutId="nav-links"
                  className="absolute inset-0 bg-white rounded-l-lg -z-10"
                >
                  <motion.div
                    transition={{ duration: 2 }}
                    className="relative w-full h-2 -translate-y-full bg-white before:absolute before:inset-0 before:bg-primary before:rounded-br-lg"
                  />
                  <motion.div className="absolute bottom-0 w-full h-2 translate-y-full bg-white before:absolute before:inset-0 before:bg-primary before:rounded-tr-lg" />
                </motion.div>
              )}
            </div>
          );
        })}
      </nav>
    </main>
  );
}
