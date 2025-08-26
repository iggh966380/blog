import { Timestamp } from 'next/dist/server/lib/cache-handlers/types';
import Link from 'next/link';
import React from 'react';
import HeaderServer from './HeaderServer';
import ModeSwitch from './ModeSwitch';

interface NavItem {
  path: string;
  created_at: Timestamp;
  id: number;
  name: string;
  parent_id: string;
  sort: number;
  updated_at: Timestamp;
  visible: false;
}

async function getNavItems(): Promise<NavItem[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getRouter`);
  return res.json();
}

const Header = async () => {
  const navItems: NavItem[] = await getNavItems();
  console.log(navItems);

  return (
    <header className="bg-gray-100 py-4 px-8 shadow-md color">
      <HeaderServer />
      <ModeSwitch />
    </header>
  );
};

export default Header;
