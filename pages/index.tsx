import { Inter } from "next/font/google";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className} flex flex-col items-center gap-8 px-4 mt-24 pb-12`}
    >
      <section className="flex w-full max-w-[500px] gap-1 rounded-xl overflow-hidden">
        <div className="group relative flex-1 h-96 hover:flex-[3] duration-200">
          <Image
            src="https://images.unsplash.com/photo-1603582853461-e8fcdd95575d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            width={300}
            height={400}
            alt=""
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 flex flex-col justify-end w-full p-3 overflow-hidden text-white duration-200 translate-y-full h-1/2 bg-gradient-to-b from-transparent to-black group-hover:translate-y-0 group-hover:delay-200">
            <h2 className="font-bold">Lorem Ipsum</h2>
            <p className="text-sm opacity-80">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto dolore ipsum commodi at explicabo dicta?
            </p>
          </div>
        </div>
        <div className="flex-1 h-96 hover:flex-[3] duration-200">
          <Image
            src="https://images.unsplash.com/photo-1657061681431-293af17cdddd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            width={300}
            height={400}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1 h-96 hover:flex-[3] duration-200">
          <Image
            src="https://images.unsplash.com/photo-1661778002849-8873d291ffbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            width={300}
            height={400}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1 h-96 hover:flex-[3] duration-200">
          <Image
            src="https://images.unsplash.com/photo-1609354338579-3b21838d0cf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            width={300}
            height={400}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </section>
    </main>
  );
}
