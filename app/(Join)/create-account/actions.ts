'use server';
import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from '@/app/lib/constants';
import { z } from 'zod';

const checkNickname = (nickname: string) =>
  !nickname.includes('대충 필터링 배열');

const checkPassword = ({
  password,
  passwordConfirm,
}: {
  password: string;
  passwordConfirm: string;
}) => password === passwordConfirm;

const formSchema = z
  .object({
    nickname: z
      .string({
        invalid_type_error: '이름은 문자로 작성해야합니다.',
        required_error: '이름을 작성해주세요.',
      })
      .min(2, '이름은 2글자 이상이어야 합니다.')
      .toLowerCase()
      .transform((nickname) => `🔥${nickname}`)
      .refine(checkNickname, '포함할 수 없는 문자입니다.'),
    email: z.string().email().trim().toLowerCase(),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH, '비밀번호는 최소 4자 입니다.')
      .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    passwordConfirm: z
      .string()
      .min(PASSWORD_MIN_LENGTH, '비밀번호는 최소 4자 입니다.'),
  })
  .refine(checkPassword, {
    message: '비밀번호와 동일하지 않습니다.',
    path: ['passwordConfirm'],
  });
export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    nickname: formData.get('nickname'),
    email: formData.get('email'),
    password: formData.get('password'),
    passwordConfirm: formData.get('passwordConfirm'),
  };
  // safeParse는 에러를 throw 하지 않는다.
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
}
