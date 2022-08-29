import styles from "../styles/pages/login.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { Alert, Card, Space } from "antd";
import { ApiAuth } from "../services/auth";
import BasicLayout from "../layouts/BasicLayout";
import LoginForm from "@/components/User/LoginForm";
import { Container } from "@/components/Layout";

export default function LoginPage() {
  const auth = new ApiAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitHandler = (data) => {
    setLoading(true);
    setError(null);
    auth
      .login(data)
      .then((response) => {
        router.push("/dashboard");
      })
      .catch(({ status, data }) => {
        if (status === 400) {
          setError(data.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <BasicLayout>
      <Container className={styles.container}>
        <Card className={styles.card} title="Log In">
          {error ? (
            <Alert className={styles.alert} type="error" message={error} />
          ) : null}
          <LoginForm loading={loading} onSubmit={submitHandler} />
        </Card>
      </Container>
    </BasicLayout>
  );
}
