import styles from "./styles.module.css";
import { Layout } from "antd";

export default function Content({ children }) {
  const {Content} = Layout;

  return <Content className={styles.content}>{children}</Content>;
}
