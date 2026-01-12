import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header"; // Header 임포트

export const metadata: Metadata = {
  title: "THEON HOUSE",
  description: "Design Studio & Calendar Fair Seoul",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="antialiased bg-white text-[#333]">
        <div className="max-w-[1400px] mx-auto px-10 md:px-20 lg:px-32">
          
          {/* 분리한 Header 컴포넌트 사용 */}
          <Header />

          <main className="min-h-screen">
            {children}
          </main>
          
          <footer className="mt-60 py-12 border-t border-[#eee]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <div className="space-y-4">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase">Theon House</p>
                <p className="text-[9px] text-[#999] tracking-widest leading-loose">
                  Designing the Passage of Time <br />
                  Based in Seoul, Korea.
                </p>
              </div>
              
              <div className="flex gap-10 text-[9px] tracking-[0.2em] text-[#999] uppercase">
                <a href="https://instagram.com" target="_blank" className="hover:text-black transition-colors">Instagram</a>
                <a href="mailto:contact@theonhouse.com" className="hover:text-black transition-colors">Contact</a>
                <span className="text-[#ccc]">© Theon House</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}