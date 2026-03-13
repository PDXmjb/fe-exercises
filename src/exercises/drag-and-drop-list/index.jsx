import { Link } from 'react-router-dom';
import './styles.scss';

export default function DragAndDropList() {
  return (
    <div className="exercise">
      <header className="exercise-header">
        <Link to="/" className="back-link">
          &larr; Back
        </Link>
        <h1>Drag and Drop List</h1>
        <p className="difficulty intermediate">Intermediate</p>
      </header>

      <section className="requirements">
        <h2>Requirements</h2>
        <ul>
          <li>List of reorderable items</li>
          <li>Drag item to new position</li>
          <li>Visual feedback during drag (placeholder/ghost)</li>
          <li>Drop indicator showing insertion point</li>
          <li>Update list order on drop</li>
          <li>Use HTML5 Drag and Drop or Pointer Events</li>
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
