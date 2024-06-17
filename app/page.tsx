import Link from 'next/link';
import '@/app/lib/db';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <div className="my-auto flex flex-col items-center gap-4 *:font-medium">
        <span className="text-7xl text-cyan-500">naganora</span>
        <h1 className="text-4xl">나가노라</h1>
        <h2 className="text-2xl">
          <span className="text-cyan-500">나</span>만의{' '}
          <span className="text-cyan-500">가</span>치있게{' '}
          <span className="text-cyan-500">노</span>는{' '}
          <span className="text-cyan-500">라</span>이프에 어서오세요!
        </h2>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <Link href="/create-account" className="primary-btn py-2.5 text-lg">
          시작하기
        </Link>
        <div className="flex gap-2">
          <span>이미 계정이 있나요?</span>
          <Link href="/login" className="hover:underline underline-offset-4">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
