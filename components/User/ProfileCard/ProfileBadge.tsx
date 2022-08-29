import styles from "./styles.module.css";
import { CheckCircleTwoTone, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";
import { ProfileProps } from "./types";

export default function ProfileBadge({ user }: ProfileProps): JSX.Element {
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
