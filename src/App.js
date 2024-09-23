import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home_page/HomePage';
import Auth from './pages/authentication/Auth';
import Docs from './pages/docs/Docs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/auth' element={<Auth />} />
        <Route exact path='/docs' element={<Docs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
