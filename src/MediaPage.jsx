import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MediaPage.css';

function MediaPage() {
  const navigate = useNavigate();

  return (
    <div className="media-page-container">
      <div className="header-section">
        <button onClick={() => navigate(-1)} className="back-button">
          <img src="/icons/Back-Arrow.png" alt="Go back" className="back-icon" />
        </button>
        <h1 className="section-heading">Media Page</h1>
      </div>
      <div className="media-content">
        <h2 className="media-page-heading">Media Page Placeholder</h2>
        <h3 className="media-subheading">Select, add or remove images to your plan here!</h3>
      </div>
    </div>
  );
}

export default MediaPage; 