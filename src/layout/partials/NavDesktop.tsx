import { Layout, Menu } from "antd";
import React, { useState } from "react";
import MenuNav from "./menu";

const { Sider } = Layout;

interface IProps {
  collapsed: boolean;
  setCollapsed: (value: React.SetStateAction<boolean>) => void;
}

const NavDesktop = ({ collapsed, setCollapsed }: IProps) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "#fff",
        zIndex: "20",
      }}
      className="border-1 border-r"
    >
      <div className="h-screen">
        <div
          className="my-auto flex cursor-pointer items-center justify-center py-5"
          onClick={() => setCollapsed(!collapsed)}
        >
          INI LOGO
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={MenuNav}
          className="mt-4"
        />
      </div>
    </Sider>
  );
};

export default NavDesktop;
