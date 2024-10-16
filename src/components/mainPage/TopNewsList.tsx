'use client';

import TopNewsCard from '@/components/mainPage/TopNewsCard';
import { getTopNewsData } from '@/serverActions/newsApi';
import { NewsResultsType } from '@/types/newsInfo';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';

const TopNewsList = () => {
  const [topNews, setTopNews] = useState<NewsResultsType[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

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
      <p className="m-5 text-[40px] font-black">Top News</p>
      <div className="embla mx-auto mb-3 h-[400px] w-[80%] overflow-hidden">
        <div className="embla__viewport h-full w-full" ref={emblaRef}>
          <div className="embla__container flex h-full">
            {topNews.slice(0, 3).map((post) => {
              return <TopNewsCard key={post.article_id} post={post} />;
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-5">
        <button className="embla__prev" onClick={scrollPrev}>
          이전
        </button>
        <button className="embla__next" onClick={scrollNext}>
          다음
        </button>
      </div>
    </div>
  );
};

export default TopNewsList;
