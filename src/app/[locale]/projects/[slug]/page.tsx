"use client";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import Partners from "@/components/Partners/Partners";
import { ICategory, projects_categories } from "@/data/categories";
import { news_data } from "@/data/news";
import { Locale } from "@/i18n.config";
import { INews, IProject } from "@/types";
import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";

export default function EachNews({ params }: { params: { slug: string } }) {
  const [data, setData] = useState([]);
  const [slugNews, setSlugNews] = useState<any>({});

  async function getProject() {
    try {
      const response = await fetch("http://127.0.0.1:9595/get/project");
      const data = await response.json();
      setData(data);
      console.log(data);
      const currentProject: IProject | undefined = data.find(
        (project: IProject) => project.Id === params.slug
      );
      setSlugNews(currentProject);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProject();
  }, []);

  const [currentLanguage, setCurrentLanguage] = useState<Locale>("en");

  useLayoutEffect(() => {
    const storedLang = (localStorage.getItem("lang") as Locale) || "en";
    setCurrentLanguage(storedLang);
  }, []);

  const findCategoty = (category: string | any) => {
    const current_categoty = projects_categories.find(
      (item: ICategory) => item.en.toLowerCase() === category?.toLowerCase()
    );

    return current_categoty;
  };

  return (
    <main>
      <div className="wrapper__page">
        <div className="my-12">
          {/* <Image
            src={slugNews?.BannerUrl}
            alt="currentNews"
            className="w-full h-[450px] object-cover"
          /> */}
          <img
            src={`http://127.0.0.1:9595/get/static?path=Banners/${slugNews?.BannerUrl}`}
            alt="currentNews"
            className="w-full h-[450px] object-cover"
          />
          <div className="flex items-center gap-5 mt-5">
            {/* <p className="px-6 py-3 bg-[#C0C0C0] text-white rounded-[6px]">
              25.07.2024
            </p> */}
            <p className="px-6 py-3 bg-[#C0C0C0] text-white rounded-[6px]">
              {/* {slugNews?.Category} */}
              {currentLanguage == "en"
                ? findCategoty(slugNews?.Category)?.en
                : ""}
              {currentLanguage == "ru"
                ? findCategoty(slugNews?.Category)?.ru
                : ""}
              {currentLanguage == "tj"
                ? findCategoty(slugNews?.Category)?.tj
                : ""}
            </p>
            <p className="px-6 py-3 bg-[#C0C0C0] text-white rounded-[6px]">
              {slugNews?.Location?.District}
              {/* District */}
            </p>
          </div>
          <h1 className="text-[#C30F08] text-[34px] font-bold text-center mt-[100px] mb-[30px]">
            {currentLanguage == "en"
              ? slugNews?.English?.Name
              : slugNews?.Russian?.Name}
          </h1>
          <p>
            {currentLanguage == "en"
              ? slugNews?.English?.Description
              : slugNews?.Russian?.Description}
          </p>
          {/* documents */}
          <h4 className="text-[#8D8D8D] text=[24px] font-bold mt-[74px]">
            DOCUMENTS:
          </h4>
        </div>
        <Partners />
        <ImageCarousel data={slugNews?.MediaFiles} />
      </div>
    </main>
  );
}
