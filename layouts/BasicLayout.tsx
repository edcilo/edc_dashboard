import { Layout } from "antd";
import { Content, Footer, Header } from "@/components/Layout";
import { IBasicLayoutProps } from "@/interfaces/layouts";

export default function BasicLayout({
  children,
}: IBasicLayoutProps): JSX.Element {
  return (
    <Layout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
}
