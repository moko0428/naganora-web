'use client';

import Link from 'next/link';
import {
  HomeIcon as SolidHomeIcon,
  NewspaperIcon as SolidNewspaper,
  ChatBubbleBottomCenterTextIcon as SolidChatIcon,
  VideoCameraIcon as SolidVideoCameraIcon,
  UserIcon as SolidUserIcon,
} from '@heroicons/react/24/solid';
import {
  HomeIcon as OutlineHomeIcon,
  NewspaperIcon as OutlineNewspaperIcon,
  ChatBubbleBottomCenterTextIcon as OutlineChatIcon,
  VideoCameraIcon as OutlineVideoCameraIcon,
  UserIcon as OutlineUserIcon,
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

export default function TabBar() {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 w-full mx-auto max-w-screen-md grid grid-cols-5 border-neutral-600 border-t px-5 py-3 *:text-white">
      <Link href={'/products'} className="flex flex-col items-center gap-px">
        {pathname === '/products' ? (
          <SolidHomeIcon className="size-7 text-main" />
        ) : (
          <OutlineHomeIcon className="size-7" />
        )}
        <span>홈</span>
      </Link>
      <Link href={'/community'} className="flex flex-col items-center gap-px">
        {pathname === '/community' ? (
          <SolidNewspaper className="size-7 text-main" />
        ) : (
          <OutlineNewspaperIcon className="size-7" />
        )}
        <span>커뮤니티</span>
      </Link>
      <Link href={'/chats'} className="flex flex-col items-center gap-px">
        {pathname === '/chats' ? (
          <SolidChatIcon className="size-7 text-main" />
        ) : (
          <OutlineChatIcon className="size-7" />
        )}
        <span>채팅</span>
      </Link>
      <Link href={'/live'} className="flex flex-col items-center gap-px">
        {pathname === '/live' ? (
          <SolidVideoCameraIcon className="size-7 text-main" />
        ) : (
          <OutlineVideoCameraIcon className="size-7" />
        )}
        <span>계획</span>
      </Link>
      <Link href={'/profile'} className="flex flex-col items-center gap-px">
        {pathname === '/profile' ? (
          <SolidUserIcon className="size-7 text-main" />
        ) : (
          <OutlineUserIcon className="size-7" />
        )}
        <span>마이페이지</span>
      </Link>
    </div>
  );
}
