import { Link } from 'react-router-dom';
import './styles.scss';
import { useState } from 'react';
import Modal from './Modal';

export default function ModalDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = (isOpen) => {
    setIsOpen((s) => (s = isOpen));
  };
  console.log('OPEN', isOpen);
  return (
    <div className="exercise">
      <header className="exercise__header">
        <Link className="back__link" to="/">
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
        <button type="button" onClick={toggleModal(true)}>
          Open modal
        </button>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <p>Bloop</p>
        <Modal isOpen={isOpen} toggleModal={toggleModal}>
          <div>Content!</div>
          <input id="1" name="1" placeholder="Bleep" type="text" />
          <br />
          <textarea id="2" name="2"></textarea>
        </Modal>
      </section>
    </div>
  );
}
