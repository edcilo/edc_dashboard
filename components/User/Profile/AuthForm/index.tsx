import { SaveOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormItem from "@/components/FormItem";
import { IAuthProps } from "@/interfaces/user";

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  phone: Yup.string().max(10).required(),
});

export default function AuthForm({
  data,
  submitErrors,
  loading,
  onSubmit,
}: IAuthProps): JSX.Element {
  const initialValues = {
    email: data.email || "",
    phone: data.phone || "",
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
            label="E-Mail"
            htmlFor="email"
            errors={{ ...errors, ...submitErrors }}
            touched={touched}
          >
            <Input id="email" disabled={loading} {...getFieldProps("email")} />
          </FormItem>

          <FormItem
            label="Phone"
            htmlFor="phone"
            errors={{ ...errors, ...submitErrors }}
            touched={touched}
          >
            <Input id="phone" disabled={loading} {...getFieldProps("phone")} />
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
