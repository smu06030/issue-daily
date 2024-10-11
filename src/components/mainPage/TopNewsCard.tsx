import { NewsResultsType } from '@/types/newsInfo';
import Image from 'next/image';
import Link from 'next/link';

const TopNewsCard = ({ post }: { post: NewsResultsType }) => {
  return (
    <Link href={'/'} className="flex embla__slide grow-0 shrink-0 basis-full w-full h-full">
      <div className="w-[50%] h-full">
        <Image
          src={post.image_url}
          alt={post.source_id}
          width={200}
          height={200}
          unoptimized
          className="w-full h-full"
        />
      </div>
      <div className="w-[50%] mx-5">
        <p className="text-[32px] font-bold mb-5 break-keep">{post.title}</p>
        <p className="break-keep text-ellipsis ">{post.description}</p>
      </div>
    </Link>
  );
};

export default TopNewsCard;
