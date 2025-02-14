import './assets/css/main.css';
import './assets/css/sidebar.css';
import './assets/css/table.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Dashboard from './pages/Dashboard.js';
import Users from './pages/user/Users.js';
import Setting from './pages/Setting.js'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="main_wrapper">
        <Sidebar />
        <div className="main_body">
          <div className="body">
          <Routes>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/users" element={<Users title="Users"/>} />
            <Route path="/admin/setting" element={<Setting />} />
          </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
