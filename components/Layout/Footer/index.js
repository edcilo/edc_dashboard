import styles from "./styles.module.css";
import { Layout } from "antd";
import Container from "../Container";

export default function Footer() {
  return (
    <Layout.Footer className={styles.footer}>
      <Container>edcilo.com v0.0.1 - 2022</Container>
    </Layout.Footer>
  );
}
