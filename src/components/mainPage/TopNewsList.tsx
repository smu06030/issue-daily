'use client';

import TopNewsCard from '@/components/mainPage/TopNewsCard';
import { getTopNewsData } from '@/serverActions/newsApi';
import { NewsResultsType } from '@/types/newsInfo';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

const TopNewsList = () => {
  const [topNews, setTopNews] = useState<NewsResultsType[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    getTopNewsApi();
  }, []);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  const getTopNewsApi = async () => {
    const res = await getTopNewsData();
    const data: NewsResultsType[] = res.results;
    setTopNews(data);
  };

  return (
    <div className="font-pretendard">
      <p className="text-[40px] m-5 font-black">Top News</p>
      <button className="embla__prev z-50" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next  z-50" onClick={scrollNext}>
        Next
      </button>
      <div className="embla overflow-hidden h-[400px] w-[80%] mx-auto">
        <div className="embla__viewport h-full w-full" ref={emblaRef}>
          <div className="embla__container flex h-full">
            {topNews.slice(0, 3).map((post) => {
              return <TopNewsCard key={post.article_id} post={post} />;
            })}
          </div>
        </div>
      </div>
      <div>
        <p className="text-[40px] m-5 font-black">News List</p>
      </div>
    </div>
  );
};

export default TopNewsList;
