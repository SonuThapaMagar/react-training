import "./assets/css/main.css";
import "./assets/css/sidebar.css";
import "./assets/css/form.css";
import "./assets/css/table.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.js";
import Users from "./pages/user/Users.js";
import Setting from "./pages/Setting.js";
import AddUser from "./pages/user/AddUser.js";
import Login from "./pages/Login.js";
import CustomLayout from "./components/Layout.js";
import UserDetails from "./pages/user/UserDetails.js";
import { UserContext } from "./context API/user.context.js";

const App = () => {
  const [_user, _setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  return (
    <UserContext.Provider value={{ _user, _setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<CustomLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users title="Users" />} />
            <Route path="users/addUser" element={<AddUser />} />
            <Route path="users/editUser/:userId" element={<AddUser />} />
            <Route path="users/userDetails/:userId" element={<UserDetails />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};
export default App;
