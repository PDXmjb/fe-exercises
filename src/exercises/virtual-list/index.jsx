import { Link } from 'react-router-dom';
import './styles.scss';

export default function VirtualList() {
  return (
    <div className="exercise">
      <header className="exercise-header">
        <Link to="/" className="back-link">
          &larr; Back
        </Link>
        <h1>Virtual List (Windowing)</h1>
        <p className="difficulty expert">Expert</p>
      </header>

      <section className="requirements">
        <h2>Requirements</h2>
        <ul>
          <li>Render 10,000+ items efficiently</li>
          <li>Only render visible items in the DOM</li>
          <li>Smooth scrolling experience</li>
          <li>Handle variable row heights (bonus)</li>
          <li>Maintain scroll position on data update</li>
          <li>No external virtualization library</li>
        </ul>
      </section>

      <section className="workspace">
        <h2>Your Solution</h2>
        {/* Build your solution here */}
        <p className="placeholder">Start coding!</p>
      </section>
    </div>
  );
}
