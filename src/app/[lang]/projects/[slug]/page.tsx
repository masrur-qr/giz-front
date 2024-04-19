import Partners from "@/components/Partners/Partners";
import { news_data } from "@/data/news";
import { INews } from "@/types";
import Image from "next/image";

export default function EachNews({ params }: { params: { slug: string } }) {
  const currentNews: INews | undefined = news_data.find(
    (news: INews) => news.id === params.slug
  );
  return (
    <main>
      <div className="wrapper__page">
        <div className="my-12">
          <Image
            src={currentNews?.bannerUrl}
            alt="currentNews"
            className="w-full h-[450px] object-cover"
          />
          <div className="flex items-center gap-5 mt-5">
            <p className="px-6 py-3 bg-[#C0C0C0] text-white rounded-[6px]">
              25.07.2024
            </p>
            <p className="px-6 py-3 bg-[#C0C0C0] text-white rounded-[6px]">
              {currentNews?.category}
            </p>
            <p className="px-6 py-3 bg-[#C0C0C0] text-white rounded-[6px]">
              {/* {currentNews?.location.district} */}
              District
            </p>
          </div>
          <h1 className="text-[#C30F08] text-[34px] font-bold text-center mt-[100px] mb-[30px]">
            {currentNews?.english.name}
          </h1>
          <p>{currentNews?.english.description}</p>
          {/* documents */}
          <h4 className="text-[#8D8D8D] text=[24px] font-bold mt-[74px]">
            DOCUMENTS:
          </h4>
        </div>
        <Partners />
      </div>
    </main>
  );
}
