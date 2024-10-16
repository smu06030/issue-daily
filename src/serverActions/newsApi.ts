'use server';

import { NewsInfoType } from '@/types/newsInfo';

// Top3 뉴스 API
export const getTopNewsData = async (): Promise<NewsInfoType> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_NEWSDATA_URL}/api/1/latest?country=kr&language=ko&category=top&apikey=${process.env.NEXT_PUBLIC_NEWSDATA_API_KEY}`,
    {
      next: {
        revalidate: 86400
      }
    }
  );
  const data: NewsInfoType = await res.json();

  return data;
};

// 카테고리 뉴스 API
export const getCategoryData = async (category: string): Promise<NewsInfoType> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_NEWSDATA_URL}/api/1/latest?country=kr&language=ko&category=${category}&apikey=${process.env.NEXT_PUBLIC_NEWSDATA_API_KEY}`,
    {
      next: {
        revalidate: 86400
      }
    }
  );
  const data: NewsInfoType = await res.json();

  return data;
};

// Next Page 뉴스 API
export const getNextNewsData = async ({
  category,
  nextPage
}: {
  category: string;
  nextPage: string;
}): Promise<NewsInfoType> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_NEWSDATA_URL}/api/1/latest?country=kr&language=ko&category=${category}&apikey=${process.env.NEXT_PUBLIC_NEWSDATA_API_KEY}&page=${nextPage}`,
    {
      next: {
        revalidate: 86400
      }
    }
  );
  const data: NewsInfoType = await res.json();

  return data;
};
