'use client';

import { useState, useEffect } from 'react';
import './icon.css';

export default function ModeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <button className="" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? (
        <i className="fa-solid fa-sun dark:text-gray-50 dark:hover:text-gray-400"></i>
      ) : (
        <i className="fa-solid fa-moon text-gray-900 hover:text-gray-500"></i>
      )}
    </button>
  );
}
