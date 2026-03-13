import { Link } from 'react-router-dom';
import './styles.scss';
import { useState } from 'react';

export default function ToggleSwitch() {
  const [activeToggle, setActiveToggle] = useState('on');
  const toggleSwitch = (value) => {
    setActiveToggle(value);
  };

  return (
    <div className="exercise">
      <header className="exercise-header">
        <Link to="/" className="back-link">
          &larr; Back
        </Link>
        <h1>Toggle Switch</h1>
        <p className="difficulty beginner">Novice</p>
      </header>

      <section className="requirements">
        <h2>Requirements</h2>
        <ul>
          <li>Create a toggle switch component</li>
          <li>Smooth CSS transition between states</li>
          <li>Display current state (on/off)</li>
          <li>Accessible with keyboard (Space/Enter)</li>
        </ul>
      </section>

      <section className="workspace">
        <h2>Your Solution</h2>
        <div className={'toggle-switch'}>
          <button
            type="button"
            className={activeToggle === 'on' ? 'active' : ''}
            onClick={() => toggleSwitch('on')}
            a11y-button="Changes the toggle to on"
          >
            On
          </button>
          <button
            type="button"
            className={activeToggle === 'off' ? 'active' : ''}
            onClick={() => toggleSwitch('off')}
            a11y-button="Changes the toggle to off"
          >
            Off
          </button>
        </div>
      </section>
    </div>
  );
}
