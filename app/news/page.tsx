// app/news/page.tsx
import Link from "next/link";
import { NEWS_ITEMS } from "../../data/newsData";

export default function NewsListPage() {
  return (
    <div className="pb-40">
      <header className="mt-10 mb-12">
        <h2 className="text-[10px] tracking-[0.4em] text-[#ccc] uppercase mb-4">News</h2>
        <h1 className="text-2xl font-light tracking-tight text-[#1a1a1a]">뉴스</h1>
      </header>

      <div className="space-y-8">
        {NEWS_ITEMS.map((item) => (
          <Link key={item.id} href={`/news/${item.id}`} className="group block">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-[15px] font-medium text-[#1a1a1a] group-hover:underline underline-offset-4 decoration-1">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#777] font-light line-clamp-2 mt-2 whitespace-pre-line">
                  {item.description}
                </p>
              </div>

              <div className="text-[11px] text-[#bbb] text-right shrink-0">
                <div className="uppercase">{item.date}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
