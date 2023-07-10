import { MenuProps } from "antd";

export type MenuItem = Required<MenuProps>["items"][number];

export interface NavbarItem {
  label: React.ReactNode;
  key: React.Key;
  to?: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
}
