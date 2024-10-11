'use server';

import { NewsInfoType } from '@/types/newsInfo';

export const getTopNewsData = async (): Promise<NewsInfoType> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_NEWSDATA_URL}/api/1/latest?country=kr&category=top&apikey=${process.env.NEXT_PUBLIC_NEWSDATA_API_KEY}`
  );
  const data: NewsInfoType = await res.json();

  return data;
};
