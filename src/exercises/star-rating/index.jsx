import { Link } from 'react-router-dom';
import './styles.scss';
import { useState } from 'react';

export default function StarRating() {
  const [rating, _setRating] = useState(0);

  const emptyStarIcon = '☆';
  const fullStarIcon = '★';
  let starRating = '';

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      starRating += fullStarIcon;
      return;
    }
    starRating += emptyStarIcon;
  }

  return (
    <div className="exercise">
      <header className="exercise-header">
        <Link to="/" className="back-link">
          &larr; Back
        </Link>
        <h1>Star Rating</h1>
        <p className="difficulty beginner">Novice</p>
      </header>

      <section className="requirements">
        <h2>Requirements</h2>
        <ul>
          <li>Display 5 stars</li>
          <li>Hover to preview rating</li>
          <li>Click to set rating</li>
          <li>Display current rating value</li>
        </ul>
      </section>

      <section className="workspace">
        <h2>Your Solution</h2>
        <span>{starRating}</span>
      </section>
    </div>
  );
}
