import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Providers from './providers';
import Header from '@/components/layout/Header';
import { UserStoreProvider } from '@/providers/userStoreProvider';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'issue-daily',
  description: '뉴스 정보를 보여주는 사이트 입니다.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} antialiased`}>
        <UserStoreProvider>
          <Header />
          <Providers>{children}</Providers>
        </UserStoreProvider>
      </body>
    </html>
  );
}
