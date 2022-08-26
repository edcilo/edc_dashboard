import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { AppstoreOutlined, KeyOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";

const items = [
  {
    key: "users",
    label: "Users",
    icon: <UserOutlined />,
    children: [
      {
        key: "/dashboard/users",
        label: "List",
      },
      {
        key: "/dashboard/users-archived",
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
        key: "/dashboard/apps",
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
        key: "/dashboard/roles",
        label: "Roles",
      },
      {
        key: "/dashboard/permissions",
        label: "Permissions",
      },
    ],
  },
];

export default function Sidebar({ collapsed }) {
  const router = useRouter();

  const clickHandler = (item) => {
    router.push(item.key);
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
