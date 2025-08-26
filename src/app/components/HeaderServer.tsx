import { Timestamp } from 'next/dist/server/lib/cache-handlers/types';
import Link from 'next/link';

interface NavItem {
  path: string;
  created_at: Timestamp;
  id: number;
  name: string;
  parent_id: string;
  sort: number;
  updated_at: Timestamp;
  visible: boolean;
}

interface HeaderServerProps {
  navItems: NavItem[];
}

async function getNavItems(): Promise<NavItem[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getRouter`);
  return res.json();
}

export default async function HeaderServer() {
  const navItems: NavItem[] = await getNavItems();
  console.log(navItems);
  return (
    <nav className="flex gap-6">
      {navItems.map((item) => (
        <Link key={item.id} href={item.path}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
