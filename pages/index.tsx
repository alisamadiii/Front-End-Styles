import { useState } from "react";
import { Inter } from "next/font/google";

import { FAQ } from "./content/FAQ";
import Each_Faq from "./components/Each_Faq";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [faqNum, setFaqNum] = useState<number>(1);

  return (
    <main
      className={`${inter.className} flex justify-center items-center h-screen`}
    >
      <div className="flex flex-col w-full gap-4">
        {FAQ.map((f) => (
          <Each_Faq key={f.id} faq={f} faqNum={faqNum} setFaqNum={setFaqNum} />
        ))}
      </div>
    </main>
  );
}
