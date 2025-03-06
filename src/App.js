import './assets/css/main.css';
import './assets/css/sidebar.css';
import './assets/css/form.css';
import './assets/css/table.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from './pages/Dashboard.js';
import Users from './pages/user/Users.js';
import Setting from './pages/Setting.js'
import AddUser from './pages/user/AddUser.js';
import Login from './pages/Login.js';
import Layout from './components/auth/Layout.js';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users title="Users" />} />
          <Route path="users/addUser" element={<AddUser />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
