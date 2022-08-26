import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { Card, Row, Col, Menu, PageHeader } from "antd";

const items = [
  { label: "Account", key: "account" },
  { label: "Password", key: "password" },
];

const menuHandler = (item, router) => {
  if (item.key === "account") {
    router.push("/dashboard/profile/account");
  } else if (item.key === "password") {
    router.push("/dashboard/profile/password");
  }
};

export default function AccountSettings({ user, children }) {
  const router = useRouter();

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
            onClick={(item) => menuHandler(item, router)}
          />
        </Col>
      </Row>
    </Card>
  );
}
