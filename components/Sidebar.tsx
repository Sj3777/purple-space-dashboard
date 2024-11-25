'use client';
import { Menu } from 'antd';
import { AppstoreOutlined, SettingOutlined, ShoppingCartOutlined, DollarOutlined, BarChartOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const { SubMenu } = Menu;

export const Sidebar = () => {
  const router = useRouter();

  return (
    <Menu
      mode="inline"
      theme="dark"
      style={{ width: 250 }}
      defaultOpenKeys={['inventory']}
      onClick={({ key }) => router.push(key)}
    >
      <Menu.Item key="/org/overview" icon={<AppstoreOutlined />}>
        Overview
      </Menu.Item>
      <SubMenu key="inventory" icon={<SettingOutlined />} title="Inventory">
        <Menu.Item key="/org/inventory/fashion-product">Fashion Product</Menu.Item>
        <Menu.Item key="/org/inventory/beauty-product">Beauty Product</Menu.Item>
      </SubMenu>
      <Menu.Item key="/org/order" icon={<ShoppingCartOutlined />}>
        Order
      </Menu.Item>
      <Menu.Item key="/org/settings" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
      <Menu.Item key="/org/config" icon={<SettingOutlined />}>
        Config
      </Menu.Item>
      <Menu.Item key="/org/sales" icon={<BarChartOutlined />}>
        Sales
      </Menu.Item>
      <Menu.Item key="/org/stocks" icon={<BarChartOutlined />}>
        Stocks
      </Menu.Item>
      <Menu.Item key="/org/payment" icon={<DollarOutlined />}>
        Payment
      </Menu.Item>
    </Menu>
  );
};
