'use client';

import { useEffect } from 'react';

export const ThemeButton = () => {
  // Check saved theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
      document.documentElement.setAttribute('data-color-mode', savedTheme);
    }
  }, []);

  const handleTheme = () => {
    const isDark = document.body.classList.toggle('dark');
    // Save theme preference to localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    // Atualiza o data-color-mode
    document.documentElement.setAttribute(
      'data-color-mode',
      isDark ? 'dark' : 'light'
    );
  };

  return <button onClick={handleTheme}>mudar tema</button>;
};
