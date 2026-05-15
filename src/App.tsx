import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import MenuItemDetailsPage from './pages/MenuItemDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/menu-item/:id" element={<MenuItemDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;