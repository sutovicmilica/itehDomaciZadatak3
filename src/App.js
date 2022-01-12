import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Test from './components/Test';
import { useState } from 'react';
import Odgovori from './components/Odgovori';

function App() {
  const [pokusaji, setPokusaji] = useState([])
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/rezultati' element={<Odgovori pokusaji={pokusaji} onReset={() => { setPokusaji([]) }} />} />
        <Route path='/' element={<Test onSubmit={val => {
          setPokusaji(prev => [...prev, val])
        }} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
