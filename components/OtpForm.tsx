'use client';
import React from 'react';
import { Form, Input, Button } from 'antd';
import { useRouter } from 'next/navigation';

export const OTPForm = () => {
  const router = useRouter();

  const handleVerifyOTP = (values: { phone: string; otp: string }) => {
    // Simulate OTP verification and set a cookie/token
    document.cookie = 'token=loggedIn; path=/';
    router.push('/overview');
  };

  return (
    <Form layout="vertical" onFinish={handleVerifyOTP}>
      <Form.Item
        label="Phone Number"
        name="phone"
        rules={[{ required: true, message: 'Please enter your phone number!' }]}
      >
        <Input placeholder="Enter your phone number" />
      </Form.Item>
      <Form.Item
        label="OTP"
        name="otp"
        rules={[{ required: true, message: 'Please enter the OTP!' }]}
      >
        <Input placeholder="Enter the OTP" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Verify OTP
        </Button>
      </Form.Item>
    </Form>
  );
};
