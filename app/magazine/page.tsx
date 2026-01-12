// app/magazine/page.tsx
import { MAGAZINE_POSTS } from "../../data/magazineData";
import Link from "next/link";

export default function MagazinePage() {
  return (
    <div className="pb-40">
      <header className="mt-10 mb-16">
        <h2 className="text-[10px] tracking-[0.4em] text-[#ccc] uppercase mb-4">Magazine</h2>
        <h1 className="text-2xl font-light tracking-tight text-[#1a1a1a]">매거진</h1>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
        {MAGAZINE_POSTS.map((post) => (
          <Link key={post.id} href={`/magazine/${post.id}`} className="group block">
            <div className="aspect-square overflow-hidden bg-[#f9f9f9] mb-4">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-[13px] leading-snug font-medium text-[#333] group-hover:underline underline-offset-4 decoration-1">
                {post.title}
              </h3>
              {/* D-Bros 스타일의 요약문 섹션 */}
              <p className="text-[11px] leading-relaxed text-[#777] font-light line-clamp-3">
                {post.excerpt}
              </p>
              <div className="text-[10px] text-[#bbb] tracking-tighter font-light flex items-center gap-2">
                <span className="uppercase">{post.category}</span>
                <span className="text-[#eee]">|</span>
                <span>{post.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}