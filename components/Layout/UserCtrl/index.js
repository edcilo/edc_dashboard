import { useRouter } from "next/router";
import { DownOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, message, Space, Tooltip } from "antd";
import { ApiAuth } from "../../../services/auth";

const handleMenuClick = (item, router) => {
  const apiAuth = new ApiAuth();

  if (item.key === "logout") {
    apiAuth.logout().then(() => {
      router.push("/");
    });
  }
};

const menu = (router) => (
  <Menu
    onClick={(item) => handleMenuClick(item, router)}
    items={[
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
        onClick={() => console.log("go to profile")}
      >
        {user?.name || user?.email}
      </Dropdown.Button>
    </div>
  );
}
