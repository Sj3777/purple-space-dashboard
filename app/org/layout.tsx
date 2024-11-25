import React from 'react';
import '../globals.css';
import { AppBar, Sidebar } from '@/components';

export default function OrgLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: 'flex', height: '100vh' }}>
          <Sidebar />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <AppBar />
            <main style={{ padding: '20px', background: '#f0f2f5', flex: 1 }}>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
