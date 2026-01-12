// data/magazineData.ts

export interface MagazineSection {
  type: 'text' | 'image';
  value: string;
}

export interface MagazinePost {
  id: number;
  category: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  sections: MagazineSection[];
}

export const MAGAZINE_POSTS: MagazinePost[] = [
  // --- 기존 데이터 4개 ---
  {
    id: 1,
    category: "Interview",
    title: "시간을 디자인하는 사람들",
    date: "2026.01.05",
    excerpt: "2026 서울캘린더페어에 참여하는 작가들의 작업실을 방문했습니다. 그들이 종이 위에 그려낸 1년의 무게와 시간에 대한 각자의 해석을 인터뷰를 통해 소개합니다.",
    coverImage: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format&fit=crop",
    sections: [
      { type: 'text', value: "달력은 단순히 숫자의 나열이 아닙니다. 우리가 만난 작가들은 각자의 방식으로 시간을 해석하고 있었습니다. (본문 내용 중략...)" },
      { type: 'image', value: "https://images.unsplash.com/photo-1506784919141-177b7ec8ee93?q=80&w=1200" },
      { type: 'text', value: "이들이 만든 결과물은 오는 9월 서울캘린더페어에서 직접 확인하실 수 있습니다." }
    ]
  },
  {
    id: 2,
    category: "Making",
    title: "홍대 팝업 스토어 구축기",
    date: "2025.12.20",
    excerpt: "비어있던 공간이 사람들의 온기로 채워지기까지. 테온하우스가 잉여 공간을 관리하며 가장 중요하게 생각하는 가치는 '순환'입니다.",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    sections: [
      { type: 'text', value: "이번 팝업 스토어의 컨셉은 'Time Layer'였습니다. 낡은 벽면의 질감을 그대로 살리고..." },
      { type: 'image', value: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200" }
    ]
  },
  {
    id: 3,
    category: "Philosophy",
    title: "왜 다시 종이 달력인가?",
    date: "2025.11.30",
    excerpt: "스마트폰 알람이 일상을 지배하는 시대에도 우리는 여전히 종이 달력을 넘깁니다. 손끝으로 만져지는 시간의 질감이 우리에게 주는 위안에 대하여.",
    coverImage: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop",
    sections: [
      { type: 'text', value: "디지털은 편리하지만 휘발됩니다. 반면 종이 달력은 물리적인 공간을 점유하며 우리의 일상에 스며듭니다." }
    ]
  },
  {
    id: 4,
    category: "Event",
    title: "2025 페어 현장 스케치",
    date: "2025.10.15",
    excerpt: "수많은 방문객과 함께했던 지난 페어의 뜨거웠던 현장을 기록합니다. 다양한 브랜드 부스와 이벤트, 그리고 사람들의 표정들.",
    coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
    sections: [
      { type: 'text', value: "오픈 첫날부터 많은 분들이 찾아주셨습니다." },
      { type: 'image', value: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?q=80&w=1200" }
    ]
  },
  // --- 추가된 데이터 4개 ---
  {
    id: 5,
    category: "Product Story",
    title: "Theon's Signature: 여백의 미학 2026",
    date: "2025.09.01",
    excerpt: "테온하우스가 직접 디자인한 2026년 시그니처 캘린더를 소개합니다. 덜어냄으로써 채워지는 공간의 가치에 집중했습니다.",
    coverImage: "https://images.unsplash.com/photo-1506784919141-177b7ec8ee93?q=80&w=800&auto=format&fit=crop",
    sections: [
      { type: 'text', value: "우리는 숫자를 가장 아름답게 보여줄 수 있는 폰트를 찾기 위해 수백 번의 테스트를 거쳤습니다. 종이는 독일에서 수입한 친환경 비목재지를 사용했습니다." },
      { type: 'image', value: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=1200" },
      { type: 'text', value: "벽에 걸리는 순간, 단순한 달력이 아닌 하나의 오브제가 되기를 바랍니다." }
    ]
  },
  {
    id: 6,
    category: "Inspiration",
    title: "계절의 색을 수집하다",
    date: "2025.08.20",
    excerpt: "디자이너의 영감 노트: 테온하우스 디자인 팀이 계절이 바뀔 때마다 영감을 받는 자연의 색채 조합을 공유합니다.",
    coverImage: "https://images.unsplash.com/photo-1490750967868-88dd44867c80?q=80&w=800&auto=format&fit=crop",
    sections: [
      { type: 'text', value: "이번 가을 시즌 컬러 팔레트는 마른 잎사귀의 베이지와 깊은 밤하늘의 네이비에서 영감을 받았습니다." },
      { type: 'image', value: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=1200" }
    ]
  },
  {
    id: 7,
    category: "News",
    title: "해외 배송 서비스 오픈 안내",
    date: "2025.07.15",
    excerpt: "이제 전 세계 어디서든 테온하우스의 제품을 만나보실 수 있습니다. 글로벌 배송 시작과 관련된 자세한 사항을 안내해 드립니다.",
    coverImage: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=800&auto=format&fit=crop",
    sections: [
      { type: 'text', value: "많은 해외 고객님들의 요청에 힘입어 EMS 및 DHL 배송 서비스를 시작합니다. 영문/일문 사이트에서도 동일하게 주문 가능합니다." }
    ]
  },
  {
    id: 8,
    category: "Culture",
    title: "홍대 앞, 걷기 좋은 디자인 스팟 5",
    date: "2025.06.10",
    excerpt: "서울캘린더페어가 열리는 홍대 인근. 페어 관람 후 들러보기 좋은 감각적인 디자인 서점과 카페를 추천합니다.",
    coverImage: "https://images.unsplash.com/photo-1532667449560-72a95c8d381b?q=80&w=800&auto=format&fit=crop",
    sections: [
      { type: 'text', value: "1. 오브젝트 서교: 다양한 독립 출판물과 디자인 문구를 만날 수 있는 곳입니다. 테온하우스 팝업 공간에서 도보 5분 거리에 위치해 있습니다." },
      { type: 'image', value: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200" }
    ]
  }
];