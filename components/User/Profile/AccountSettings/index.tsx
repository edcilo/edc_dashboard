import styles from "./styles.module.css";
import { useRouter, NextRouter } from "next/router";
import { Card, Row, Col, Menu } from "antd";
import { ItemType, MenuInfo } from "rc-menu/lib/interface";
import { ISettingsProps } from "@/interfaces/user";
import urls from "@/config/urls";

const items: ItemType[] = [
  { label: "Account", key: "account" },
  { label: "Password", key: "password" },
];

const menuHandler = (item: MenuInfo, router: NextRouter): void => {
  if (item.key === "account") {
    router.push(urls.settings);
  } else if (item.key === "password") {
    router.push(urls.password);
  }
};

export default function AccountSettings({
  children,
}: ISettingsProps): JSX.Element {
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
