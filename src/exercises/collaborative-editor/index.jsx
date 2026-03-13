import { Link } from 'react-router-dom';
import './styles.scss';

export default function CollaborativeEditor() {
  return (
    <div className="exercise">
      <header className="exercise-header">
        <Link to="/" className="back-link">
          &larr; Back
        </Link>
        <h1>Collaborative Text Editor</h1>
        <p className="difficulty expert">Expert</p>
      </header>

      <section className="requirements">
        <h2>Requirements</h2>
        <ul>
          <li>Rich text editing (bold, italic, lists)</li>
          <li>Real-time sync between multiple clients</li>
          <li>Conflict resolution (OT or CRDT approach)</li>
          <li>Show other users' cursors</li>
          <li>Handle network disconnection gracefully</li>
          <li>WebSocket or similar for real-time updates</li>
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
