// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Card from './card';
import CardDetail from './CardDetail'; // The new detail page

function App() {
  const [cards, setCards] = useState([]);

  // Fetch card data from JSON once on mount
  useEffect(() => {
    fetch('/data/cards.json')
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error('Error fetching card data:', error));
  }, []);

  return (
    <Router>
      <div className="app-container">
        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="profile-section">
            <img
              src="https://media.istockphoto.com/id/1289220545/photo/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=qmOTkGstKj1qN0zPVWj-n28oRA6_BHQN8uVLIXg0TF8="
              alt="Profile"
              className="profile-pic"
            />
            <h3 className="profile-name">Laura King</h3>
          </div>
        <nav className="sidebar-menu">
          <button className="sidebar-btn plan-btn">
            <img 
              src="/icons/Noun.png" 
              alt="Plan Icon" 
              className="sidebar-icon"
            /> Plan
          </button>
          <button className="sidebar-btn goals-btn">
            <img 
              src="/icons/Goals.png" 
              alt="Goals Icon" 
              className="sidebar-icon"
            /> Goals
          </button>
          <button className="sidebar-btn notes-btn">
            <img 
              src="/icons/Notes.png" 
              alt="Notes Icon" 
              className="sidebar-icon"
            /> Notes
          </button>
        </nav>
        </aside>

        {/* MAIN CONTENT */}
        <main className="main-content">
          <div className="top-menu">
            <div className="menu-item messages">
              <img
                src="/icons/Message.png"
                alt="Messages Icon"
                className="menu-icon"
              />
              Messages
            </div>
            <div className="menu-item media">
              <img
                src="/icons/Media.png"
                alt="Media Icon"
                className="menu-icon"
              />
              Media
            </div>
            <div className="menu-item calendar">
              <img
                src="/icons/Calendar.png"
                alt="Calendar Icon"
                className="menu-icon"
              />
              Calendar
            </div>
          </div>

          {/* Define our routes here */}
          <Routes>
            {/* HOME / CARD GRID */}
            <Route
              path="/"
              element={
                <div className="cards-grid">
                  {cards.map((item) => (
                    <Link
                      key={item.id}
                      to={`/card/${item.id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <Card title={item.title} image={item.image} />
                    </Link>
                  ))}
                </div>
              }
            />

            {/* DETAIL PAGE FOR EACH CARD */}
            <Route path="/card/:id" element={<CardDetail />} />
          </Routes>
        </main>

        {/* Branding */}
        <div className="branding-top-right">
          <img
            src="https://aspirico.com/wp-content/uploads/2023/01/iplanit-with-tagline-01-011.png"
            alt="iplanit by Aspirico"
            className="branding-logo"
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
