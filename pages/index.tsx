import { Inter } from "next/font/google";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./components/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [squares, setSquares] = useState(3);
  const [flexDirection, setflexDirection] = useState("flex-row");
  const [justifyContent, setJustifyContent] = useState("justify-start");
  const [alignItems, setAlignItems] = useState("items-start");
  const [flexGrow, setFlexGrow] = useState("grow-0");

  return (
    <main
      className={`${inter.className} flex flex-col items-center gap-8 px-4 mt-24 pb-12`}
    >
      <div className="absolute h-24 -translate-y-10 bg-primary/30 w-96 -z-50 blur-3xl"></div>
      <div>
        <input
          type="number"
          value={squares}
          min={3}
          max={10}
          onChange={(e) => setSquares(Number(e.target.value))}
          className="p-1 px-3 duration-200 border-2 rounded-md outline-none focus:shadow-input"
        />
      </div>
      <div
        className={`w-full max-w-[900px] mx-auto border-2 h-56 rounded-lg bg-white shadow-md overflow-hidden flex ${flexDirection} ${justifyContent} ${alignItems} gap-2`}
      >
        <AnimatePresence initial={false}>
          {[...Array(squares)].map((_, index) => (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{ y: -30, opacity: 0, transition: { duration: 0.2 } }}
              transition={{ duration: 0.1, type: "spring", damping: 15 }}
              layout
              className={`w-12 h-12 bg-primary rounded-xl ${flexGrow}`}
              key={index}
            />
          ))}
        </AnimatePresence>
      </div>
      <div className="flex flex-wrap justify-center w-full gap-4 py-4 bg-gray-500/10 rounded-t-xl">
        <Button value="grow" position={flexGrow} setPosition={setFlexGrow} />
        <Button value="grow-0" position={flexGrow} setPosition={setFlexGrow} />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <Button
          value="flex-row"
          position={flexDirection}
          setPosition={setflexDirection}
        />
        <Button
          value="flex-col"
          position={flexDirection}
          setPosition={setflexDirection}
        />
      </div>
      <div className="flex flex-wrap justify-center w-full gap-4 py-4 bg-gray-500/10">
        <Button
          value="justify-start"
          position={justifyContent}
          setPosition={setJustifyContent}
        />
        <Button
          value="justify-end"
          position={justifyContent}
          setPosition={setJustifyContent}
        />
        <Button
          value="justify-between"
          position={justifyContent}
          setPosition={setJustifyContent}
        />
        <Button
          value="justify-center"
          position={justifyContent}
          setPosition={setJustifyContent}
        />
        <Button
          value="justify-evenly"
          position={justifyContent}
          setPosition={setJustifyContent}
        />
        <Button
          value="justify-around"
          position={justifyContent}
          setPosition={setJustifyContent}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <Button
          value="items-start"
          position={alignItems}
          setPosition={setAlignItems}
        />
        <Button
          value="items-end"
          position={alignItems}
          setPosition={setAlignItems}
        />
        <Button
          value="items-center"
          position={alignItems}
          setPosition={setAlignItems}
        />
      </div>
    </main>
  );
}
