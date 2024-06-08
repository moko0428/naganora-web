import FormInput from '@/components/form-input';
import FormBtn from '@/components/from-btn';
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
        <FormInput type="text" placeholder="닉네임" required errors={[]} />{' '}
        <FormInput type="email" placeholder="이메일" required errors={[]} />{' '}
        <FormInput
          type="password"
          placeholder="비밀번호"
          required
          errors={[]}
        />
        <FormInput
          type="password"
          placeholder="비밀번호 확인"
          required
          errors={[]}
        />
        <FormBtn loading={false} text="회원가입" />
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
