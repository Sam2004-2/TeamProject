import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CardDetail.css';

function CardDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    fetch('/data/cards.json')
      .then((response) => response.json())
      .then((data) => {
        const foundCard = data.find((item) => item.id === parseInt(id, 10));
        setCard(foundCard);
      })
      .catch((error) => {
        console.error('Error fetching card data:', error);
      });
  }, [id]);

  if (!card) {
    return <p>Loading...</p>;
  }

  const { title, details } = card;
  const { description, images } = details || {};

  // Handle clicking on a thumbnail to switch the main image
  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  // Handle navigation between images
  const handlePreviousImage = () => {
    if (images && images.length > 0) {
      setSelectedImageIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNextImage = () => {
    if (images && images.length > 0) {
      setSelectedImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <div className="card-detail-container">
      {/* Header section with back arrow and section heading */}
      <div className="header-section">
        <button onClick={() => navigate(-1)} className="back-button">
          <img
            src="/icons/Back-Arrow.png"
            alt="Go back"
            className="back-icon"
          />
        </button>
        <h1 className="section-heading">{title}</h1>
      </div>

      {/* Top section: main image on the left, text on the right */}
      <div className="top-section">
        <div className="image-section">
          {images && images.length > 0 && (
            <div className="image-container">
              <img
                src={images[selectedImageIndex]}
                alt={`${title} - image ${selectedImageIndex + 1}`}
                className="main-image"
              />
              <div className="image-navigation">
                <button className="nav-button prev-button" onClick={handlePreviousImage}>
                  <img
                    src="/icons/leftArrow.png"
                    alt="Previous image"
                    className="nav-icon"
                  />
                </button>
                <button className="nav-button next-button" onClick={handleNextImage}>
                  <img
                    src="/icons/rightArrow.png"
                    alt="Next image"
                    className="nav-icon"
                  />
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="text-section">
          <h2 className="task-title">Sub-heading</h2>
          {description && <p className="task-description">{description}</p>}
        </div>
      </div>

      {/* Bottom section: thumbnails row */}
      {images && images.length > 1 && (
        <div className="thumbnails-section">
          {images.map((imgSrc, idx) => (
            <img
              key={idx}
              src={imgSrc}
              alt={`${title} thumbnail ${idx + 1}`}
              className={`thumbnail ${idx === selectedImageIndex ? 'selected' : ''}`}
              onClick={() => handleThumbnailClick(idx)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CardDetail;