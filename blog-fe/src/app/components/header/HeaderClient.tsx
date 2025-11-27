'use client';
import ModeSwitch from './ModeSwitch';
import React, { useEffect, useState } from 'react';
import NavClient from './NavClient';
import { NavItem } from './models/navItem.interface';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function HeaderClient({ navItems }: { navItems: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const pathName = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    setIsOpen(false);
  }, [pathName, search]);

  return (
    <div className="flex items-center justify-between my-0 mx-[1rem] lg:mx-auto lg:w-[50%]">
      <div className="flex items-center">
        <Link href="/" aria-label="回到首頁" className="pr-[1.5rem]">
          <h2 className="nav-font">Jason&#39; blog</h2>
        </Link>
        <span className="hidden lg:block">
          <NavClient items={navItems} />
        </span>
      </div>
      <div>
        <div className="lg:hidden">
          <button
            className="hamburger"
            onClick={() => {
              setIsOpen((v) => !v);
            }}
          >
            <span
              className={`border-1 border-t-[#222] dark:border-t-[#fff] ${
                isOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            ></span>
            <span
              className={`border-1 border-t-[#222] dark:border-t-[#fff] ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`border-1 border-t-[#222] dark:border-t-[#fff] ${
                isOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            ></span>
          </button>
        </div>
        <div className="hidden lg:block">
          <ModeSwitch />
        </div>
      </div>
      <div
        className={`lg:hidden gap-6 flex flex-col items-center p-[1rem] z-1 w-[100vw] bg-gray-50 duration-300 ease-in-out absolute bottom-0 left-0 translate-y-[100%] dark:bg-gray-700 ${
          !isOpen ? 'opacity-0 -z-1 h-[1px]' : ''
        } ${isOpen ? 'h-[auto]' : ''}`}
      >
        <NavClient className="flex-1 flex-col items-center" items={navItems} />
        <div className="">
          <ModeSwitch />
        </div>
      </div>
    </div>
  );
}
