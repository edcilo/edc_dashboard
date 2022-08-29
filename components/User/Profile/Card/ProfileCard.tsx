import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { EditOutlined } from "@ant-design/icons";
import { Button, Card, Descriptions, Space } from "antd";
import urls from "@/config/urls";
import { IProfileProps } from "@/interfaces/user";
import ProfileBadge from "./ProfileBadge";
import ProfileTitle from "./ProfileTitle";
import profileItems from "./profileItems";

export default function ProfileCard({ user }: IProfileProps): JSX.Element {
  const router = useRouter();

  return (
    <Card>
      <div className={styles.grid}>
        <div className={styles.section}>
          <ProfileBadge user={user} />
        </div>
        <div className={styles.section}>
          <Descriptions
            className={styles.profileData}
            title={<ProfileTitle user={user} />}
            column={1}
            extra={
              <Button
                type="primary"
                icon={<EditOutlined />}
                onClick={() => router.push(urls.settings)}
              >
                Edit
              </Button>
            }
          >
            {profileItems(user).map(({ icon, label, value }, index) => (
              <Descriptions.Item
                key={index}
                label={
                  <Space>
                    {icon}
                    {label}
                  </Space>
                }
              >
                {value || "---"}
              </Descriptions.Item>
            ))}
          </Descriptions>
        </div>
      </div>
    </Card>
  );
}
