import styles from "./styles.module.css";

export default function Container({ children, className = "", ...props }) {
  const classes = `${className} ${styles.container}`;
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
}
