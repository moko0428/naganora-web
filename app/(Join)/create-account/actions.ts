'use server';
import { z } from 'zod';

const nickNameSchema = z.string().min(5).max(10);

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    nickname: formData.get('nickname'),
    email: formData.get('email'),
    password: formData.get('password'),
    passwordConfirm: formData.get('passwordConfirm'),
  };
  nickNameSchema.parse(data.nickname);
}
