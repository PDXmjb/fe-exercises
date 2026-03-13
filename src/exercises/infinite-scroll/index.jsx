import { Link } from 'react-router-dom'
import './styles.css'

export default function InfiniteScroll() {
  return (
    <div className="exercise">
      <header className="exercise-header">
        <Link to="/" className="back-link">&larr; Back</Link>
        <h1>Infinite Scroll</h1>
        <p className="difficulty intermediate">Intermediate</p>
      </header>

      <section className="requirements">
        <h2>Requirements</h2>
        <ul>
          <li>Load initial batch of items</li>
          <li>Detect when user scrolls near bottom</li>
          <li>Fetch and append next batch</li>
          <li>Show loading indicator while fetching</li>
          <li>Handle end of data gracefully</li>
          <li>Use Intersection Observer API</li>
        </ul>
      </section>

      <section className="workspace">
        <h2>Your Solution</h2>
        {/* Build your solution here */}
        <p className="placeholder">Start coding!</p>
      </section>
    </div>
  )
}
