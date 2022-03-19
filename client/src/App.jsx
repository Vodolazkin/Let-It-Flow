import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
// import Slider from './components/Slider/Slider';
import Login from './components/User/Login/Login';
import Remind from './components/User/Remind/Remind';
import Footer from './components/Footer/Footer';
import Signup from './components/User/Signup/Signup';
import Categories from './components/Categories/Categories';
import Category from './components/Category/Category'

function App() {
  return (
    <BrowserRouter>

      <header>
        <Nav />
      </header>
        <main>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/remind" element={<Remind />}/>
            <Route path="/categories" element={<Categories />}/>
            <Route path="/categories/:id" element={<Category />}/>
          </Routes>
        </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
