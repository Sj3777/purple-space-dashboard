'use client';
import React from 'react';
import { Layout, Typography } from 'antd';

const { Header } = Layout;

export const AppBar = () => {
  return (
    <Header style={{ background: '#001529', color: 'white', padding: '0 20px' }}>
      <Typography.Title level={4} style={{ color: 'white', margin: 0 }}>
        Fashion Dashboard
      </Typography.Title>
    </Header>
  );
};
