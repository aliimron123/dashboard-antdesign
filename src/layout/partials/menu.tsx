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
    key: "1",
    icon: <DashboardOutlined />,
    label: <a href="/"> Dashboard </a>,
  },
  {
    key: "2",
    icon: <ProjectOutlined />,
    label: <a href="/"> Projects </a>,
  },
  {
    key: "3",
    icon: <UnorderedListOutlined />,
    label: <a href="/"> Task List </a>,
  },
  {
    key: "4",
    icon: <BellOutlined />,
    label: <a href="/"> Notifications </a>,
  },
  {
    key: "sub1",
    label: " Accounts ",
    icon: <UserOutlined />,
    children: [
      { key: "5", label: <a href="/"> Admin </a> },
      { key: "6", label: <a href="/"> User </a> },
    ],
  },
];

export default MenuNav;
