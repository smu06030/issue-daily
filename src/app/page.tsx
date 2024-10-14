import CategoryNewsList from '@/components/mainPage/CategoryNewsList';
import TopNewsList from '@/components/mainPage/TopNewsList';
// import { createClient } from '@/utils/supabase/server';
// import { combineChunks } from '@supabase/ssr';

const MainPage = async () => {
  // const serverClient = createClient();
  // const {
  //   data: { user }
  // } = await serverClient.auth.getUser();
  // console.log(user)
  return (
    <>
      <TopNewsList />
      <CategoryNewsList />
    </>
  );
};

export default MainPage;
