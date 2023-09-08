

import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";



import Home from './components/Home/Home';
import Lector from './components/Lector/Lector';
import SingUp from './components/SingUp/SingUp';
import SingIn from './components/SingIn/SingIn';
import NotFound from './components/NotFound/NotFound';
import Upload from './components/Upload/Upload';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/lector/:videoId" element={<Lector />} />
    <Route path="/singup" element={<SingUp />} />
    <Route path="/singin" element={<SingIn />} />
    <Route path="/upload" element={<Upload />} />
    <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  );
}



export default App;
