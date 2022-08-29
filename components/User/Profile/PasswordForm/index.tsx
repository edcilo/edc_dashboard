import { SaveOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormItem from "@/components/FormItem";
import { IPasswordProps } from "@/interfaces/user";

const schema = Yup.object().shape({
  current_password: Yup.string().required("Current password is required"),
  password: Yup.string().required("New password is required"),
  password_confirmation: Yup.string().required(
    "Password confirmation is required"
  ),
});

export default function PasswordForm({
  submitErrors,
  loading,
  onSubmit,
}: IPasswordProps): JSX.Element {
  const initialValues = {
    current_password: "",
    password: "",
    password_confirmation: "",
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
            label="Current password"
            htmlFor="current_password"
            errors={{ ...errors, ...submitErrors }}
            touched={touched}
          >
            <Input.Password
              id="current_password"
              disabled={loading}
              {...getFieldProps("current_password")}
            />
          </FormItem>

          <FormItem
            label="New password"
            htmlFor="password"
            errors={{ ...errors, ...submitErrors }}
            touched={touched}
          >
            <Input.Password
              id="password"
              disabled={loading}
              {...getFieldProps("password")}
            />
          </FormItem>

          <FormItem
            label="Password confirmation"
            htmlFor="password_confirmation"
            errors={{ ...errors, ...submitErrors }}
            touched={touched}
          >
            <Input.Password
              id="password_confirmation"
              disabled={loading}
              {...getFieldProps("password_confirmation")}
            />
          </FormItem>

          <Button
            htmlType="submit"
            type="primary"
            icon={<SaveOutlined />}
            loading={loading}
          >
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
}
