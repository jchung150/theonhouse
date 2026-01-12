// data/newsData.ts

export interface NewsItem {
  id: number;
  date: string;
  title: string;
  description: string; // 상세 페이지용 내용
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    date: "2026.1.11",
    title: "Theon House 공식 웹사이트 오픈",
    description: "테온하우스의 새로운 디지털 공간에 오신 것을 환영합니다. \n이곳에서는 우리가 어떤 생각으로 공간과 프로젝트를 만들고 있는지,그 과정과 결과를 함께 소개합니다.",
  },
];