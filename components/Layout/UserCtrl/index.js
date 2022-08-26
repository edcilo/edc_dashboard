import { useRouter } from "next/router";
import {
  DownOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import { ApiAuth } from "../../../services/auth";

const handleMenuClick = (item, router) => {
  const apiAuth = new ApiAuth();

  if (item.key === "logout") {
    apiAuth.logout().then(() => {
      router.push("/");
    });
  } else if (item.key === "settings") {
    router.push("/dashboard/profile/account");
  }
};

const menu = (router) => (
  <Menu
    onClick={(item) => handleMenuClick(item, router)}
    items={[
      {
        label: "Settings",
        key: "settings",
        icon: <SettingOutlined />,
      },
      {
        label: "Log Out",
        key: "logout",
        icon: <LogoutOutlined />,
      },
    ]}
  />
);

export default function UserCtrl({ user }) {
  const router = useRouter();

  return (
    <div>
      <Dropdown.Button
        overlay={menu(router)}
        placement="bottomRight"
        trigger="click"
        icon={<DownOutlined />}
        onClick={() => router.push("/dashboard/profile")}
      >
        {user?.name || user?.email}
      </Dropdown.Button>
    </div>
  );
}
