import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Layout, Space } from "antd";
import Container from "../Container";

export default function Header({ userCtrl = null, onMenuClick = null }) {
  const imageSrc = "https://storage.edcilo.com/edcilo-logo-dark.svg";

  return (
    <Layout.Header className={styles.header}>
      <Container className={styles.container}>
        <Link href="/">
          <a className={styles.logoLink}>
            <Image
              className={styles.logo}
              src={imageSrc}
              alt="edcilo logo"
              width={80}
              height={25}
            />
          </a>
        </Link>
        <div className={styles.ctrls}>
          <Space>
            {userCtrl}
            {onMenuClick && (
              <Button onClick={onMenuClick} icon={<MenuOutlined />}></Button>
            )}
          </Space>
        </div>
      </Container>
    </Layout.Header>
  );
}
