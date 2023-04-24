import { Inter } from "next/font/google";
import { useState } from "react";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const LINKS = [
  { id: "home", name: "Home" },
  { id: "view", name: "View" },
  { id: "share", name: "Share" },
  { id: "contact-us-soon", name: "Contact Us Soon" },
];

export default function Home() {
  const [isSelected, setIsSelected] = useState(LINKS[0].id);

  return (
    <main className={inter.className}>
      <div className="flex items-center justify-center h-screen gap-4">
        {LINKS.map((link) => (
          <div
            key={link.id}
            onClick={() => setIsSelected(link.id)}
            className="relative px-4 py-2 cursor-pointer"
          >
            {isSelected == link.id && (
              <motion.div
                layoutId="button"
                className="absolute inset-0 bg-white"
                style={{ borderRadius: "9999px" }}
                transition={{ type: "spring" }}
              />
            )}
            <span className="relative z-10 mix-blend-exclusion">
              {link.name}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
