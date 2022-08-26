import DashboardLayout from "../../layouts/DashboardLayout";
import ssprops_user from "../../helpers/ssprops_user";

export default function HomePage({ user }) {
  return (
    <DashboardLayout user={user}>
      <h1>Dashboard</h1>
      <p>Welcome {user?.name}</p>
    </DashboardLayout>
  );
}

export async function getServerSideProps(context) {
  const { user, token } = await ssprops_user(context);

  return {
    props: { user, token },
  };
}
