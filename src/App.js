import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Test from './components/Test';
import { useState } from 'react';

function App() {
  const [pokusaji, setPokusaji] = useState([])
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/rezultati' />
        <Route path='/' element={<Test onSubmit={val => {
          setPokusaji(prev => [...prev, val])
        }} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
