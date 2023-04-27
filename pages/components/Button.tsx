import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export default function Button({ children, ...otherProps }: Props) {
  return (
    <button
      {...otherProps}
      className="px-4 py-2 font-medium duration-150 rounded-md bg-primary active:scale-95 hover:bg-primary/80"
    >
      {children}
    </button>
  );
}
