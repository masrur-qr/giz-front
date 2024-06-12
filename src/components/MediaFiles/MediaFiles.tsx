"use client";

import { useEffect, useState } from "react";

export default function MediaFiles() {
  const [media, setMedia] = useState<any>([]);

  useEffect(() => {
    console.log(media);
  }, [media]);

  return (
    <section className="mt-[50px]">
      <h1 className="text-[24px] font-bold mb-2 uppercase">
        media files (png, jpg)
      </h1>
      <p className="text-[#737171]">max size 2 mb</p>
      <label
        htmlFor="media"
        className="bg-[#C30F08] text-white px-6 py-3 rounded-md mt-3 inline-block cursor-pointer"
      >
        Choose photo
      </label>
      <input
        onChange={(e) => setMedia(e.target.files)}
        type="file"
        id="media"
        className="opacity-0"
        multiple
      />
    </section>
  );
}
