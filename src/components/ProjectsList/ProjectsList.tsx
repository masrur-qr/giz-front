import { news_data } from "@/data/news";
import { INews } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsList() {
  return (
    <section className="my-10">
      {news_data.map((news: INews) => {
        return (
          <div
            key={news.id}
            className="w-[438px] h-[321px] border relative flex flex-col justify-end items-start rounded-[13px] px-[30px] py-[20px] news__card"
          >
            <Image
              src={news.bannerUrl}
              alt={news.bannerUrl}
              width={438}
              height={321}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-[13px]"
            />
            <div className="relative z-[3] text-white">
              <Link
                href={`/projects/${news.id}`}
                className="text-[22px] font-bold line-clamp-2"
              >
                {news.english.name}
              </Link>
              <div className="flex items-center justify-between mt-3">
                <p>Category</p>
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
