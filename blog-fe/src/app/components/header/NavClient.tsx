'use client';
import Link from 'next/link';
import { NavItem } from './models/navItem.interface';

function handlePathName(path: string) {
  if (path === 'list') {
    return '文章列表';
  } else {
    return '分類';
  }
}

export default function NavClient({
  items,
  className = '',
}: {
  items: NavItem[];
  className?: string;
}) {
  return (
    <nav className={`flex gap-6 ${className}`}>
      {items.map((item) => (
        <Link
          key={item.id}
          href={`/${item.router}`}
          // onClick={(e) => {
          //   if (pathname === item.router) {
          //     e.preventDefault();
          //   }
          // }}
          className="nav-font"
        >
          {handlePathName(item.router)}
        </Link>
      ))}
    </nav>
  );
}
