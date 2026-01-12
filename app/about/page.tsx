// app/about/page.tsx
import { ABOUT_CONTENT } from "../../data/aboutData";

export default function AboutPage() {
  return (
    <div className="pb-40 pt-10">
      {/* 텍스트와 이미지 모두 왼쪽 정렬 유지 (max-w-2xl은 가독성을 위해 유지하되 mx-auto는 제거) */}
      <div className="max-w-2xl">
        
        {/* 1. Hero Message */}
        <section className="mb-24">
          <h2 className="text-[10px] tracking-[0.4em] text-[#ccc] uppercase mb-8 font-medium">About</h2>
          <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#1a1a1a] mb-12">
            {ABOUT_CONTENT.vision.ko} <br />
            <span className="text-[#eee] italic font-serif"> {ABOUT_CONTENT.vision.en}</span>
          </h1>
          <p className="text-[15px] leading-[2.1] text-[#555] font-light break-keep italic">
            {ABOUT_CONTENT.vision.description}
          </p>
        </section>

        {/* 2. Main Image: 본문 폭과 동일하게 배치 */}
        <section className="mb-24">
          <div className="aspect-[16/9] overflow-hidden bg-[#f9f9f9]">
            <img 
              src={ABOUT_CONTENT.images.main} 
              alt="Theon House Space" 
              className="w-full h-full object-cover grayscale-[0.1]"
            />
          </div>
          <p className="mt-4 text-[9px] text-[#ccc] tracking-widest uppercase italic">Theon House Office / Archive</p>
        </section>

        {/* 3. Service Description */}
        <section className="mb-32">
          <div className="space-y-16">
            {ABOUT_CONTENT.services.map((service, index) => (
              <div key={index}>
                <h3 className="text-[12px] tracking-[0.2em] font-bold uppercase text-[#333] mb-4 flex items-center gap-3">
                  <span className="text-[9px] text-[#ccc] font-normal">0{index + 1}</span>
                  {service.title}
                </h3>
                <p className="text-[14px] leading-[1.8] text-[#666] font-light pl-7">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Company Profile Table */}
        <section className="pt-20 border-t border-[#eee]">
          <h2 className="text-[10px] tracking-[0.4em] text-[#ccc] uppercase mb-12">Profile</h2>
          <div className="border-t border-[#333] mb-20">
            {ABOUT_CONTENT.profile.map((item, index) => (
              <div 
                key={index} 
                className="flex border-b border-[#eee] py-5 text-[11px] tracking-tight"
              >
                <div className="w-1/3 text-[#999] uppercase font-medium">{item.label}</div>
                <div className="w-2/3 text-[#333] font-light">{item.value}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}