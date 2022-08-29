import styles from "./styles.module.css";
import { IProfileProps } from "@/interfaces/user";

export default function ProfileTitle({ user }: IProfileProps): JSX.Element {
  return (
    <>
      <h1 className={styles.username}>
        {user.name} {user.lastname} {user.second_lastname}
      </h1>
      <span className={styles.email}>{user.email}</span>
    </>
  );
}
