import { Link } from 'react-router-dom';
import './styles.scss';

export default function MultiStepForm() {
  async function mutateData(data) {
    const response = await fetch('https://my-login.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(data)),
    });

    if (!response.ok) {
      throw new Error('Unable to log in, try again later.');
    }
  }
  const submitFormHandler = (data) => {
    mutateData(data);
  };
  return (
    <div className="exercise">
      <header className="exercise-header">
        <Link className="back-link" to="/">
          &larr; Back
        </Link>
        <h1>Multi-step Form Wizard</h1>
        <p className="difficulty advanced">Advanced</p>
      </header>

      <section className="requirements">
        <h2>Requirements</h2>
        <ul>
          <li>Multiple form steps/pages</li>
          <li>Progress indicator showing current step</li>
          <li>Next/Previous navigation</li>
          <li>Validate each step before proceeding</li>
          <li>Preserve data when navigating between steps</li>
          <li>Review step before final submit</li>
        </ul>
      </section>

      <section className="workspace">
        <h2>Your Solution</h2>
        <form className="login__form" id="login" onSubmit={submitFormHandler}>
          <label htmlFor="email">Email</label>
          <input required id="email" name="email" type="email" />
          <label htmlFor="password">Password</label>
          <input required id="password" name="password" type="password" />
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}
