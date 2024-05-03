"use client";
import { Input } from "@/shadcn/ui/input";
import { useState } from "react";

export default function Links() {
  const [boxChildren, setBoxChildren] = useState<any>([]);
  return (
    <section className="mb-10">
      <h1 className="text-[24px] font-bold mb-2">Links</h1>
      <div className="flex items-center gap-5 mb-5">
        <Input
          className="flex-grow-[1]"
          type="text"
          placeholder="Введите название новости..."
        />
        <button className="bg-[#C30F08] text-white px-5 py-2 rounded-md">
          ADD
        </button>
      </div>
      {boxChildren}
      <button
        onClick={() =>
          setBoxChildren([
            ...boxChildren,
            <div key={Date.now()} className="flex items-center gap-5 mb-5">
              <Input
                className="flex-grow-[1]"
                type="text"
                placeholder="Введите название новости..."
              />
              <button className="bg-[#C30F08] text-white px-5 py-2 rounded-md">
                ADD
              </button>
            </div>,
          ])
        }
        className="bg-[#C30F08] text-white h-[50px] w-[50px] flex items-center justify-center rounded-lg text-[20px] mt-5 hover:bg-[#c30e08d8]"
      >
        +
      </button>
    </section>
  );
}
