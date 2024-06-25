import Link from "next/link";

import "./admin.css";
import NewsTable from "@/components/NewsTable/NewsTable";

export default function AdminNews() {
  return (
    <main className="bg-[#D3D3D3]">
      <div className="wrapper__page project__page">
        <aside className="bg-white pl-[80px] pt-[80px]">
          <h3>
            <Link
              className="text-[#7B7B7B] text-[25px] font-bold mb-5 inline-block"
              href={"/admin-projects"}
            >
              Projects
            </Link>
          </h3>
          <h3>
            <Link
              className="text-[#C30F08] text-[25px] font-bold"
              href={"/admin-news"}
            >
              News
            </Link>
          </h3>
        </aside>
        <div className="mt-10">
          <div className="flex justify-end mb-10">
            <Link
              className="bg-[#C30F08] text-white px-5 py-3 uppercase font-semibold text-[14px]"
              href={"/add-news"}
            >
              ADD News
            </Link>
          </div>
          <NewsTable />
          {/* table */}
        </div>
      </div>
    </main>
  );
}
