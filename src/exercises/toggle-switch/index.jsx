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
      <header className="exercise__header">
        <Link className="back__link" to="/">
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
            a11y-button="Changes the toggle to on"
            className={activeToggle === 'on' ? 'active' : ''}
            type="button"
            onClick={() => toggleSwitch('on')}
          >
            On
          </button>
          <button
            a11y-button="Changes the toggle to off"
            className={activeToggle === 'off' ? 'active' : ''}
            type="button"
            onClick={() => toggleSwitch('off')}
          >
            Off
          </button>
        </div>
      </section>
    </div>
  );
}
