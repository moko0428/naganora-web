import FormInput from '@/components/form-input';
import FormBtn from '@/components/from-btn';
import SocialLogin from '@/components/social-login';

export default function SMSLogin() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl ">전화번호로 로그인</h1>
        <h2 className="text-xl">나가노라에 오신것을 환영합니다.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          name="phoneNumber"
          type="number"
          placeholder="전화번호"
          required
          errors={[]}
        />{' '}
        <FormInput
          name="verifyCode"
          type="number"
          placeholder="인증코드"
          required
          errors={[]}
        />
        <FormBtn text="로그인" />
      </form>
    </div>
  );
}
