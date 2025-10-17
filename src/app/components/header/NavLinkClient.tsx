'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItem } from './models/navItem.interface';

export default function HeaderServer({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  return (
    <nav className="flex gap-6">
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.path}
          onClick={(e) => {
            if (pathname === item.path) {
              e.preventDefault();
            }
          }}
          className="nav-font"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
