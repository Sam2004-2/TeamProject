import React from 'react';
import './App.css'; // so we can reuse some shared styles

function Card({ title, image }) {
  return (
    <div className="card" role="presentation">
      <img 
        src={image} 
        alt="" 
        className="card-image" 
        aria-hidden="true"
      />
      <div className="card-title">{title}</div>
    </div>
  );
}

export default Card;
