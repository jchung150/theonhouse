import { FAQ_DATA } from "../../data/faqData";

export default function FaqPage() {
  return (
    <div className="pb-40 pt-10">
      <div className="max-w-2xl">
        <header className="mb-24">
          <h2 className="text-[10px] tracking-[0.4em] text-[#ccc] uppercase mb-8 font-medium">FAQ</h2>
          <h1 className="text-2xl font-light tracking-tight text-[#1a1a1a]">자주하는 질문</h1>
        </header>

        <div className="space-y-32">
          {FAQ_DATA.map((group, groupIdx) => (
            <section key={groupIdx}>
              {/* 카테고리 제목 */}
              <h3 className="text-[10px] tracking-[0.2em] font-bold uppercase text-[#333] mb-10 pb-2 border-b border-[#333] inline-block">
                {group.category}
              </h3>
              
              <div className="space-y-16">
                {group.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group">
                    {/* 질문 영역 */}
                    <div className="flex gap-4 mb-4">
                      <span className="text-[10px] text-[#ccc] font-medium pt-1 shrink-0">Q.</span>
                      <h4 className="text-[14px] font-medium text-[#1a1a1a] leading-snug break-keep">
                        {item.q}
                      </h4>
                    </div>
                    
                    {/* 답변 영역 */}
                    <div className="flex gap-4">
                      <span className="text-[10px] text-[#ccc] font-medium pt-1 shrink-0">A.</span>
                      <p className="text-[13px] leading-[1.8] text-[#666] font-light break-keep">
                        {item.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* 하단 추가 문의 안내 */}
        <section className="mt-40 pt-12 border-t border-[#eee]">
          <p className="text-[12px] text-[#999] font-light mb-6">
            원하시는 답변을 찾지 못하셨나요? <br />
            아래 메일로 문의해 주시면 영업일 기준 3일 이내에 답변드리겠습니다.
          </p>
          <a href="mailto:contact@theonhouse.com" className="text-[13px] border-b border-[#333] pb-0.5">
            contact@theonhouse.com
          </a>
        </section>
      </div>
    </div>
  );
}