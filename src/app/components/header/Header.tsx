import { Timestamp } from 'next/dist/server/lib/cache-handlers/types';
import Link from 'next/link';
import React from 'react';
import HeaderServer from './NavLinkClient';
import ModeSwitch from './ModeSwitch';
import { NavItem } from './models/navItem.interface';

export async function getNavItems(): Promise<NavItem[]> {
  const res = await fetch(`http://localhost:8080/api/getRouter`);
  return res.json();
}

const Header = async () => {
  const navItems = await getNavItems();
  return (
    <header className="bg-gray-100 py-[1rem] duration-300 ease-in-out shadow-md dark:bg-gray-800 border-b-1 border-[#eee]">
      <div className="flex items-center justify-between my-0 mx-auto w-[30%]">
        <div className="flex items-center">
          <Link href="/" aria-label="回到首頁" className="pr-[1.5rem]">
            <h2 className="nav-font">Jason' blog</h2>
          </Link>
          <HeaderServer items={navItems} />
        </div>
        <ModeSwitch />
      </div>
    </header>
  );
};

export default Header;
