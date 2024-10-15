import { NewsResultsType } from '@/types/newsInfo';
import Image from 'next/image';
import Link from 'next/link';
import newsImg from '../../../public/news_image.jpg';
import LikeButton from '../likes/LikeButton';

const CategoryNewsCard = ({ el }: { el: NewsResultsType }) => {
  return (
    <div className="font-pretendard border-2 border-solid border-black w-[23%] h-[300px] relative">
      <Link href={'/'} onClick={(e) => e.preventDefault()}>
        <div className="h-[70%] flex justify-center">
          <Image
            src={el.image_url === null ? newsImg : el.image_url}
            alt={el.source_id}
            width={100}
            height={100}
            unoptimized
            className="w-auto h-full"
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
