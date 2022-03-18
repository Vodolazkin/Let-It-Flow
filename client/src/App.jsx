import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Slider from './components/Slider/Slider';





function App() {
  return (
    <BrowserRouter>

      <header>
        <Nav />
      </header>
        <main>
        <Slider />

          <Routes>
            <Route path="/" element={<Main />}/>
          </Routes>
        </main>

      <footer>
      </footer>
    </BrowserRouter>
  );
}

export default App;
