import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";

export default function Header({ onMenuClick = null }) {
  const imageSrc = "https://storage.edcilo.com/edcilo-logo-dark.svg";

  return (
    <Layout.Header className={styles.header}>
      <Link href="/">
        <a>
          <Image
            className={styles.logo}
            src={imageSrc}
            alt="edcilo logo"
            width={80}
            height={25}
          />
        </a>
      </Link>
      {onMenuClick && (
        <Button onClick={onMenuClick} icon={<MenuOutlined />}></Button>
      )}
    </Layout.Header>
  );
}
