'use client';
import React, { useState } from 'react';
import { Tabs } from 'antd';
import { LoginForm, OTPForm } from '@/components';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState<string>('email');

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #1d1d1d, #3e3e3e)',
      }}
    >
      <div
        style={{
          background: '#fff',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          centered
          items={[
            { key: 'email', label: 'Email & Password', children: <LoginForm /> },
            { key: 'otp', label: 'Phone OTP', children: <OTPForm /> },
          ]}
        />
      </div>
    </div>
  );
};

export default LoginPage;
