"use client";
import { Input } from "@/shadcn/ui/input";
import { useState } from "react";

export default function Links() {
  const [inputs, setInputs] = useState<any>([]);

  const handleAddClick = () => {
    const newKey = Date.now();
    setInputs([...inputs, { key: newKey, value: "" }]);
  };

  const handleInputChange = (event:any, key:any) => {
    const newInputs = inputs.map((input: any) =>
      input.key === key ? { ...input, value: event.target.value } : input
    );
    setInputs(newInputs);
  };

  return (
    <section className="mb-10">
      <h1 className="text-[24px] font-bold mb-2">Links</h1>
      <div className="flex items-center gap-5 mb-5">
        <Input
          className="w-[500px]"
          type="text"
          placeholder="Введите название новости..."
        />
        <button className="bg-[#C30F08] text-white px-5 py-2 rounded-md">
          ADD
        </button>
      </div>
      {inputs.map((input: any) => (
        <div key={input.key} className="flex items-center gap-5 mb-5">
          <Input
            className="w-[500px]"
            type="text"
            placeholder="Введите название новости..."
            value={input.value}
            onChange={(e) => handleInputChange(e, input.key)}
          />
          <button className="bg-[#C30F08] text-white px-5 py-2 rounded-md">
            ADD
          </button>
        </div>
      ))}
      <div>
        <button
          onClick={handleAddClick}
          className="bg-[#C30F08] text-white h-[50px] w-[50px] flex items-center justify-center rounded-lg text-[20px] mt-5 hover:bg-[#c30e08d8]"
        >
          +
        </button>
      </div>
    </section>
  );
}
