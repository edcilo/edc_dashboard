import { useState } from "react";
import { useRouter } from "next/router";
import { CheckOutlined } from "@ant-design/icons";
import { notification, Divider, PageHeader, Typography } from "antd";
import ssprops_user from "../../../helpers/ssprops_user";
import Account from "../../../services/account";
import DashboardLayout from "../../../layouts/DashboardLayout";
import AccountSettings from "../../../components/AccountSettings";
import AccountForm from "../../../components/AccountForm";
import AuthForm from "../../../components/AuthForm";

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

export default function AccountPage({ user, token }) {
  const routes = useRouter();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const authData = {
    email: user.email,
    phone: user.phone,
  };

  const accountData = {
    name: user.name,
    lastname: user.lastname,
    second_lastname: user.second_lastname,
  };

  const submitHandler = (service, data) => {
    const accountService = new Account(token);

    setErrors({});
    setLoading(true);

    accountService[service](data)
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
        onBack={() => routes.push("/dashboard/profile")}
      />
      <AccountSettings>
        <Typography.Title level={3}>Account</Typography.Title>
        <AuthForm
          data={authData}
          submitErrors={errors}
          loading={loading}
          onSubmit={(data) => submitHandler("updateAuth", data)}
        />
        <Divider plain />
        <Typography.Title level={3}>Name</Typography.Title>
        <AccountForm
          data={accountData}
          errors={errors}
          loading={loading}
          onSubmit={(data) => submitHandler("updateAccount", data)}
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
