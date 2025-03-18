import React, { useState, useEffect } from "react";
import { Card, Button, Form, Input, InputNumber, Select } from "antd";
import { useParams, useNavigate } from "react-router";
import axios from "axios";

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
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: 0,
  });

  useEffect(() => {
    if (params.userId) {
      axios
        .get(`http://localhost:4000/users/${params.userId}`)
        .then(function (response) {
          // handle success
          setUser(response.data);
          form.setFieldsValue({
            user: {
              name: response.data.name,
              email: response.data.email,
              age: response.data.age,
            },
          });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }, [params.userId, form]);

  const onFinish = (values) => {
    const userData = values.user;
    if (!params.userId) {
      axios
        .post(`http://localhost:4000/users`, userData)
        .then(function (response) {
          // handle success
          navigate("/admin/users");
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    } else {
      axios
        .patch(`http://localhost:4000/users/${params.userId}`, userData)
        .then(function (response) {
          // handle success
          navigate("/admin/users");
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  };

  return (
    <Card title="Add User" variant="borderless" style={{ width: 300 }}>
      <h2>{params.userId ? "Edit" : "Add"}</h2>
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
            name: user.name,
            email: user.email,
            age: user.age,
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