import { NewsResultsType } from '@/types/newsInfo';
import Image from 'next/image';
import Link from 'next/link';
import newsImg from '../../../public/news_image.jpg';
import LikeButton from '../likes/LikeButton';

const CategoryNewsCard = ({ el }: { el: NewsResultsType }) => {
  console.log(el);
  return (
    <div className="relative h-[300px] w-[23%] rounded-[8px] border-2 border-solid border-black font-pretendard">
      <Link href={`/detail/${el.category[0]}/${el.article_id}`}>
        <div className="flex h-[70%] justify-center">
          <Image
            src={el.image_url === null ? newsImg : el.image_url}
            alt={el.source_id}
            width={100}
            height={100}
            unoptimized
            className="h-full w-auto"
          />
        </div>
        <div className="h-[30%]">
          <p className="h-[60%] overflow-hidden text-ellipsis font-bold">{el.title}</p>
          <p className="h-[20%]">{el.source_name}</p>
          <p className="h-[20%]">{el.pubDate}</p>
        </div>
      </Link>
      <LikeButton el={el} />
    </div>
  );
};

export default CategoryNewsCard;
