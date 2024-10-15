import { NewsResultsType } from '@/types/newsInfo';
import Image from 'next/image';
import Link from 'next/link';
import newsImg from '../../../public/news_image.jpg';

const TopNewsCard = ({ post }: { post: NewsResultsType }) => {
  return (
    <Link href={`/detail/${post.article_id}`} className="embla__slide flex h-full w-full shrink-0 grow-0 basis-full">
      <div className="h-full w-[50%]">
        <Image
          src={post.image_url === null ? newsImg : post.image_url}
          alt={post.source_id}
          width={200}
          height={200}
          unoptimized
          className="h-full w-full"
        />
      </div>
      <div className="mx-5 w-[50%]">
        <p className="mb-5 break-keep text-[32px] font-bold">{post.title}</p>
        <p className="text-ellipsis break-keep">{post.description === null ? post.link : post.description}</p>
      </div>
    </Link>
  );
};

export default TopNewsCard;
