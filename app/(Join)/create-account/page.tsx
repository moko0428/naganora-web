'use client';

import Input from '@/components/input';
import Button from '@/components/button';
import SocialLogin from '@/components/social-login';
import { useFormState } from 'react-dom';
import { createAccount } from './actions';

export default function CreateAccount() {
  const [state, dispatch] = useFormState(createAccount, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl ">어서오세요!</h1>
        <h2 className="text-xl">가입을 하기 위해 아래 양식을 작성해주세요.</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <Input
          name="nickname"
          type="text"
          placeholder="닉네임"
          required
          errors={state?.fieldErrors.nickname}
          minLength={3}
          maxLength={10}
        />{' '}
        <Input
          name="email"
          type="email"
          placeholder="이메일"
          required
          errors={state?.fieldErrors.email}
        />{' '}
        <Input
          name="password"
          type="password"
          placeholder="비밀번호"
          required
          errors={state?.fieldErrors.password}
          minLength={4}
        />
        <Input
          name="passwordConfirm"
          type="password"
          placeholder="비밀번호 확인"
          required
          errors={state?.fieldErrors.passwordConfirm}
          minLength={4}
        />
        <Button text="회원가입" />
      </form>
      <SocialLogin />
    </div>
  );
}
