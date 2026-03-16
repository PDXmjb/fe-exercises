import { Link } from 'react-router-dom';
import './styles.scss';
import Accordion from './Accordion';

export default function AccordionExercise() {
  return (
    <div className="exercise">
      <header className="exercise-header">
        <Link to="/" className="back-link">
          &larr; Back
        </Link>
        <h1>Accordion</h1>
        <p className="difficulty beginner">Novice</p>
      </header>

      <section className="requirements">
        <h2>Requirements</h2>
        <ul>
          <li>Multiple collapsible sections</li>
          <li>Click header to expand/collapse content</li>
          <li>Only one section open at a time (optional: allow multiple)</li>
          <li>Animate expand/collapse transition</li>
        </ul>
      </section>

      <section className="workspace">
        <h2>Your Solution</h2>
        <Accordion allowMultiple>
          <Accordion.Title>Hello there General Kenobi</Accordion.Title>
          <Accordion.Item title="Hello accordion">
            <span>Hello!</span>
          </Accordion.Item>
          <Accordion.Item title="Goodbye accordion">
            <span>Goodbye!</span>
          </Accordion.Item>
          <Accordion.Item>
            <span>Goodbye!</span>
          </Accordion.Item>
        </Accordion>
      </section>
    </div>
  );
}
