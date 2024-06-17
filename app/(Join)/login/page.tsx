'use client';

import FormInput from '@/components/input';
import FormBtn from '@/components/button';
import SocialLogin from '@/components/social-login';
import { redirect } from 'next/navigation';
import { useFormState, useFormStatus } from 'react-dom';
import { login } from './actions';
import { PASSWORD_MIN_LENGTH } from '@/app/lib/constants';

export default function Login() {
  const [state, dispatch] = useFormState(login, null);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl ">어서오세요!</h1>
        <h2 className="text-xl">나가노라에 오신 것을 환영합니다.</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <FormInput
          name="email"
          type="email"
          placeholder="이메일"
          required
          errors={state?.fieldErrors.email}
        />{' '}
        <FormInput
          name="password"
          type="password"
          placeholder="비밀번호"
          required
          minLength={PASSWORD_MIN_LENGTH}
          errors={state?.fieldErrors.password}
        />
        <FormBtn text="로그인" />
      </form>
      <SocialLogin />
    </div>
  );
}
