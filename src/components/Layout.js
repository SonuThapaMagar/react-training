import { useNavigate, Outlet } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  UserOutlined,
  DashboardOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { UserContext } from "../context API/user.context";
import Logo from "../assets/college_logo.png";
const { Header, Sider, Content } = Layout;

const CustomLayout = () => {
  const { _user } = useContext(UserContext);

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  useEffect(() => {
    const isLogin = localStorage.getItem("is_login");
    if (isLogin !== "1") {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogoutClick = () => {
    localStorage.setItem("is_login", 0);
    navigate("/login");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed} width={200}>
        <div
          className="demo-logo-vertical"
          style={{
            height: "64px",
            margin: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={Logo}
            alt="College Logo"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>

        <div style={{ color: "#ffffff", padding: 30 }}>{_user?.email}</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["dashboard"]}
          items={[
            {
              key: "dashboard",
              icon: <DashboardOutlined />,
              label: "Dashboard",
              onClick: () => navigate("dashboard"),
            },
            {
              key: "users",
              icon: <UserOutlined />,
              label: "User",
              onClick: () => navigate("users"),
            },
            {
              key: "setting",
              icon: <SettingOutlined />,
              label: "Settings",
              onClick: () => navigate("setting"),
            },
            {
              key: "logout",
              icon: <LogoutOutlined />,
              label: "Logout",
              onClick: () => handleLogoutClick(),
            },
          ]}
        />
      </Sider>
      <Layout style={{ flex: 1 }}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
