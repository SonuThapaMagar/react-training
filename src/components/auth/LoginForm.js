import React, { useState } from 'react'
import '../../assets/css/login.css';
import { useNavigate } from "react-router";
import { Button, Checkbox, Form, Input, Card,Flex } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';


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
          name="login"
          initialValues={{
            remember: true,
          }}
          style={{
            maxWidth: 360,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            value={user.username} onChange={handleUsernameChange}
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            value={user.password} onChange={handlePasswordChange}
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>
          {/* <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href="">Forgot password</a>
            </Flex>
          </Form.Item> */}

          <Form.Item>
            <Button block type="primary" htmlType="submit"  onClick={handleLogin}>
              Log in
            </Button>
            or <a href="">Register now!</a>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default LoginForm
