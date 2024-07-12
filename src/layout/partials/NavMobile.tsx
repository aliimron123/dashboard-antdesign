import {
  ProjectOutlined,
  UnorderedListOutlined,
  UserOutlined,
  DashboardOutlined,
  BellOutlined,
  LogoutOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Layout, Dropdown, Space, Button } from "antd";
import type { MenuProps } from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    icon: <DashboardOutlined />,
    label: (
      <a href="/" className="my-3">
        {" "}
        Dashboard{" "}
      </a>
    ),
  },
  {
    key: "2",
    icon: <ProjectOutlined />,
    label: (
      <a href="/" className="my-3">
        {" "}
        Projects{" "}
      </a>
    ),
  },
  {
    key: "3",
    icon: <UnorderedListOutlined />,
    label: (
      <a href="/" className="my-3">
        {" "}
        Task List{" "}
      </a>
    ),
  },
  {
    key: "4",
    icon: <BellOutlined />,
    label: (
      <a href="/" className="my-3">
        {" "}
        Notifications{" "}
      </a>
    ),
  },
  {
    key: "5",
    label: " Accounts ",
    icon: <UserOutlined />,
    children: [
      {
        key: "5-1",
        label: (
          <a href="/" className="my-3">
            {" "}
            Admin{" "}
          </a>
        ),
      },
      {
        key: "5-2",
        label: (
          <a href="/" className="my-3">
            {" "}
            User{" "}
          </a>
        ),
      },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "6",
    label: <p onClick={() => console.log("keluar")}>Logout</p>,
    icon: <LogoutOutlined />,
  },
];

const { Header } = Layout;

const NavMobile = () => {
  return (
    <>
      <Header className="flex justify-between border-b bg-white p-2">
        <div className="flex items-center justify-center py-5">INI LOGO</div>
        <div className="flex items-center justify-center py-5">
          <Dropdown menu={{ items }} trigger={["click"]} className="text-lg">
            <Button onClick={(e) => e.preventDefault()} className="p-4">
              <MenuOutlined />
            </Button>
          </Dropdown>
        </div>
      </Header>
    </>
  );
};

export default NavMobile;
