import React from 'react';
import ClientLayout from '@/app/components/ClientLayout';
import { StyledComponentsRegistry } from '@/app/registry';

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
      <body>
        <StyledComponentsRegistry>
          <ClientLayout>{children}</ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}