import { NewsResultsType } from '@/types/newsInfo';
import Image from 'next/image';
import Link from 'next/link';
import newsImg from '@/public/news_image.jpg';
import LikeButton from '../likes/LikeButton';

const CategoryNewsCard = ({ el }: { el: NewsResultsType }) => {
  return (
    <div className="relative h-[400px] w-[23%] rounded-[8px] border-2 border-solid border-black font-pretendard hover:bg-gray-400">
      <Link href={`/detail/${el.category[0]}/${el.article_id}`}>
        <div className="flex h-[70%] justify-center">
          <Image
            src={el.image_url === null ? newsImg : el.image_url}
            alt={el.source_id}
            width={100}
            height={100}
            unoptimized
            className="h-full w-auto hover:bg-gray-500"
          />
        </div>
        <div className="h-[30%] p-2">
          <p className="flex h-[60%] items-center overflow-hidden text-ellipsis font-bold">{el.title}</p>
          <div className="flex h-[40%] flex-col gap-1">
            <p>{el.source_name}</p>
            <p>{el.pubDate}</p>
          </div>
        </div>
      </Link>
      <LikeButton el={el} />
    </div>
  );
};

export default CategoryNewsCard;
