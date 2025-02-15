import React from 'react';
import '@/app/globals.css';

export const metadata = {
  title: 'Miles of Code',
  description: 'A showcase of my projects and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        {children}
      </body>
    </html>
  );
}