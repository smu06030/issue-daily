'use client';

import { getCategoryData, getNextNewsData } from '@/serverActions/newsApi';
import { NewsResultsType } from '@/types/newsInfo';
import { categoryArr } from '@/utils/category/categoryArr';
import { useEffect, useState } from 'react';
import CategoryNewsCard from './CategoryNewsCard';

const CategoryNewsList = () => {
  const [categoryNews, setCategoryNews] = useState<NewsResultsType[]>([]);
  const [category, setCategory] = useState<string>('top');
  const [nextPage, setNextPage] = useState<string[]>([]);

  useEffect(() => {
    getCategoryNewsApi();
  }, [category]);

  const getCategoryNewsApi = async () => {
    const res = await getCategoryData(category);
    if (!nextPage.includes(res.nextPage)) {
      setNextPage([...nextPage, res.nextPage]);
    }
    const data: NewsResultsType[] = res.results;
    setCategoryNews(data);
  };

  const onClickCategoryBtn = (categoryName: string) => {
    if (category === categoryName) {
      return;
    }
    setCategory(categoryName);
    setNextPage([]);
  };

  const onClickpaginationBtn = async (index: number) => {
    if (index === 0) {
      getCategoryNewsApi();
      return;
    }
    if (index === 1) {
      const res = await getNextNewsData({ category, nextPage: nextPage[0] });
      if (!nextPage.includes(res.nextPage)) {
        setNextPage([...nextPage, res.nextPage]);
      }
      const data: NewsResultsType[] = res.results;
      setCategoryNews(data);
    }
    if (index === 2) {
      const res = await getNextNewsData({ category, nextPage: nextPage[1] });
      const data: NewsResultsType[] = res.results;
      setCategoryNews(data);
    }
  };

  return (
    <div className="m-5 font-pretendard">
      <p className="text-[40px] font-black">News List</p>
      <div className="mb-5 flex gap-10">
        {categoryArr.map((el, index) => {
          return (
            <div key={index} className="text-[20px]">
              <button onClick={() => onClickCategoryBtn(el)}>{el}</button>
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-5">
        {categoryNews.map((el) => {
          return <CategoryNewsCard key={el.article_id} el={el} />;
        })}
      </div>
      <div className="mt-5 flex justify-center gap-5">
        {Array(3)
          .fill(1)
          .map((el, index) => {
            return (
              <div key={index + 1}>
                <button onClick={() => onClickpaginationBtn(index)} className="border-2 border-solid border-black p-2">
                  {el + index}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CategoryNewsList;
