import styles from "./styles.module.css";
import { CheckCircleTwoTone, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";
import { IProfileProps } from "@/interfaces/user";

export default function ProfileBadge({ user }: IProfileProps): JSX.Element {
  return (
    <Badge
      count={
        user.is_active && (
          <span className={styles.badge}>
            <CheckCircleTwoTone />
          </span>
        )
      }
    >
      <Avatar size={128} icon={<UserOutlined />} />
    </Badge>
  );
}
