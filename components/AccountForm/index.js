import { SaveOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormItem from "../FormItem";

const schema = Yup.object().shape({
  name: Yup.string().max(255),
  lastname: Yup.string().max(255),
  second_lastname: Yup.string().max(255),
});

export default function AccountForm({ data, submitErrors, loading, onSubmit }) {
  const initialValues = {
    name: data?.name || "",
    lastname: data?.lastname || "",
    second_lastname: data?.second_lastname || "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, getFieldProps }) => (
        <Form>
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
