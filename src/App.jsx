import './App.css';
import 'normalize.css';
import { Routes, Route} from 'react-router-dom';
import Header from './components/UI/Header';
import Home from './components/Pages/Home';
import Footer from './components/UI/Footer';
import Login from './components/Pages/Login';

function App() {
  return (
  <>
    <Header/>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      
    </Routes>
    <Footer/>
  </>
  );
}

export default App;
