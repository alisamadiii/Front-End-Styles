import { Inter } from "next/font/google";
import { FAQ } from "./content/FAQ";
import Each_Faq from "./components/Each_Faq";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className} flex justify-center items-center h-screen`}
    >
      <div className="flex flex-col w-full gap-4">
        {FAQ.map((f) => (
          <Each_Faq key={f.id} faq={f} />
        ))}
      </div>
    </main>
  );
}
