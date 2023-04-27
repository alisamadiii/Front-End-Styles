import { Inter } from "next/font/google";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

import { LINKS } from "./contents/Data";
import Link from "next/link";

import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineLink } from "react-icons/ai";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <main
      className={`${inter.className} flex justify-center items-center h-screen gap-8`}
    >
      <div>
        <motion.button
          layout="position"
          className="flex items-center justify-between p-2 bg-white rounded-md shadow-lg w-52"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Menu</span>
          <IoIosArrowDown
            className={`duration-200 ${isOpen && "rotate-180"}`}
          />
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <div className="flex flex-col p-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl w-52">
              {LINKS.map((link) => {
                const Icon = link.icon;

                return (
                  <motion.div
                    key={link.link}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: link.link * 0.05 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 p-2 hover:bg-[#f2f2f2] duration-150 rounded-md"
                    >
                      <Icon />
                      <span className="text-sm">{link.name}</span>
                      <AiOutlineLink className="ml-auto " />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </AnimatePresence>
      </div>

      <div>
        <motion.button
          layout="position"
          className="flex items-center justify-between p-2 bg-white rounded-md shadow-lg w-52"
          onClick={() => setIsOpen2(!isOpen2)}
        >
          <span>Menu</span>
          <IoIosArrowDown
            className={`duration-200 ${isOpen2 && "rotate-180"}`}
          />
        </motion.button>
        <AnimatePresence>
          {isOpen2 && (
            <div className="absolute flex flex-col p-2 mt-2 bg-white rounded-md shadow-xl w-52">
              {LINKS.map((link) => {
                const Icon = link.icon;

                return (
                  <motion.div
                    key={link.link}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: link.link * 0.05 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 p-2 hover:bg-[#f2f2f2] duration-150 rounded-md"
                    >
                      <Icon />
                      <span className="text-sm">{link.name}</span>
                      <AiOutlineLink className="ml-auto " />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </AnimatePresence>
      </div>

      <div>
        <motion.button
          layout="position"
          className="flex items-center justify-between p-2 bg-white rounded-md shadow-lg w-52"
          onClick={() => setIsOpen3(!isOpen3)}
        >
          <span>Menu</span>
          <IoIosArrowDown
            className={`duration-200 ${isOpen3 && "rotate-180"}`}
          />
        </motion.button>
        <AnimatePresence>
          {isOpen3 && (
            <motion.div
              initial={{ height: 0, padding: 0 }}
              animate={{ height: "auto", padding: 8 }}
              exit={{ height: 0, padding: 0 }}
              className="flex flex-col px-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl w-52"
            >
              {LINKS.map((link) => {
                const Icon = link.icon;

                return (
                  <motion.div
                    key={link.link}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: link.link * 0.05 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 p-2 hover:bg-[#f2f2f2] duration-150 rounded-md"
                    >
                      <Icon />
                      <span className="text-sm">{link.name}</span>
                      <AiOutlineLink className="ml-auto " />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
