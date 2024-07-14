import { notFound, redirect } from 'next/navigation';
import db from '../../lib/db';
import getSession from '../../lib/session';
import Image from 'next/image';

async function getUser() {
  const session = await getSession();
  if (session.id) {
    const user = await db.user.findUnique({
      where: {
        id: session.id,
      },
    });
    if (user) {
      return user;
    }
  }
  notFound();
}

export default async function Profile() {
  const user = await getUser();
  const logOut = async () => {
    'use server';
    const session = await getSession();
    await session.destroy();
    redirect('/');
  };
  return (
    <div>
      <h1>{user?.nickname}</h1>
      <Image src={user?.avatar} width={40} height={40} alt={user.nickname} />

      {/* 원래라면 버튼에 onClick을 넣어서 redirect하는게 맞지만 이럴 경우엔 컴포넌트가 client 컴포넌트가 되므로 server 컴포넌트에선 form의 action에 넣어서 관리하면 form이 submit해주기 때문에 가능하다*/}
      <form action={logOut}>
        <button>Log out</button>
      </form>
    </div>
  );
}
