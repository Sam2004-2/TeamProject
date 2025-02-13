// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Overview from './pages/Overview';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      {/* NavBar at the top */}
      <NavBar />

      {/* Main content area (skip-link target) */}
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/details/:cardId" element={<Details />} />
          {/* Add additional routes as needed */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
