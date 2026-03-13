import { Link } from 'react-router-dom'
import './styles.css'

export default function TodoList() {
  return (
    <div className="exercise">
      <header className="exercise-header">
        <Link to="/" className="back-link">&larr; Back</Link>
        <h1>Todo List</h1>
        <p className="difficulty intermediate">Intermediate</p>
      </header>

      <section className="requirements">
        <h2>Requirements</h2>
        <ul>
          <li>Add new todos via input field</li>
          <li>Mark todos as complete/incomplete</li>
          <li>Delete todos</li>
          <li>Filter by: All, Active, Completed</li>
          <li>Persist to localStorage</li>
          <li>Show remaining count</li>
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
