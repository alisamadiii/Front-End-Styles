import React, { Fragment } from "react";
import { PanInfo, motion } from "framer-motion";

type Props = {
  description: string;
  setIsOpen: (a: boolean) => void;
};

export default function Information({ description, setIsOpen }: Props) {
  return (
    <Fragment>
      <div className="fixed inset-0 items-center justify-center hidden md:flex isolate">
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
          {description}
        </motion.div>
      </div>
      <Small_Information description={description} setIsOpen={setIsOpen} />
    </Fragment>
  );
}

export const Small_Information = ({ description, setIsOpen }: Props) => {
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
        {description}
      </motion.div>
    </div>
  );
};
