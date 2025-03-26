import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function CardDetail() {
  const { id } = useParams();      // /card/:id
  const navigate = useNavigate();
  const [card, setCard] = useState(null);

  useEffect(() => {
    fetch('/data/cards.json')
      .then((response) => response.json())
      .then((data) => {
        // find the card with matching ID
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

  // If your card has a "details" object, extract it
  const { title, details } = card;
  const { description, images } = details || {};

  return (
    <div className="card-detail-container">
      {/* A back arrow or button to return to the previous page */}
      <button onClick={() => navigate(-1)} className="back-button">
        &#x2190; Back
      </button>

      <h2>{title}</h2>
      {description && <p>{description}</p>}

      {/* If you have multiple images, display them */}
      {images && images.length > 0 && (
        <div className="image-gallery">
          {images.map((imgSrc, idx) => (
            <img key={idx} src={imgSrc} alt={`Detail ${idx}`} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CardDetail;
