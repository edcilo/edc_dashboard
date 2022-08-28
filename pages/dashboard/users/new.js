import { useState } from "react";
import { useRouter } from "next/router";
import { Card, PageHeader } from "antd";
import ssprops_user from "../../../helpers/ssprops_user";
import DashboardLayout from "../../../layouts/DashboardLayout";
import { UserForm } from "../../../components/Users";
import Role from "../../../services/role";
import User from "../../../services/user";

export default function NewUserPage({ user, token, roles }) {
  const router = useRouter();
  const userService = new User(token);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const submitHandler = (data) => {
    setLoading(true);
    console.log("???", data);
    userService
      .create(data)
      .then((data) => {
        console.log("????", data);
      })
      .catch((err) => {
        console.log("!!!!", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <DashboardLayout user={user}>
      <PageHeader onBack={() => window.history.back()} title="Users" />
      <Card title="New User">
        <UserForm
          roles={roles}
          submitErrors={errors}
          loading={loading}
          onSubmit={submitHandler}
        />
      </Card>
    </DashboardLayout>
  );
}

export async function getServerSideProps(context) {
  const { user, token } = await ssprops_user(context);
  const props = { user, token };

  try {
    const roleService = new Role(token);
    const { data } = await roleService.list();
    props.roles = data;
  } catch (err) {
    console.log("???", err);
  }

  return {
    props,
  };
}
