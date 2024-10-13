'use server';

import { NewsInfoType } from '@/types/newsInfo';

// TopNews List
export const getTopNewsData = async (): Promise<NewsInfoType> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_NEWSDATA_URL}/api/1/latest?country=kr&category=top&apikey=${process.env.NEXT_PUBLIC_NEWSDATA_API_KEY}`
  );
  const data: NewsInfoType = await res.json();

  return data;
};

// Category List
export const getCategoryData = async (category: string): Promise<NewsInfoType> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_NEWSDATA_URL}/api/1/latest?country=kr&category=${category}&apikey=${process.env.NEXT_PUBLIC_NEWSDATA_API_KEY}`
  );
  const data: NewsInfoType = await res.json();

  return data;
};
