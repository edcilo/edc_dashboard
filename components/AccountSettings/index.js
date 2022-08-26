import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { Card, Row, Col, Menu, PageHeader } from "antd";

const items = [
  { label: "Account", key: "account" },
  { label: "Password", key: "password" },
];

const menuHandler = (item, routes) => {
  if (item.key === "account") {
    routes.push("/dashboard/profile/account");
  } else if (item.key === "password") {
    routes.push("/dashboard/profile/password");
  }
};

export default function AccountSettings({ user, children }) {
  const routes = useRouter();

  return (
    <Card>
      <Row>
        <Col className={styles.container} span={18}>
          {children}
        </Col>
        <Col span={6}>
          <Menu
            className={styles.menu}
            items={items}
            onClick={(item) => menuHandler(item, routes)}
          />
        </Col>
      </Row>
    </Card>
  );
}
