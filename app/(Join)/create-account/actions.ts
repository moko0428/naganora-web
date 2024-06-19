'use server';
import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from '@/app/lib/constants';
import db from '@/app/lib/db';
import { z } from 'zod';
import bcrypt from 'bcrypt';

import { redirect } from 'next/navigation';
import getSession from '@/app/lib/session';

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
      .toLowerCase(),
    // .transform((nickname) => `🔥${nickname}`)
    email: z.string().email().trim().toLowerCase(),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH, '비밀번호는 최소 4자 입니다.')
      .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    passwordConfirm: z
      .string()
      .min(PASSWORD_MIN_LENGTH, '비밀번호는 최소 4자 입니다.'),
  })
  .superRefine(async ({ nickname }, ctx) => {
    const user = await db.user.findUnique({
      where: {
        nickname,
      },
      select: {
        id: true,
      },
    });
    if (user) {
      ctx.addIssue({
        code: 'custom',
        message: '사용자명이 이미 사용중입니다.',
        path: ['nickname'],
        fatal: true,
      });
      return z.NEVER;
    }
  })
  .superRefine(async ({ email }, ctx) => {
    const user = await db.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
      },
    });
    if (user) {
      ctx.addIssue({
        code: 'custom',
        message: '사용할 수 없는 이메일입니다.',
        path: ['email'],
        fatal: true,
      });
      return z.NEVER;
    }
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
  const result = await formSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    // 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(result.data.password, 12);
    // 유저 db 저장
    const user = await db.user.create({
      data: {
        nickname: result.data.nickname,
        email: result.data.email,
        password: hashedPassword,
      },
      select: {
        id: true,
      },
    });
    // 유저 로그인
    const session = await getSession();
    session.id = user.id;
    await session.save();
    // 사용자가 로그인하면 /home으로 redirect
    redirect('/profile');
  }
}
