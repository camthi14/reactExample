import { DesktopOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { MenuItem, NavbarItem, Paths } from "~/types";

function getItem({ key, label, to, icon, children }: NavbarItem): MenuItem {
  return {
    key,
    icon,
    children,
    label: to ? <Link to={to}>{label}</Link> : label,
  } as MenuItem;
}

const navConfig: MenuItem[] = [
  getItem({
    key: Paths.Home,
    label: "Home",
    to: Paths.Home,
    icon: <DesktopOutlined />,
  }),
  getItem({
    key: "",
    label: "User",
    icon: <UserOutlined />,
    children: [
      getItem({
        key: Paths.AddUser,
        label: "Add user",
        to: Paths.AddUser,
      }),
    ],
  }),
];

export default navConfig;
