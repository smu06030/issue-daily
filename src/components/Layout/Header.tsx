import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex justify-between items-center h-12 shadow-md">
      <div className="ml-5 font-pretendard font-bold text-xl">
        <p>Issue Daily</p>
      </div>
      <div className="mr-5">
        <Link href={'/'}>
          <p>로그인</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
