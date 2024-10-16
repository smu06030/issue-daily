import { Suspense } from 'react';
import Loading from './loading';

const AuthLayout = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <section className="flex flex-col items-center justify-center font-pretendard">
      <div className="my-12 text-2xl font-bold">{title}</div>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </section>
  );
};

export default AuthLayout;
