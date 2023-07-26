import './App.css';
import './sass/main.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {MainPage} from "./Pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
