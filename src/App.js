import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/rezultati' />
        <Route path='/' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
