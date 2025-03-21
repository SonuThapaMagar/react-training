import React, { useState, useContext } from "react";
import "../../assets/css/login.css";
import { useNavigate } from "react-router";
import { Button, Form, Input, Card } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { UserContext } from "../../context API/user.context";
import { checkLogin } from "../../Utils/User.util";
import {showErrorToast,showSuccessToast} from '../../Utils/toastify.util'

const LoginForm = () => {
  const { _setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const [user, SetUser] = useState({
    email: "",
    password: "",
  });

  const onFinish = (values) => {
    console.log("Success:", values);
    checkLogin(values.email, values.password).then((data) => {
      if (data === null) {
        showErrorToast("Incorrect username or password !");
        setMessage("Incorrect username or password");
      } else {
        setMessage("Login successful");
        showSuccessToast("Login successful");
        _setUser(data);
        localStorage.setItem("is_login", 1);
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/admin/users");
      }
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const handleUsernameChange = (e) => {
  //   SetUser({ ...user, username: e.target.value });
  // };

  // const handlePasswordChange = (e) => {
  //   SetUser({ ...user, password: e.target.value });
  // };

  // const handleLogin = () => {
  //   if (user.username === "admin" && user.password === "admin") {
  //     setMessage("Login success");
  //     localStorage.setItem("is_login", 1);
  //     navigate("/admin/dashboard");
  //   } else {
  //     setMessage("Incorrect username or password");
  //     localStorage.setItem("is_login", 0);
  //   }
  // };
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
            name="email"
            value={user.email}
            // onChange={handleUsernameChange}
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            value={user.password}
            // onChange={handlePasswordChange}
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
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
            <Button
              block
              type="primary"
              htmlType="submit"
              // onClick={handleLogin}
            >
              Log in
            </Button>
            or <a href="">Register now!</a>
          </Form.Item>
        </Form>
        {message && <div>{message}</div>}
      </Card>
    </div>
  );
};

export default LoginForm;
