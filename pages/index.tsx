import { Inter } from "next/font/google";
import { ChangeEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

import List from "./components/List";

export default function Home() {
  const [inputField, setInputField] = useState("");
  const [todoList, setTodoList] = useState([
    { id: 1, work: "Walking" },
    { id: 2, work: "Reading" },
  ]);

  const randNum = Math.floor(Math.random() * 100000);

  const addingFunction = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputField.length == 0) return;

    setTodoList([{ id: randNum, work: inputField }, ...todoList]);
    setInputField("");
  };

  const deletingFunction = (id: number) => {
    const findingWork = todoList.find((list) => list.id == id);

    if (findingWork) {
      setTodoList(todoList.filter((list) => list.id !== id));
    }

    return;
  };

  return (
    <main
      className={`${inter.className} flex flex-col justify-center items-center h-screen gap-8`}
    >
      <form onSubmit={addingFunction}>
        <input
          type="text"
          className="p-2 duration-200 border-2 rounded-md outline-none w-96 border-primary focus:shadow-input"
          placeholder="add..."
          value={inputField}
          onChange={(e) => setInputField(e.target.value)}
        />
      </form>
      <ul
        className={`relative p-2 space-y-1 bg-white border rounded-md shadow-lg w-96 h-96 ${
          todoList.length < 4 ? "overflow-hidden" : "overflow-y-auto"
        }`}
      >
        {todoList.length !== 0 ? (
          <AnimatePresence initial={false}>
            {todoList.map((list) => (
              <List
                key={list.id}
                list={list}
                deletingFunction={deletingFunction}
              />
            ))}
          </AnimatePresence>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center w-full h-full text-3xl font-bold bg-white"
            >
              Keep Adding ☝️
            </motion.div>
          </AnimatePresence>
        )}
      </ul>
    </main>
  );
}
