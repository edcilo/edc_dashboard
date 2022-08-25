import { useState } from "react";
import { Layout } from "antd";
import { Content, Footer, Header, Sidebar } from "../components/Layout";

export default function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Header onMenuClick={() => setCollapsed(!collapsed)} />
      <Layout>
        <Sidebar collapsed={collapsed} />
        <Content>{children}</Content>
      </Layout>
      <Footer />
    </Layout>
  );
}
