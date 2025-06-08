'use client';

import { useEffect } from 'react';

export const ThemeButton = () => {
  // Check saved theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
    }
  }, []);

  const handleTheme = () => {
    const isDark = document.body.classList.toggle('dark');
    // Save theme preference to localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  return <button onClick={handleTheme}>mudar tema</button>;
};
