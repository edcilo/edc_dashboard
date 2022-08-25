import styles from "./styles.module.css";
import { Layout } from "antd";

export default function Footer() {
  return (
    <Layout.Footer className={styles.footer}>
      edcilo.com v0.0.1 - 2022
    </Layout.Footer>
  );
}
