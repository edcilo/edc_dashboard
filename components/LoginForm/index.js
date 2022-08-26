import { Button, Input } from "antd";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormItem from "../FormItem";

const schema = Yup.object().shape({
  username: Yup.string().email().required("E-mail is required"),
  password: Yup.string().required("Password is required"),
});

export default function LoginForm({ loading, onSubmit }) {
  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ values, errors, touched, getFieldProps }) => (
        <Form>
          <FormItem
            label="E-mail"
            htmlFor="username"
            errors={errors}
            touched={touched}
          >
            <Input
              id="username"
              disabled={loading}
              {...getFieldProps("username")}
            />
          </FormItem>

          <FormItem
            label="Password"
            htmlFor="password"
            errors={errors}
            touched={touched}
          >
            <Input.Password
              id="password"
              disabled={loading}
              {...getFieldProps("password")}
            />
          </FormItem>

          <Button htmlType="submit" type="primary" loading={loading} block>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
