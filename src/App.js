import './assets/css/main.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div>
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
