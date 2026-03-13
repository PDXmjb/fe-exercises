import { Link } from 'react-router-dom';
import './styles.scss';

export default function ModalDialog() {
  return (
    <div className="exercise">
      <header className="exercise-header">
        <Link to="/" className="back-link">
          &larr; Back
        </Link>
        <h1>Modal Dialog</h1>
        <p className="difficulty intermediate">Intermediate</p>
      </header>

      <section className="requirements">
        <h2>Requirements</h2>
        <ul>
          <li>Open modal with button click</li>
          <li>Close with X button, overlay click, or Escape key</li>
          <li>Trap focus within modal when open</li>
          <li>Prevent body scroll when modal is open</li>
          <li>Use React Portal to render at document root</li>
          <li>Proper ARIA attributes</li>
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
