import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import { Signup } from './pages/Signup';
import AutoPlay from './components/Carousel';
import { Navbar } from './components/Navbar';
import { AllRoutes } from './components/AllRoutes';

function App() {
  return (
    <div className="App">
          <Navbar/>
         <AllRoutes/>
    </div>
  );
}

export default App;
