import React, { useState } from 'react'
import '../../assets/css/login.css';
import { useNavigate } from "react-router";
import { Button, Checkbox, Form, Input } from 'antd';
import { Card } from 'antd';


const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


const LoginForm = () => {

  const navigate = useNavigate();

  const [user, SetUser] = useState(
    {
      username: '',
      password: ''
    }
  )

  const handleUsernameChange = (e) => {

    SetUser({ ...user, username: e.target.value })
  }

  const handlePasswordChange = (e) => {

    SetUser({ ...user, password: e.target.value })
  }

  const [message, setMessage] = useState('');

  const handleLogin = () => {
    if (user.username === 'admin' && user.password === 'admin') {
      setMessage("Login success");
      localStorage.setItem('is_login', 1)
      navigate("/admin/dashboard");
    }
    else {
      setMessage("Incorrect username or password");
      localStorage.setItem('is_login', 0);
    }
  }
  return (

    <div className="login-container">
      <Card
        title="Login"
        variant="borderless"
        style={{
          maxWidth: 600,
        }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            value={user.username} onChange={handleUsernameChange}
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            value={user.password} onChange={handlePasswordChange}
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" label={null}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }} style={{ display: 'flex', justifyContent: 'center' }} label={null}>
            <Button type="primary" htmlType="submit" onClick={handleLogin}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default LoginForm
