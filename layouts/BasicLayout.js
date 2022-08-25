import { Layout } from "antd";
import { Content, Footer, Header, Sidebar } from "../components/Layout";

export default function BasicLayout({ children }) {
  return (
    <Layout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
}
