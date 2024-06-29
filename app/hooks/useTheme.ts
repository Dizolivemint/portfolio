"use client"

import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  return { theme };
};