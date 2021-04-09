import React from "react";
import { Form, Input, Button } from "antd";

const FormItem = Form.Item;

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const LndForm = ({ ref, saveLndAccount, addLndAccountFailure }) => {
  const [form] = Form.useForm();

  const onTest = () => {
    console.log("##### onTest");
  };

  const onCancel = () => {
    console.log("##### onCancel");
  };

  return (
    <Form
      {...layout}
      form={form}
      layout="vertical"
      name="basic"
      onFinishFailed={addLndAccountFailure}
      onFinish={(values) => saveLndAccount(values, form)}
      initialValues={{
        name: "LND",
        url: "",
        macaroon: "",
      }}
    >
      <FormItem
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </FormItem>

      <FormItem
        label="Macaroon"
        name="macaroon"
        rules={[
          {
            required: true,
            message: "Please input the macroon key!",
          },
        ]}
        tooltip="The hex value of the admin.macaroon file"
      >
        <Input />
      </FormItem>

      <FormItem
        label="URL"
        name="url"
        tooltip="The URL for the REST API"
        rules={[
          {
            type: "url",
            required: true,
            message: "Please enter the macroon url!",
          },
        ]}
      >
        <Input />
      </FormItem>
      <FormItem {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
        <Button htmlType="button" onClick={onTest}>
          Test
        </Button>
        <Button htmlType="button" onClick={onCancel}>
          Cancel
        </Button>
      </FormItem>
    </Form>
  );
};

export default LndForm;
