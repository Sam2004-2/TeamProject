import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { cardId } = useParams();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Details for: {cardId}</h1>
      <p>This page will later display the full details for the selected card.</p>
    </div>
  );
};

export default Details;
