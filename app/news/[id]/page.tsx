// app/news/[id]/page.tsx
import { NEWS_ITEMS } from "../../../data/newsData";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = NEWS_ITEMS.find((n) => n.id === parseInt(id));

  if (!item) return notFound();

  return (
    // 전체 레이아웃의 여백 확보
    <div className="py-20 px-4 md:px-0">
      
      {/* 매거진과 동일한 옅은 회색 프레임 적용 */}
      <article className="max-w-4xl mx-auto bg-[#f9f9f9] p-8 md:p-20">
        
        {/* 헤더 섹션: 카테고리 태그와 날짜 */}
        <header className="mb-12 border-b border-[#eee] pb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[9px] tracking-[0.3em] font-bold uppercase text-[#999] border-b border-[#999] pb-0.5">
              News
            </span>
            <span className="text-[10px] text-[#ccc] font-light">{item.date}</span>
          </div>
          <h1 className="text-xl md:text-2xl font-medium tracking-tight text-[#1a1a1a] leading-tight">
            {item.title}
          </h1>
        </header>

        {/* 본문 섹션: 가독성을 위해 내부 폭 한 번 더 제한 */}
        <div className="max-w-2xl">
          <section className="text-[14px] leading-[2.0] text-[#555] whitespace-pre-line font-light break-keep">
            {item.description}
          </section>

          {/* 하단 뒤로가기 버튼 */}
          <footer className="mt-32 pt-10 border-t border-[#eee]">
            <Link 
              href="/" 
              className="text-[10px] tracking-[0.4em] text-[#999] uppercase hover:text-black transition-colors"
            >
              ← Back to List
            </Link>
          </footer>
        </div>

      </article>
    </div>
  );
}