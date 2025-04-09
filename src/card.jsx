import React from 'react';
import './App.css'; // so we can reuse some shared styles

function Card({ title, image }) {
  return (
    <div className="card" role="article">
      <img 
        src={image} 
        alt="" 
        className="card-image" 
        aria-hidden="true"
      />
      <h4 className="card-title">{title}</h4>
    </div>
  );
}

export default Card;
