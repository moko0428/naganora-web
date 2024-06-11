'use client';

import FormInput from '@/components/form-input';
import FormBtn from '@/components/from-btn';
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
        <FormInput
          name="nickname"
          type="text"
          placeholder="닉네임"
          required
          errors={state?.fieldErrors.nickname}
        />{' '}
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
          errors={state?.fieldErrors.password}
        />
        <FormInput
          name="passwordConfirm"
          type="password"
          placeholder="비밀번호 확인"
          required
          errors={state?.fieldErrors.passwordConfirm}
        />
        <FormBtn text="회원가입" />
      </form>
      <SocialLogin />
    </div>
  );
}
