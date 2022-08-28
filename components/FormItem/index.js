import styles from "./styles.module.css";
import { Typography } from "antd";

export default function FormItem({
  label,
  htmlFor,
  children,
  errors,
  touched,
}) {
  return (
    <div className={styles.formItem}>
      <label htmlFor={htmlFor}>{label}</label>
      <div className={styles.control}>{children}</div>
      <div className={styles.message}>
        {errors[htmlFor] && touched[htmlFor] && (
          <Typography.Text type="danger">{errors[htmlFor]}</Typography.Text>
        )}
      </div>
    </div>
  );
}
