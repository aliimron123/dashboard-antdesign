import {
  ProjectOutlined,
  UnorderedListOutlined,
  UserOutlined,
  DashboardOutlined,
  BellOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const MenuNav: MenuItem[] = [
  {
    key: "/dashboard",
    icon: <DashboardOutlined />,
    label: "Dashboard",
  },
  {
    key: "/project",
    icon: <ProjectOutlined />,
    label: "Projects",
  },
  {
    key: "/todo-list",
    icon: <UnorderedListOutlined />,
    label: "Task List ",
  },
  {
    key: "/notifications",
    icon: <BellOutlined />,
    label: "Notifications",
  },
  {
    key: "sub1",
    label: " Accounts ",
    icon: <UserOutlined />,
    children: [
      { key: "/account/admin", label: "Admin" },
      { key: "/account/user", label: "User" },
    ],
  },
];

export default MenuNav;
