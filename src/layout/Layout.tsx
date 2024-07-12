import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import React, { useState } from "react";
import NavDesktop from "./partials/NavDesktop";
import NavMobile from "./partials/NavMobile";

const { Header, Content, Footer } = Layout;

interface IProps {
  children: React.ReactNode;
}

const Layouts = ({ children }: IProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <div className="xtraLarge:block desktop:block large:block hidden">
        <NavDesktop collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>

      <Layout>
        <div className="xtraLarge:hidden desktop:hidden large:hidden">
          <NavMobile />
        </div>
        <Header
          style={{
            padding: 0,
            overflowY: "auto",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            width: "100vw",
          }}
          className="xtraLarge:block desktop:block large:block hidden border-b bg-white"
        >
          <div></div>
        </Header>

        <Content>
          <div
            className={
              collapsed
                ? "pb-4 pl-28 pr-6 pt-24 transition-all duration-300 ease-in-out"
                : "pb-4 pl-56 pr-6 pt-24 transition-all duration-300 ease-in-out"
            }
          >
            {children}
          </div>
        </Content>
        <Footer className="text-nowrap text-center">
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Layouts;
