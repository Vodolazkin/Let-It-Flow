import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Slider from './components/Slider/Slider';
import Login from './components/User/Login/Login';
import Remind from './components/User/Remind/Remind';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <BrowserRouter>

      <header>
        <Nav />
        <Slider />

      </header>
        <main>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/remind" element={<Remind />}/>
          </Routes>
        </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
