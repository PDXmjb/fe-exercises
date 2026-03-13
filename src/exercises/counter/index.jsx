import { Link } from 'react-router-dom'
import './styles.css'

export default function Counter() {
  return (
    <div className="exercise">
      <header className="exercise-header">
        <Link to="/" className="back-link">&larr; Back</Link>
        <h1>Counter</h1>
        <p className="difficulty beginner">Novice</p>
      </header>

      <section className="requirements">
        <h2>Requirements</h2>
        <ul>
          <li>Display a count starting at 0</li>
          <li>Increment button increases count by 1</li>
          <li>Decrement button decreases count by 1</li>
          <li>Reset button sets count back to 0</li>
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
