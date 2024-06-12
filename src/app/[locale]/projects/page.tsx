"use client";
import ProjectsFilter from "@/components/ProjectsFilter/ProjectsFilter";
import ProjectsList from "@/components/ProjectsList/ProjectsList";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/shadcn/ui/input";
import { IProject } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [data, setData] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNews, setFilteredNews] = useState<IProject[]>([]);

  useEffect(() => {
    filterNews();
  }, [searchQuery, data]);

  const filterNews = () => {
    if (!searchQuery) {
      setFilteredNews(data);
      return;
    }

    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = data.filter(
      (project: IProject) =>
        project.English.Name.toLowerCase().includes(lowerCaseQuery) ||
        project.English.Description.toLowerCase().includes(lowerCaseQuery) ||
        project.Tajik.Name.toLowerCase().includes(lowerCaseQuery) ||
        project.Tajik.Description.toLowerCase().includes(lowerCaseQuery) ||
        project.Russian.Name.toLowerCase().includes(lowerCaseQuery) ||
        project.Russian.Description.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredNews(filtered);
  };

  async function getProjects() {
    try {
      const response = await fetch("http://127.0.0.1:9595/get/project");
      const data = await response.json();
      setData(data);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProjects();
  }, []);
  return (
    <main>
      <div className="wrapper__page">
        <h3 className="text-center text-[#C30F08] text-[34px] font-bold uppercase my-[50px]">
          {/* {t("title")} */}
          Projects
        </h3>
        <section>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <label
                htmlFor=""
                className="text-[#666666] font-semibold text-[18px]"
              >
                Search
              </label>
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="projects__input"
                type="text"
                placeholder="Search..."
              />
            </div>
            <div className="flex items-center gap-5">
              <label
                htmlFor=""
                className="text-[#666666] font-semibold text-[18px]"
              >
                Category
              </label>
              <Select>
                <SelectTrigger className="w-[300px]">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Categories</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-5">
              <label
                htmlFor=""
                className="text-[#666666] font-semibold text-[18px]"
              >
                District
              </label>
              <Select>
                <SelectTrigger className="w-[300px]">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>District</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <button className="border border-[#666666] text-[#666666] uppercase px-[35px] py-[7px] rounded-full hover:bg-[#666666] hover:text-[#fff] transition-all active:bg-[#414040]">
              search
            </button>
          </div>
        </section>
        {/* <ProjectsFilter /> */}
        <section className="my-10 flex items-center gap-10 flex-wrap">
          {filteredNews.length > 0 ? (
            filteredNews.map((news: IProject) => {
              return (
                <div
                  key={news.Id}
                  className="w-[438px] h-[321px] border relative flex flex-col justify-end items-start rounded-[13px] px-[30px] py-[20px] news__card"
                >
                  <img
                    src={`http://127.0.0.1:9595/get/static?path=Banners/${news.BannerUrl}`}
                    alt={news.BannerUrl}
                    width={438}
                    height={321}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-[13px]"
                  />
                  <div className="min-w-full relative z-[3] text-white">
                    <Link
                      href={`/projects/${news.Id}`}
                      className="text-[22px] font-bold line-clamp-2"
                    >
                      {news.English?.Name}
                    </Link>
                    <div className="min-w-full flex items-center justify-between mt-3">
                      <p>{news.Category}</p>
                      <p>25.07.2024</p>
                    </div>
                  </div>
                  <div className="news__gradient"></div>
                </div>
              );
            })
          ) : (
            <div>Cannot find any projects</div>
          )}
        </section>
        {/* <ProjectsList /> */}
      </div>
    </main>
  );
}
