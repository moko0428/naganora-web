'use server';

export const onFormSubmit = async (prevState: any, formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    errors: ['비밀번호가 틀렸습니다.', '비밀번호가 너무 짧습니다.'],
  };
};
