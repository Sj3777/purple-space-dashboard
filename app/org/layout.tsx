'use client';
import React, { useState } from 'react';
import { Layout } from 'antd';
import { Sidebar } from '@/components/Sidebar';
import '../globals.css';

const { Header, Content, Footer, Sider } = Layout;

export default function OrgLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <html lang="en">
      <body>
        <Layout className="dashboard-layout">
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            className="dashboard-sider"
          >
            <div className="dashboard-logo">Urban Closet</div>
            <Sidebar />
          </Sider>
          <Layout className="dashboard-main">
            <Header className="dashboard-header">
              <div className="header-title">Dashboard</div>
            </Header>
            <Content className="dashboard-content">{children}</Content>
            <Footer className="dashboard-footer">
              Urban Closet Dashboard ©{new Date().getFullYear()} Created by Your Team
            </Footer>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}
