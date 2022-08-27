import ssprops_user from "../../../helpers/ssprops_user";
import DashboardLayout from "../../../layouts/DashboardLayout";
import User from "../../../services/user";
import UsersTable from "../../../components/UsersTable";

export default function UsersPage({ user, token, users }) {
  return (
    <DashboardLayout user={user}>
      <UsersTable users={users} token={token} />
    </DashboardLayout>
  );
}

export async function getServerSideProps(context) {
  const { user, token } = await ssprops_user(context);
  const { query } = context;

  let users = {
    data: [],
    pagination: {
      page: query.page || 1,
      per_page: query.per_page || 15,
      total: 0,
    },
  };

  const userService = new User(token);
  try {
    const { data } = await userService.all(query);
    users = data;
  } catch ({ status }) {
    console.log("???", status);
  }

  return {
    props: { user, token, users },
  };
}
