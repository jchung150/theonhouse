import { PRODUCTS } from "../data/productData";
import { NEWS_ITEMS } from "../data/newsData";
import Link from "next/link"; // 페이지 이동을 위해 Link 사용

export default function Home() {
  return (
    <div className="pb-20">
      {/* 메인 페이지 전용 뉴스 섹션 */}
      <div className="mb-16">
        <div className="border-t border-[#eee]">
          {NEWS_ITEMS.map((news) => (
            <Link 
              key={news.id} 
              href={`/news/${news.id}`} // 상세 페이지로 이동
              className="border-b border-[#eee] py-3 flex items-center gap-6 group hover:bg-gray-50 transition-colors"
            >
              <span className="text-[9px] tracking-widest font-bold shrink-0 uppercase w-12 ml-2">News</span>
              <span className="text-[10px] text-[#ccc] tracking-tighter shrink-0">{news.date}</span>
              <span className="text-[11px] text-[#666] truncate tracking-tight group-hover:text-black">
                {news.title}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* 제품 갤러리 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
        {PRODUCTS.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="aspect-[3/2] overflow-hidden bg-[#f9f9f9] mb-5">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-[#999] tracking-[0.2em] uppercase">{item.type}</p>
              <h3 className="text-sm font-medium tracking-tight text-[#333]">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}