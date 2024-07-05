import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | naganora',
    default: 'naganora',
  },
  description: '나만의 가치있게 노는 라이프',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${inter.className} bg-neutral-900 text-white max-w-screen-sm m-auto`}
      >
        {children}
      </body>
    </html>
  );
}
