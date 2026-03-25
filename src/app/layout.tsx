'use client';
import './globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { Cursor } from '@/components/ui/Cursor';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [qc] = useState(() => new QueryClient());
  return (
    <html lang="ru">
      <body>
        <QueryClientProvider client={qc}>
          <Cursor />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
