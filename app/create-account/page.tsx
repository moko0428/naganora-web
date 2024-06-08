import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl ">어서오세요!</h1>
        <h2 className="text-xl">가입을 하기 위해 아래 양식을 작성해주세요.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <input
            className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-1 focus:ring-2 ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"
            type="text"
            placeholder="이름"
            required
          />
          <span className="text-red-500 font-medium">입력 오류</span>
        </div>
        <button className="primary-btn h-10">회원 가입</button>
      </form>
      <div className="w-full h-px bg-neutral-500" />
      <div>
        <Link
          className="primary-btn flex h-10 items-center justify-center gap-2"
          href="/sms"
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="size-6" />
          </span>
          <span>Sign up with SMS</span>
        </Link>
      </div>
    </div>
  );
}
