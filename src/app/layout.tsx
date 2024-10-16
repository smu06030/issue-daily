import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Providers from './providers';
import { UserStoreProvider } from '@/providers/userStoreProvider';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import { createClient } from '@/utils/supabase/server';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'issue-daily',
  description: '뉴스 정보를 보여주는 사이트 입니다.'
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    data: { user }
  } = await createClient().auth.getUser();
  return (
    <html lang="en">
      <body className={`${pretendard.variable} antialiased`}>
        <UserStoreProvider isUser={!!user}>
          <Header />
          <Providers>
            <div className="min-h-screen pt-[50px]">{children}</div>
          </Providers>
          <Footer />
        </UserStoreProvider>
      </body>
    </html>
  );
}
