'use client';
import React from 'react';
import { Form, Input, Button } from 'antd';
import { useRouter } from 'next/navigation';

export const LoginForm = () => {
  const router = useRouter();

//   const handleLogin = async ({ email: string; password: string }) => {
//     // Simulate login success and set a cookie/token
//     document.cookie = 'token=loggedIn; path=/';
//     router.push('/overview');
//   };

  return (
    <Form 
    layout="vertical" 
    // onFinish={handleLogin}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please enter your email!' }]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please enter your password!' }]}
      >
        <Input.Password placeholder="Enter your password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
