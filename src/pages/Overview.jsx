import React from 'react';
import { Link } from 'react-router-dom';
import './Overview.css';

const categories = [
  {
    id: 'getting-ready',
    title: 'Getting Ready',
    cards: [
      {
        id: 'intro',
        title: 'Introduction',
        image: '/assets/checklist.png',
        description: 'Learn how to get started.',
      },
      {
        id: 'checklist',
        title: 'Checklist',
        image: '/assets/checklist.png',
        description: 'Your initial checklist.',
      },
    ],
  },
  {
    id: 'putting-plan-together',
    title: 'Putting the Plan Together',
    cards: [
      {
        id: 'planning',
        title: 'Planning',
        image: '/assets/checklist.png',
        description: 'Steps to plan your activities.',
      },
      {
        id: 'overview',
        title: 'Plan Overview',
        image: '/assets/checklist.png',
        description: 'See the full plan at a glance.',
      },
    ],
  },
];

const Overview = () => {
  return (
    <div className="overview">
      {categories.map((category) => (
        <section key={category.id} className="category">
          <h2 className="category-title">{category.title}</h2>
          <div className="cards-container">
            {category.cards.map((card) => (
              <Link key={card.id} to={`/details/${card.id}`} className="card">
                <img
                  src={card.image}
                  alt={card.title}
                  className="card-image"
                />
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Overview;
