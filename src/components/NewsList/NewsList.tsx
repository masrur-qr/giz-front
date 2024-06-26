"use client";
import { news_data } from "@/data/news";
import { INews } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NewsList() {
  const [data, setData] = useState([]);

  async function getNews() {
    try {
      const response = await fetch("https://back.aegbao.tj/get/news");
      const data = await response.json();
      setData(data);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getNews();
  }, []);
  return (
    <section className="my-10 flex items-center gap-10 flex-wrap">
      {data.map((news: INews) => {
        return (
          <div
            key={news.Id}
            className="w-[438px] h-[321px] border relative flex flex-col justify-end items-start rounded-[13px] px-[30px] py-[20px] news__card"
          >
            <img
              src={`https://back.aegbao.tj/get/static?path=Banners/${news.banner_url}`}
              alt={news.banner_url}
              width={438}
              height={321}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-[13px]"
            />
            <div className="relative z-[3] text-white">
              <Link
                href={`/news/${news.Id}`}
                className="text-[22px] font-bold line-clamp-2"
              >
                {news.english.name}
              </Link>
              <div className="flex items-center justify-between mt-3">
                <p>{news.category}</p>
                <p>25.07.2024</p>
              </div>
            </div>
            <div className="news__gradient"></div>
          </div>
        );
      })}
    </section>
  );
}
