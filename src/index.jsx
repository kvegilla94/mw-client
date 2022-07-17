import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css';

import Login from './pages/Login';
import Home from './pages/Home';
import News from './pages/News';
import Quest from './pages/Quest';
import Battle from './pages/Battle';
import Monster from './pages/Monster';
import Equipment from './pages/Equipment';
import Shop from './pages/Shop';
import NotFound from './pages/NotFound';
import MainLayout from './components/mainLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route index element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="quest" element={<Quest />} />
        <Route path="battle" element={<Battle />} />
        <Route path="monster" element={<Monster />} />
        <Route path="equipment" element={<Equipment />} />
        <Route path="shop" element={<Shop />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
