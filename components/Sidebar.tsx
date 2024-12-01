'use client';
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';

export const Sidebar = () => {
  const router = useRouter();

  return (
    <Menu
      mode="inline"
      className="sidebar-menu"
      defaultOpenKeys={['inventory']}
      onClick={({ key }) => router.push(key)}
    >
      <Menu.Item key="/org/overview" icon={<AppstoreOutlined />} className="menu-item">
        Overview
      </Menu.Item>
      <Menu.SubMenu key="inventory" icon={<SettingOutlined />} title="Inventory" className="submenu">
        <Menu.Item key="/org/inventory/fashion-product" className="menu-item">
          Fashion Product
        </Menu.Item>
        <Menu.Item key="/org/inventory/beauty-product" className="menu-item">
          Beauty Product
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="/org/order" icon={<ShoppingCartOutlined />} className="menu-item">
        Order
      </Menu.Item>
      <Menu.Item key="/org/settings" icon={<SettingOutlined />} className="menu-item">
        Settings
      </Menu.Item>
      <Menu.Item key="/org/config" icon={<SettingOutlined />} className="menu-item">
        Config
      </Menu.Item>
      <Menu.Item key="/org/sales" icon={<BarChartOutlined />} className="menu-item">
        Sales
      </Menu.Item>
      <Menu.Item key="/org/stocks" icon={<BarChartOutlined />} className="menu-item">
        Stocks
      </Menu.Item>
      <Menu.Item key="/org/payment" icon={<DollarOutlined />} className="menu-item">
        Payment
      </Menu.Item>
    </Menu>
  );
};
