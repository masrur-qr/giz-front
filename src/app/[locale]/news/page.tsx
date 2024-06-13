"use client";
import NewsFilter from "@/components/NewsFilter/NewsFilter";
import NewsList from "@/components/NewsList/NewsList";
import { INews } from "@/types";
import Link from "next/link";

import { Calendar } from "@/shadcn/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/shadcn/ui/button";
import { cn } from "@/lib/utils";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useEffect, useLayoutEffect, useState } from "react";

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
import { Locale } from "@/i18n.config";
import { ICategory, news_categories } from "@/data/categories";

// import { useTranslations } from "next-intl";
// import { unstable_setRequestLocale } from "next-intl/server";

export default function NewsPage() {
  const [currentLanguage, setCurrentLanguage] = useState<Locale>("en");

  useLayoutEffect(() => {
    const storedLang = (localStorage.getItem("lang") as Locale) || "en";
    setCurrentLanguage(storedLang);
  }, []);

  // unstable_setRequestLocale(locale);
  // const t = useTranslations("News");
  const [data, setData] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNews, setFilteredNews] = useState<INews[]>([]);

  const [fromDate, setFromDate] = useState<Date | any>(null);
  const [toDate, setToDate] = useState<Date | any>(null);

  useEffect(() => {
    filterNews();
  }, [searchQuery, fromDate, toDate, data]);

  const filterNews = () => {
    let filtered = data;

    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (news: INews) =>
          news.Category.toLowerCase().includes(lowerCaseQuery) ||
          news.English.Name.toLowerCase().includes(lowerCaseQuery) ||
          news.English.Description.toLowerCase().includes(lowerCaseQuery) ||
          news.Tajik.Name.toLowerCase().includes(lowerCaseQuery) ||
          news.Tajik.Description.toLowerCase().includes(lowerCaseQuery) ||
          news.Russian.Name.toLowerCase().includes(lowerCaseQuery) ||
          news.Russian.Description.toLowerCase().includes(lowerCaseQuery)
      );
    }

    if (fromDate) {
      filtered = filtered.filter(
        (news: INews) => new Date(news.Date) >= fromDate
      );
    }

    if (toDate) {
      filtered = filtered.filter((news) => new Date(news.Date) <= toDate);
    }

    setFilteredNews(filtered);
  };

  async function getNews() {
    try {
      const response = await fetch("http://127.0.0.1:9595/get/news");
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

  const findCategoty = (category: string) => {
    const current_categoty = news_categories.find(
      (item: ICategory) =>
        item.en.toLowerCase() === category.toLowerCase()
    );

    return current_categoty;
  };

  return (
    <main>
      <div className="wrapper__page">
        <h3 className="text-center text-[#C30F08] text-[34px] font-bold uppercase my-[50px]">
          News
        </h3>
        {/* <NewsFilter filteredNews={filteredNews} setFilteredNews={setFilteredNews} data={data} setData={setData} /> */}
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
                className="news__input"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="flex items-center gap-5">
              <label
                htmlFor=""
                className="text-[#666666] font-semibold text-[18px]"
              >
                From
              </label>
              <div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[180px] justify-start text-left font-normal",
                        !fromDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {fromDate ? (
                        format(fromDate, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={fromDate}
                      onSelect={setFromDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <label
                htmlFor=""
                className="text-[#666666] font-semibold text-[18px]"
              >
                To
              </label>
              <div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[180px] justify-start text-left font-normal",
                        !toDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {toDate ? (
                        format(toDate, "PPP")
                      ) : (
                        <span>Pick a Date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={toDate}
                      onSelect={setToDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <label
                htmlFor=""
                className="text-[#666666] font-semibold text-[18px]"
              >
                Category
              </label>
              <Select>
                <SelectTrigger className="w-[180px]">
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
            <button className="border border-[#666666] text-[#666666] uppercase px-[35px] py-[7px] rounded-full hover:bg-[#666666] hover:text-[#fff] transition-all active:bg-[#414040]">
              search
            </button>
          </div>
        </section>
        {/* <NewsList data={data} setData={setData} filteredNews={filteredNews}/> */}
        <section className="my-10 flex items-center gap-10 flex-wrap">
          {filteredNews.length > 0 ? (
            filteredNews.map((news: INews) => {
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
                      href={`/news/${news.Id}`}
                      className="text-[22px] font-bold line-clamp-2"
                    >
                      {news.English.Name}
                    </Link>
                    <div className="min-w-full flex items-center justify-between mt-3">
                      {/* <p>{news.Category}</p> */}
                      <p>
                        {currentLanguage == "en"
                          ? findCategoty(news.Category)?.en
                          : ""}
                        {currentLanguage == "ru"
                          ? findCategoty(news.Category)?.ru
                          : ""}
                        {currentLanguage == "tj"
                          ? findCategoty(news.Category)?.tj
                          : ""}
                      </p>
                      <p>25.07.2024</p>
                    </div>
                  </div>
                  <div className="news__gradient"></div>
                </div>
              );
            })
          ) : (
            <div>Cannot find any news</div>
          )}
        </section>
      </div>
    </main>
  );
}
