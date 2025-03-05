import React, { useState } from 'react'
import '../../assets/css/login.css';
import { useNavigate } from "react-router";

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
  const handleLogin = () => {
    if (user.username === 'admin' && user.password === 'admin') {
      console.log("Login success");
      navigate("/admin/dashboard");
    }
    else {
      console.log("Incorrect username or password");
    }
  }
  return (

    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={user.username} onChange={handleUsernameChange}
          placeholder="Enter your username"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password} onChange={handlePasswordChange}
          placeholder="Enter your password"
        />

        <button type="button" onClick={handleLogin} className="btn-login">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
