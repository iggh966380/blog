'use client';

import { useState, useEffect } from 'react';

export default function ModeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? '🌞' : '🌙'}</button>;
}
