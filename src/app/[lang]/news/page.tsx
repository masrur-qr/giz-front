import NewsFilter from "@/components/NewsFilter/NewsFilter";
import NewsList from "@/components/NewsList/NewsList";

export default function NewsPage() {
  return (
    <main>
      <div className="wrapper__page">
        <h3 className="text-center text-[#C30F08] text-[34px] font-bold uppercase mb-[50px]">
          News
        </h3>
        <NewsFilter />
        <NewsList />
      </div>
    </main>
  );
}
