import React, { useState } from 'react';
import {
    HomeOutlined,
    BellOutlined,
    MenuOutlined,
    AimOutlined,
    BugOutlined,
    GiftOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  
  const items = [
    getItem('Home', 'home', <HomeOutlined />),
    getItem('News', 'news', <BellOutlined />),
    getItem('Quest', 'quest', <MenuOutlined />),
    getItem('Battle', 'battle', <AimOutlined />),
    getItem('Monster', 'monster', <BugOutlined />),
    getItem('Equipment', 'equipment', <GiftOutlined />),
    getItem('Shop', 'shop', <ShoppingCartOutlined />),
  ];

const MainLayout = () => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onSelect={(item) => navigate(`/${item.key}`)} />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <div
                        className="site-layout-background"
                        style={{
                        padding: 24,
                        minHeight: 360,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Monster Warlord ©2022 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
        // <div>
        //     Hello World
        //     <Outlet />
        // </div>
    );
};

export default MainLayout;