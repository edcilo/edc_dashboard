import styles from "./styles.module.css";
import Router from "next/router";
import { AppstoreOutlined, KeyOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";

const items = [
  {
    key: "users",
    label: "Users",
    icon: <UserOutlined />,
    children: [
      {
        key: "/users",
        label: "List",
      },
      {
        key: "/users-archived",
        label: "Archived",
      },
    ],
  },
  {
    key: "apps",
    label: "Apps",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "/apps",
        label: "List",
      },
    ],
  },
  {
    key: "acl",
    label: "ACL",
    icon: <KeyOutlined />,
    children: [
      {
        key: "/roles",
        label: "Roles",
      },
      {
        key: "/permissions",
        label: "Permissions",
      },
    ],
  },
];

export default function Sidebar({ collapsed }) {
  const clickHandler = (item) => {
    Router.push(item.key);
    console.log("????", item);
  };

  return (
    <Layout.Sider className={styles.sidebar} collapsed={collapsed}>
      <Menu
        defaultSelectedKeys={["users-list"]}
        defaultOpenKeys={["users"]}
        mode="inline"
        items={items}
        onClick={clickHandler}
      />
    </Layout.Sider>
  );
}
