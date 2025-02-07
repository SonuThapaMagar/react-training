import './assets/css/main.css';
import { BrowserRouter, Routes, Route } from "react-router";

import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Setting from './pages/Setting'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
      <Header />
      <div className="main_wrapper">
        <Sidebar />

        <div className="main_body">
          <div className="body">
            <h4>Body</h4>
          </div>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
