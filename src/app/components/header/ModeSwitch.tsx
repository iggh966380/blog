'use client';

import { useState, useEffect } from 'react';

export default function ModeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <button className="" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? (
        <i className="fa-solid fa-sun nav-font"></i>
      ) : (
        <i className="fa-solid fa-moon nav-font"></i>
      )}
    </button>
  );
}
