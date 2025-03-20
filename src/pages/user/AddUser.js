import React, { useState, useEffect } from "react";
import { Card, Button, Form, Input, InputNumber, Select } from "antd";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import { createUser, getUser, updateUser } from "../../Utils/User.util";

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const AddUser = () => {
  let params = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    age: 0,
  });

  useEffect(() => {
    if (params.userId) {
      getUser(params.userId).then((data) => {
        setFormState(data);
        form.setFieldsValue(data);
      });
    }
  }, []);

  const onFinish = async (values) => {
    if (!params.userId) {
      await createUser(values);
    } else {
      await updateUser(params.userId, values);
    }
    navigate("/admin/users");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card variant="borderless" style={{ width: 300 }}>
      <h2>{params.userId ? "Edit User" : "Add User"}</h2>
      <Form
        {...layout}
        form={form}
        name="nest-messages"
        onFinish={onFinish}
        style={{
          width: 600,
        }}
        validateMessages={validateMessages}
        initialValues={{
          user: {
            name: formState.name,
            email: formState.email,
            age: formState.age,
          },
        }}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "age"]}
          label="Age"
          rules={[
            {
              type: "number",
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
export default AddUser;
