import './App.css';
import 'normalize.css';
import { Routes, Route} from 'react-router-dom';
import Header from './components/UI/Header';
import Home from './components/Pages/Home';
import Footer from './components/UI/Footer';

function App() {
  return (
  <>
    <Header/>
    <Routes>
      <Route path="/home" element={<Home/>} />
      
    </Routes>
    <Footer/>
  </>
  );
}

export default App;
