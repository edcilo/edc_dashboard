import ssprops_user from "../../../helpers/ssprops_user";
import DashboardLayout from "../../../layouts/DashboardLayout";
import ProfileCard from "../../../components/ProfileCard";

export default function ProfilePage({ user }) {
  return (
    <DashboardLayout user={user}>
      <ProfileCard user={user} />
    </DashboardLayout>
  );
}

export async function getServerSideProps(context) {
  const { user, token } = await ssprops_user(context);

  return {
    props: { user, token },
  };
}
