import CategoryNewsList from '@/components/mainPage/CategoryNewsList';
import TopNewsList from '@/components/mainPage/TopNewsList';

const MainPage = async () => {
  return (
    <>
      <TopNewsList />
      <CategoryNewsList />
    </>
  );
};
export default MainPage;
