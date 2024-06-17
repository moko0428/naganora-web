'use client';
import Input from '@/components/input';
import Button from '@/components/button';
import { useFormState } from 'react-dom';
import { smsLogin } from './actions';

const initialState = {
  token: false,
  error: undefined,
};

export default function SMSLogin() {
  const [state, dispatch] = useFormState(smsLogin, initialState);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl ">전화번호로 로그인</h1>
        <h2 className="text-xl">나가노라에 오신것을 환영합니다.</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        {state.token ? (
          <Input
            name="token"
            type="number"
            placeholder="인증코드"
            required
            min={100000}
            max={999999}
          />
        ) : (
          <Input
            name="phone"
            type="text"
            placeholder="전화번호"
            required
            errors={state.error?.formErrors}
          />
        )}
        <Button text={state.token ? '인증 코드' : '인증 코드 보내기'} />
      </form>
    </div>
  );
}
