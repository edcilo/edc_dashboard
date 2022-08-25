import styles from "./styles.module.css";
import { Layout } from "antd";
import Container from "../Container";

export default function Content({ children }) {
  return (
    <Layout.Content className={styles.content}>
      <Container>{children}</Container>
    </Layout.Content>
  );
}
