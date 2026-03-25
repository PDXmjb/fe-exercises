import { Link } from 'react-router-dom';
import './styles.scss';
import Accordion from './Accordion';
import { useState } from 'react';
import { useEffect } from 'react';

// Create a UserList component that fetches users from an API and displays them. Handle loading and error states.
function UserList() {
  // Fetch from: https://jsonplaceholder.typicode.com/users
  // Display: list of user names
  // Show: "Loading..." while fetching
  // Show: "Error: {message}" if fetch fails

  const [users, setUsers] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
        );
        const data = await response.json();
        setUsers(data);
      } catch (e) {
        setError(`Error: ${e}`);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

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
        <UserList />
      </section>
    </div>
  );
}
