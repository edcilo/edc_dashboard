import { SaveOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormItem from "../../FormItem";

const schema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  phone: Yup.string().max(255).required("Phone is required"),
  password: Yup.string().max(255).required("New password is required"),
  name: Yup.string().max(255),
  lastname: Yup.string().max(255),
  second_lastname: Yup.string().max(255),
  role_id: Yup.string().required(),
});

export default function UserForm({
  roles,
  data,
  submitErrors,
  loading,
  onSubmit,
}) {
  const initialValues = {
    email: data?.email || "test+00@example.com",
    phone: data?.phone || "0000000009",
    password: data?.password || "secret",
    name: data?.name || "Jhon",
    lastname: data?.lastname || "Doe",
    second_lastname: data?.second_lastname || "",
    role_id: data?.role_id || "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, errors, touched, getFieldProps }) => (
        <Form>
          <FormItem
            label="Role"
            htmlFor="role_id"
            errors={{ ...errors, ...submitErrors }}
            touched={touched}
          >
            <Select
              id="role_id"
              disabled={loading}
              style={{ width: "100%" }}
              defaultValue="4d27b975-6e56-44cf-9447-f6cf007ec1b8"
              value={values.role_id}
              onChange={(value) =>
                handleChange({ target: { name: "role_id", value } })
              }
            >
              {roles.map((role) => (
                <Select.Option
                  key={`role-${role.id}`}
                  value={role.id}
                  // selected={values.role_id === role.id}
                >
                  {role.name}
                </Select.Option>
              ))}
            </Select>
          </FormItem>

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

          <FormItem
            label="Password"
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
            label="Name"
            htmlFor="name"
            errors={{ ...errors, ...submitErrors }}
            touched={touched}
          >
            <Input id="name" disabled={loading} {...getFieldProps("name")} />
          </FormItem>

          <FormItem
            label="Lastname"
            htmlFor="lastname"
            errors={{ ...errors, ...submitErrors }}
            touched={touched}
          >
            <Input
              id="lastname"
              disabled={loading}
              {...getFieldProps("lastname")}
            />
          </FormItem>

          <FormItem
            label="Second Lastname"
            htmlFor="second_lastname"
            errors={{ ...errors, ...submitErrors }}
            touched={touched}
          >
            <Input
              id="second_lastname"
              disabled={loading}
              {...getFieldProps("second_lastname")}
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
