import React from 'react';
import './App.css';
import Card from './card';
import { cardData } from './cardData';

function App() {
  return (
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
            <span className="sidebar-icon">📝</span> Plan
          </button>
          <button className="sidebar-btn goals-btn">
            <span className="sidebar-icon">🎯</span> Goals
          </button>
          <button className="sidebar-btn notes-btn">
            <span className="sidebar-icon">🗒️</span> Notes
          </button>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <div className="top-menu">
          <div className="menu-item messages">Messages</div>
          <div className="menu-item media">Media</div>
          <div className="menu-item calendar">Calendar</div>
        </div>
        <div className="cards-grid">
          {cardData.map((item) => (
            <Card key={item.id} title={item.title} image={item.image} />
          ))}
        </div>
      </main>

      {/* Branding */}
      <div className="branding-top-right">
        <img
          src="https://aspirico.com/wp-content/uploads/2023/01/iplanit-with-tagline-01-011.png"
          alt="iplanit by Aspirico"
          className="branding-logo"
        />
      </div>
      <div className="branding-bottom-right">
        <img
          src="/images/st-john-of-god.png"
          alt="St John of God"
          className="branding-logo"
        />
      </div>
    </div>
  );
}

export default App;
