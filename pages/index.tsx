import { Inter } from "next/font/google";

import Card from "./components/Card"; // Components
import { DATA } from "./contents/Data"; // Array

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} flex justify-center py-12`}>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {DATA.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </main>
  );
}
