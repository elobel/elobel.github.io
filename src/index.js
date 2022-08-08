import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Engineer from './components/Engineer/Engineer'
import Actor from './components/Actor/Actor'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/engineer' element={<Engineer />} />
      <Route path='/actor' element={<Actor />} />
    </Routes>
  </BrowserRouter>
);
