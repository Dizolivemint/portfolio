"use client"

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/app/styles/GlobalStyle';
import { lightTheme, darkTheme } from '@/app/styles/theme';
import { useTheme } from '@/app/hooks/useTheme';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ClientLayout;