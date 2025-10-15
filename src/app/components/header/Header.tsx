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
  const res = await fetch(`http://localhost:8080/api/getRouter`);
  return res.json();
}

const Header = async () => {
  const navItems: NavItem[] = await getNavItems();
  console.log(navItems);

  return (
    <header className="bg-gray-100 p-8 duration-300 ease-in-out shadow-md color dark:bg-gray-800">
      <div className="flex items-center justify-between m-auto w-[50%]">
        <HeaderServer />
        <ModeSwitch />
      </div>
    </header>
  );
};

export default Header;
