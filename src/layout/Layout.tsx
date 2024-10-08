import { UserOutlined, BellOutlined } from "@ant-design/icons";
import { Layout, Button, Badge } from "antd";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavDesktop from "./partials/NavDesktop";
import NavMobile from "./partials/NavMobile";

const { Header, Content, Footer } = Layout;

const Layouts = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <div className="hidden desktop:block large:block xtraLarge:block">
          <NavDesktop collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>

        <Layout>
          <div className="desktop:hidden large:hidden xtraLarge:hidden">
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
              zIndex: "40",
            }}
            className="hidden h-fit overflow-hidden border-b bg-inherit desktop:block large:block xtraLarge:block"
          >
            <div className="flex flex-row justify-end gap-x-2 pr-10">
              <div className="my-auto cursor-pointer pt-1">
                <Badge count={0} overflowCount={100}>
                  <Button type="text" icon={<BellOutlined />} />
                </Badge>
              </div>
              <div className="my-auto">
                <Button
                  icon={<UserOutlined />}
                  size="large"
                  className="my-auto"
                >
                  John Doe
                </Button>
              </div>
            </div>
          </Header>

          <Content>
            <div
              className={
                collapsed
                  ? "pb-4 pl-28 pr-6 pt-24 transition-all duration-300 ease-in-out phone:px-4 phone:pt-8 tablet:px-4 tablet:pt-8"
                  : "pb-4 pl-56 pr-6 pt-24 transition-all duration-200 ease-in-out phone:px-4 phone:pt-8 tablet:px-4 tablet:pt-8"
              }
            >
              <Outlet />
            </div>
          </Content>
          <Footer className="ml-8 flex flex-col gap-4 text-nowrap text-center">
            <div className="flex flex-row gap-3"></div>
            <div> Imron Humaedi ©{new Date().getFullYear()}</div>
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Layouts;
