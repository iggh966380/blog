import React from 'react';
import { NavItem } from './models/navItem.interface';
import './hamburger.css';
import HeaderClient from './HeaderClient';

export async function getNavItems(): Promise<NavItem[]> {
  const res = (await fetch(`http://localhost:8080/api/getRouter`)).json();
  return res;
}

const Header = async () => {
  const navItems = await getNavItems();
  return (
    <header className="bg-gray-100 py-[1rem] duration-300 ease-in-out shadow-md color dark:bg-gray-800 relative">
      <HeaderClient navItems={navItems} />
    </header>
  );
};

export default Header;
