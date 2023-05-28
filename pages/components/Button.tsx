import React from "react";

type Props = {
  value: string;
  position: string;
  setPosition: (a: string) => void;
};

export default function Button({ value, position, setPosition }: Props) {
  return (
    <button
      onClick={() => setPosition(value)}
      className={`px-4 py-2 text-black duration-200 bg-white border rounded-md shadow-sm ${
        position == value ? "!bg-primary text-white" : "scale-[0.9] opacity-75"
      }`}
    >
      {value}
    </button>
  );
}
