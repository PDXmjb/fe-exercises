import { Link } from 'react-router-dom';
import './styles.scss';
import TabsContainer from './TabsContainer';

export default function Tabs() {
  return (
    <div className="exercise">
      <header className="exercise-header">
        <Link to="/" className="back-link">
          &larr; Back
        </Link>
        <h1>Tabs Component</h1>
        <p className="difficulty beginner">Novice</p>
      </header>

      <section className="requirements">
        <h2>Requirements</h2>
        <ul>
          <li>Multiple tab buttons</li>
          <li>Click tab to show corresponding content</li>
          <li>Visual indicator for active tab</li>
          <li>Keyboard navigation (arrow keys)</li>
        </ul>
      </section>

      <section className="workspace">
        <h2>Your Solution</h2>
        <TabsContainer>
          <TabsContainer.Tab label="Hello">
            <p>Hello world!</p>
          </TabsContainer.Tab>
          <TabsContainer.Tab label="Goodbye">
            <p>Goodbye world!</p>
          </TabsContainer.Tab>
        </TabsContainer>
      </section>
    </div>
  );
}
