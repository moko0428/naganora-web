'use server';
import { z } from 'zod';

const passwordRegex = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).+$/
);

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
      .min(3, '이름은 3글자 이상이어야 합니다. (3 ~ 10)')
      .max(10, '이름은 10자 이하여야 합니다. (3 ~ 10)')
      .toLowerCase()
      .transform((nickname) => `🔥${nickname}`)
      .refine(checkNickname, '포함할 수 없는 문자입니다.'),
    email: z.string().email().trim().toLowerCase(),
    password: z
      .string()
      .min(4, '비밀번호는 최소 4자 입니다.')
      .regex(
        passwordRegex,
        '비밀번호는 소문자, 대문자, 숫자, 특수문자를 포함해야합니다.'
      ),
    passwordConfirm: z.string().min(4, '비밀번호는 최소 4자 입니다.'),
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
