import { useState } from "react";
import { Layout } from "antd";
import {
  Content,
  Footer,
  Header,
  Sidebar,
  UserCtrl,
} from "../components/Layout";

export default function DashboardLayout({ user, children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Header
        userCtrl={<UserCtrl user={user} />}
        onMenuClick={() => setCollapsed(!collapsed)}
      />
      <Layout>
        <Sidebar collapsed={collapsed} />
        <Content>{children}</Content>
      </Layout>
      <Footer />
    </Layout>
  );
}
