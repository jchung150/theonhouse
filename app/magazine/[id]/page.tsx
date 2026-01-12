// app/magazine/[id]/page.tsx
import { MAGAZINE_POSTS } from "../../../data/magazineData";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function MagazineDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = MAGAZINE_POSTS.find((p) => p.id === parseInt(id));

  if (!post) return notFound();

  return (
    // 전체를 감싸는 패딩 박스 (헤더/푸터와 거리 두기 위함)
    <div className="py-20 px-4 md:px-0">
      
      {/* D-BROS 스타일의 회색 프레임 시작 */}
      <article className="max-w-4xl mx-auto bg-[#f9f9f9] p-8 md:p-20">
        
        {/* 1. Cover Image */}
        <div className="mb-12">
          <div className="aspect-[16/10] overflow-hidden">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover grayscale-[0.05]" 
            />
          </div>
        </div>

        {/* 2. Title & Date Info */}
        <div className="mb-20">
          <h1 className="text-2xl md:text-3xl font-medium tracking-tight leading-tight text-[#1a1a1a] mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 border-b border-[#eee] pb-6">
            <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-[#999]">
              {post.category}
            </span>
            <span className="text-[10px] text-[#ccc] font-light">{post.date}</span>
          </div>
        </div>

        {/* 3. Sections Content */}
        <div className="max-w-3xl mx-auto"> {/* 텍스트 가독성을 위해 내부 폭을 한 번 더 제한 */}
          <div className="space-y-16">
            {post.sections.map((section, index) => (
              <div key={index}>
                {section.type === 'text' ? (
                  <p className="text-[15px] leading-[2.0] text-[#444] font-light break-keep">
                    {section.value}
                  </p>
                ) : (
                  <div className="my-16"> 
                    <img 
                      src={section.value} 
                      alt={`section-${index}`} 
                      className="w-full h-auto" 
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 4. Footer Link inside the frame */}
          <footer className="mt-32 pt-10 border-t border-[#eee]">
            <Link href="/magazine" className="text-[10px] tracking-[0.4em] text-[#999] uppercase hover:text-black transition-all">
              ← Back to Archive
            </Link>
          </footer>
        </div>

      </article>
      {/* 회색 프레임 끝 */}

    </div>
  );
}