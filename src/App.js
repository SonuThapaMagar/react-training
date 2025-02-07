import './assets/css/main.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/dashboard';

const App = () => {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/" element={<Users />} />
      <Route path="/" element={<Setting />} />
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
    </div>
  );
}
export default App;
