import React, { Fragment } from "react";
import { PanInfo, motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  setIsOpen: (a: boolean) => void;
};

export default function Information({ title, description, setIsOpen }: Props) {
  return (
    <Fragment>
      <div className="fixed inset-0 items-center justify-center hidden md:flex isolate">
        {/* Background color for closing the Information 👇 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-secondary/50 -z-10"
          onClick={() => setIsOpen(false)}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          className="w-full bg-primary max-w-[500px] p-4 rounded-md shadow-2xl overflow-hidden"
        >
          <h2 className="mb-1 text-2xl font-bold tracking-tight">{title}</h2>
          <p>{description}</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <button className="py-2 duration-200 border rounded-md hover:bg-white hover:text-black">
              Button 1
            </button>
            <button className="py-2 duration-200 border rounded-md hover:bg-white hover:text-black">
              Button 2
            </button>
          </div>
        </motion.div>
      </div>
      {/* This Component will be displayed in Small Screens 👇 */}
      <Small_Information
        title={title}
        description={description}
        setIsOpen={setIsOpen}
      />
    </Fragment>
  );
}

export const Small_Information = ({ title, description, setIsOpen }: Props) => {
  const closingTheInformation = (event: any, info: PanInfo) => {
    const y = info.offset.y;
    y > 70 ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center md:hidden isolate">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-secondary/50 -z-10"
        onClick={() => setIsOpen(false)}
      />
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        exit={{ y: 1000 }}
        drag="y"
        dragConstraints={{ bottom: 0, top: 0 }}
        onDragEnd={closingTheInformation}
        transition={{ type: "tween" }}
        className="absolute bottom-0 left-0 w-full p-4 bg-primary rounded-t-xl"
      >
        <div className="w-12 h-1 mx-auto mb-4 rounded-full bg-white/50"></div>
        <h2 className="mb-1 text-2xl font-bold tracking-tight">{title}</h2>
        <p>{description}</p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <button className="py-2 duration-200 border rounded-md hover:bg-white hover:text-black">
            Button 1
          </button>
          <button className="py-2 duration-200 border rounded-md hover:bg-white hover:text-black">
            Button 2
          </button>
        </div>
      </motion.div>
    </div>
  );
};
