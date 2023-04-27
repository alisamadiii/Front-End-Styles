import { Inter } from "next/font/google";
import "vercel-toast/css";
import { createToast } from "vercel-toast";
import Button from "./components/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const success = () => {
    createToast(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      {
        timeout: 3000, // in 3 seconds
        type: "success",
      }
    );
  };

  const warning = () => {
    createToast(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      {
        timeout: 3000, // in 3 seconds
        type: "warning",
      }
    );
  };

  const error = () => {
    createToast(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      {
        timeout: 3000, // in 3 seconds
        type: "error",
      }
    );
  };

  const dark = () => {
    createToast(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      {
        timeout: 3000, // in 3 seconds
        type: "dark",
      }
    );
  };

  const actionCancel = () => {
    createToast(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      {
        action: {
          text: "Undo",
          callback(toast) {
            toast.destroy();
          },
        },
        cancel: "Cancel",
      }
    );
  };

  return (
    <main className={`${inter.className}`}>
      <h1 className="py-24 text-5xl font-black text-center">Vercel Toast</h1>
      <div className="flex items-center justify-center h-[20vh] gap-4 ">
        <Button onClick={success}>Success</Button>
        <Button onClick={warning}>Warning</Button>
        <Button onClick={error}>Error</Button>
        <Button onClick={dark}>Dark</Button>
        <Button onClick={actionCancel}>Action + Cancel </Button>
      </div>
    </main>
  );
}
