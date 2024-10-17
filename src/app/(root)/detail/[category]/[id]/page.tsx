import React from 'react';
import Comments from './Comments';
import { getCategoryData } from '@/serverActions/newsApi';
import Link from 'next/link';
import Image from 'next/image';
import newsImg from '../../../../../public/news_image.jpg';
import LikeButton from '@/components/likes/LikeButton';
import { ParamProps } from '@/types/comment';

const DetailPage = async ({ params }: ParamProps) => {
  const { results } = await getCategoryData(params.category);
  const prevArticle = results.find((article) => article.article_id === params.id);

  return (
    <div className="relative mx-auto max-w-[1000px]">
      <div className="absolute top-[15rem] h-8 w-8">{prevArticle && <LikeButton el={prevArticle} />}</div>
      <div className="flex flex-col items-center">
        <div className="flex">
          <h1 className="my-10 text-[2rem] font-medium">{prevArticle?.title}</h1>
        </div>
        {prevArticle?.image_url ? (
          <Image src={prevArticle?.image_url} alt="기사 사진" width={550} height={320} unoptimized />
        ) : (
          <Image src={newsImg} alt="기사 사진" width={550} height={320} unoptimized />
        )}

        {prevArticle?.description ? (
          <p className="mt-16 max-w-[800px]">{prevArticle?.description}</p>
        ) : (
          prevArticle?.link && (
            <Link className="mt-16 max-w-[800px] font-medium text-blue-600" href={prevArticle?.link} target="_blank">
              기사 보러 가기
            </Link>
          )
        )}
      </div>
      <Comments params={params} prevArticle={prevArticle} />
    </div>
  );
};

export default DetailPage;
