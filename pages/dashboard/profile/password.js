import { useState } from "react";
import { useRouter } from "next/router";
import { CheckOutlined } from "@ant-design/icons";
import { notification, PageHeader, Typography } from "antd";
import ssprops_user from "../../../helpers/ssprops_user";
import Account from "../../../services/account";
import DashboardLayout from "../../../layouts/DashboardLayout";
import { AccountSettings, PasswordForm } from "@/components/User/Profile";

const successNotification = () => {
  notification.open({
    icon: <CheckOutlined />,
    message: "Your changes has been updated",
  });
};

const errorsHandler = (status, data, setState) => {
  if (status === 400) {
    const errors = {};
    for (const key in data.errors) {
      errors[key] = data.errors[key][0];
    }
    setState(errors);
  }
};

export default function PasswordPage({ user, token }) {
  const accountService = new Account(token);
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const submitHandler = (data) => {
    setErrors({});
    setLoading(true);

    accountService
      .updatePassword(data)
      .then(successNotification)
      .catch(({ status, data }) => {
        errorsHandler(status, data, setErrors);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <DashboardLayout user={user}>
      <PageHeader
        title="Settings"
        onBack={() => router.push("/dashboard/profile")}
      />
      <AccountSettings>
        <Typography.Title level={3}>Update password</Typography.Title>
        <PasswordForm
          submitErrors={errors}
          loading={loading}
          onSubmit={submitHandler}
        />
      </AccountSettings>
    </DashboardLayout>
  );
}

export async function getServerSideProps(context) {
  const { user, token } = await ssprops_user(context);

  return {
    props: { user, token },
  };
}
