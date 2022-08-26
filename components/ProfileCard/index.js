import { useRouter } from "next/router";
import styles from "./styles.module.css";
import {
  CalendarOutlined,
  CheckCircleTwoTone,
  EditOutlined,
  ManOutlined,
  MinusOutlined,
  PhoneOutlined,
  UserOutlined,
  UserAddOutlined,
  WomanOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Card, Descriptions } from "antd";

const title = (user) => (
  <>
    <h1 className={styles.username}>
      {user.name} {user.lastname} {user.second_lastname}
    </h1>
    <span className={styles.email}>{user.email}</span>
  </>
);

export default function ProfileCard({ user }) {
  const routes = useRouter();

  const created_at = new Date(user.created_at * 1000).toLocaleDateString(
    routes.locale,
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <Card>
      <div className={styles.grid}>
        <div className={styles.section}>
          <Badge
            count={
              user.is_active ? (
                <span className={styles.badge}>
                  <CheckCircleTwoTone />
                </span>
              ) : null
            }
          >
            <Avatar size={128} icon={<UserOutlined />} />
          </Badge>
        </div>
        <div className={styles.section}>
          <Descriptions
            className={styles.profileData}
            title={title(user)}
            column={1}
            extra={
              <Button
                type="primary"
                icon={<EditOutlined />}
                onClick={() => routes.push("/dashboard/profile/account")}
              >
                Edit
              </Button>
            }
          >
            <Descriptions.Item
              label={
                <>
                  <PhoneOutlined />
                  &nbsp;Phone
                </>
              }
            >
              {user.phone}
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <>
                  <CalendarOutlined />
                  &nbsp;Birthday
                </>
              }
            >
              {user.birthday}
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <>
                  <UserAddOutlined />
                  &nbsp;Created at
                </>
              }
            >
              {created_at}
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    </Card>
  );
}
