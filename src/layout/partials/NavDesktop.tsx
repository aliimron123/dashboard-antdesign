import { Layout, Menu, MenuProps } from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MenuNav from "./menu";

const { Sider } = Layout;

interface IProps {
  collapsed: boolean;
  setCollapsed: (value: React.SetStateAction<boolean>) => void;
}

const NavDesktop = ({ collapsed, setCollapsed }: IProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  useEffect(() => {
    setSelectedKeys([location.pathname]);
  }, [location.pathname]);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };

  return (
    <Sider
      collapsible
      trigger={null}
      collapsed={collapsed}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "#fff",
        zIndex: "50",
      }}
      className="border-1 border-r"
    >
      <div className="h-screen">
        <div
          className="my-auto flex cursor-pointer items-center justify-center bg-white py-5"
          onClick={() => setCollapsed(!collapsed)}
        >
          INI LOGO
        </div>
        <Menu
          mode="inline"
          items={MenuNav}
          selectedKeys={selectedKeys}
          className="mt-4 bg-white"
          onClick={handleMenuClick}
        />
      </div>
    </Sider>
  );
};

export default NavDesktop;
