import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

function ProfilePage() {
  const navigate = useNavigate();

  return (
    <div className="profile-page-container">
      <div className="header-section">
        <button onClick={() => navigate(-1)} className="back-button">
          <img src="/icons/Back-Arrow.png" alt="Go back" className="back-icon" />
        </button>
        <h1 className="section-heading">Profile</h1>
      </div>
      <div className="profile-content">
        <h2 className="profile-page-heading">Profile Page Placeholder</h2>
        <h3 className="profile-subheading">View or edit your profile</h3>
      </div>
    </div>
  );
}

export default ProfilePage; 