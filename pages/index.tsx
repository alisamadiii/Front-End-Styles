import { Inter } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import Information from "./components/Information";
import { DATA } from "./contents/Data";
import { AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <main
      className={`${inter.className} flex justify-center items-center h-screen`}
    >
      {DATA.map((data) => (
        <div
          key={data.id}
          className="w-full max-w-[400px] bg-secondary p-4 rounded-xl"
        >
          <Image
            src={data.image}
            width={700}
            height={400}
            alt="Earth & Sun"
            className="rounded-xl"
          />
          <h1 className="mt-2 mb-1 text-2xl font-bold tracking-tight">
            {data.title}
          </h1>
          <p className="text-sm truncate opacity-80">{data.description}</p>
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 mt-4 text-sm font-medium duration-200 rounded-md bg-primary hover:bg-primary/80 active:scale-95"
          >
            Know More
          </button>

          <AnimatePresence>
            {isOpen && (
              <Information
                description={data.description}
                setIsOpen={setIsOpen}
              />
            )}
          </AnimatePresence>
        </div>
      ))}
    </main>
  );
}
