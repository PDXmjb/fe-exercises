import { Link } from 'react-router-dom';
import './styles.scss';

export default function DataTable() {
  return (
    <div className="exercise">
      <header className="exercise-header">
        <Link to="/" className="back-link">
          &larr; Back
        </Link>
        <h1>Data Table with Sorting/Filtering</h1>
        <p className="difficulty advanced">Advanced</p>
      </header>

      <section className="requirements">
        <h2>Requirements</h2>
        <ul>
          <li>Display tabular data with multiple columns</li>
          <li>Click column header to sort (asc/desc)</li>
          <li>Text filter to search across columns</li>
          <li>Pagination or virtual scrolling for large datasets</li>
          <li>Optimize re-renders with useMemo</li>
          <li>Column resize (bonus)</li>
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
