'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Calendar Fair Seoul', href: '/fair' },
    { name: 'Magazine', href: '/magazine' },
    { name: 'About', href: '/about' },
    { name: 'Faq', href: '/faq' },
  ];

  return (
    <header className="relative z-[100] bg-white">
      {/* 상단 메인 바 */}
      <div className="py-8 flex justify-between items-center border-b border-[#eee] md:border-none">
        {/* 로고 */}
        <h1 className="text-xl font-bold tracking-[0.2em]">
          <Link href="/" onClick={() => setIsOpen(false)}>THEON HOUSE</Link>
        </h1>

        {/* 데스크톱 메뉴: .slice(1)을 제거하여 모든 항목이 보이게 수정했습니다. */}
        <nav className="hidden md:flex gap-12 text-[10px] tracking-[0.2em] font-medium text-[#999]">
          {menuItems.map((item) => ( 
            <Link key={item.name} href={item.href} className="hover:text-black transition-colors uppercase">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="ml-2 text-[#333]"
          >
            {isOpen ? <X size={22} strokeWidth={1.2} /> : <Menu size={22} strokeWidth={1.2} />}
          </button>
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      <div className={`
        absolute top-full left-0 w-full bg-white transition-all duration-300 ease-in-out overflow-hidden
        ${isOpen ? 'max-h-[500px] border-b border-[#eee]' : 'max-h-0'}
      `}>
        <nav className="flex flex-col">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-6 text-[11px] tracking-[0.2em] text-[#333] uppercase border-b border-[#eee] last:border-none hover:bg-gray-50 active:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}