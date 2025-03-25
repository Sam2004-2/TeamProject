import React from 'react';
import './App.css'; // so we can reuse some shared styles

function Card({ title, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h4 className="card-title">{title}</h4>
    </div>
  );
}

export default Card;
