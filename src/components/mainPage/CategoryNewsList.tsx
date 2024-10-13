'use client';

import { getCategoryData } from '@/serverActions/newsApi';
import { NewsResultsType } from '@/types/newsInfo';
import { categoryArr } from '@/utils/category/categoryArr';
import { useEffect, useState } from 'react';
import CategoryNewsCard from './CategoryNewsCard';

const CategoryNewsList = () => {
  const [categoryNews, setCategoryNews] = useState<NewsResultsType[]>([]);
  const [category, setCategory] = useState<string>('top');

  useEffect(() => {
    getCategoryNewsApi();
  }, [category]);

  const getCategoryNewsApi = async () => {
    const res = await getCategoryData(category);
    const data: NewsResultsType[] = res.results;
    setCategoryNews(data);
  };

  const onClickCategoryBtn = (categoryName: string) => {
    if (category === categoryName) {
      return;
    }
    setCategory(categoryName);
  };

  return (
    <div className="font-pretendard m-5">
      <p className="text-[40px] font-black">News List</p>
      <div className="flex gap-10 mb-5">
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
    </div>
  );
};

export default CategoryNewsList;
