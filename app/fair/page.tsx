// app/fair/page.tsx
import { FAIR_CONTENT, FAIR_ARCHIVE_IMAGES } from "../../data/fairData";

export default function FairPage() {
  return (
    <div className="max-w-5xl">
      <section className="mt-10 mb-32">
        <h2 className="text-[10px] tracking-[0.4em] text-[#ccc] uppercase mb-16">
          Calendar Fair Seoul
        </h2>
        <h1 className="text-4xl md:text-6xl font-light tracking-[-0.02em] leading-[1.1] mb-20 text-[#1a1a1a]">
          서울 <br />
          캘린더페어
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#eee] pt-12">
          <div className="col-span-2">
            <p className="text-lg leading-relaxed text-[#555] font-light break-keep">
              {FAIR_CONTENT.description}
            </p>
          </div>
          <div className="space-y-10">
            <div>
              <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-3">Period</h4>
              <p className="text-sm font-medium">{FAIR_CONTENT.period}</p>
            </div>
            <div>
              <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-3">Location</h4>
              <p className="text-sm font-medium leading-relaxed">{FAIR_CONTENT.location}</p>
            </div>
            <div>
              <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-3">Contact</h4>
              <a href={`mailto:${FAIR_CONTENT.contactEmail}`} className="text-sm border-b border-black pb-0.5">
                {FAIR_CONTENT.contactEmail}
              </a>
            </div>
            <div>
              <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-3">Online Store</h4>
              <a
                href="https://calendarfairseoul.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium px-4 py-2 border border-black bg-black text-white hover:bg-white hover:text-black transition-colors"
              >
                Online Store
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 아카이브 이미지 섹션 */}
      <section className="mb-40">
        <hr className="mb-20" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {FAIR_ARCHIVE_IMAGES.map((image) => (
             <div key={image.id} className="aspect-[3/4] bg-[#f5f5f5] overflow-hidden group">
               <img 
                src={image.url} 
                alt={image.alt}
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
               />
             </div>
           ))}
        </div>
        <p className="mt-6 text-[10px] text-[#ccc] tracking-widest uppercase">
          Archive: Past Exhibitions
        </p>
      </section>
    </div>
  );
}