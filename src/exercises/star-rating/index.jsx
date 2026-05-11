import { Link } from 'react-router-dom';
import './styles.scss';
import { useMemo, useState } from 'react';

export default function StarRating() {
  const [rating, setRating] = useState(0);

  const emptyStarIcon = '☆';
  const NUMBER_OF_STARS = 5;
  const fullStarIcon = '★';

  const starRating = useMemo(() => {
    let stars = [];
    for (let i = 0; i < NUMBER_OF_STARS; i++) {
      if (i < rating) {
        stars = [...stars, fullStarIcon];
        continue;
      }
      stars = [...stars, emptyStarIcon];
    }
    return stars;
  }, [rating]);

  console.log(starRating);

  const starClickHandler = (index) => {
    setRating(index + 1);
  };

  const starHoverHandler = (index) => {
    console.log(index);
  };

  return (
    <div className="exercise">
      <header className="exercise__header">
        <Link className="back__link" to="/">
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
        <div>
          {starRating.map((star, index) => (
            <button
              key={star + crypto.randomUUID()}
              type="button"
              onClick={() => starClickHandler(index)}
              onFocus={starHoverHandler}
              onMouseOver={() => starHoverHandler(index)}
            >
              {star}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
