import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './Components/About';
import MainPart from './Components/MainPart';
import ErrorPage from './Components/ErrorPage';
import Contactme from './Components/Contactme';
import Contacts from './Components/Contacts';
import './App.css';

export default function App() {
  const [mode, setMode] = useState('dark');

  const togglemode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.classList.toggle('dark', mode === 'dark');
    document.body.classList.toggle('light', mode === 'light');
  }, [mode]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPart mode={mode} togglemode={togglemode} />} />
        <Route path="/about" element={<About mode={mode} togglemode={togglemode} />} />
        <Route path="/contactme" element={<Contactme mode={mode} togglemode={togglemode} />} />
        <Route path="/contacts" element={<Contacts mode={mode} togglemode={togglemode} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}