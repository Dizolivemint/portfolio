"use client"

import React from 'react';
import { ProfilePhoto } from './ProfilePhoto';
import { useTheme } from '@/app/hooks/useTheme';
import { Moon, Sun } from 'lucide-react';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center mb-8">
      <ProfilePhoto />
      <div style={{width: '0'}}>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <Moon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
          ) : (
            <Sun className="h-5 w-5 text-gray-800 dark:text-gray-200" />
          )}
        </button>
      </div>
    </header>
  );
};