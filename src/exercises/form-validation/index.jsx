import { Link } from "react-router-dom";
import "./styles.css";

export default function FormValidation() {
	return (
		<div className="exercise">
			<header className="exercise-header">
				<Link to="/" className="back-link">
					&larr; Back
				</Link>
				<h1>Form Validation</h1>
				<p className="difficulty intermediate">Intermediate</p>
			</header>

			<section className="requirements">
				<h2>Requirements</h2>
				<ul>
					<li>Multiple field types: text, email, password, select</li>
					<li>Real-time validation as user types</li>
					<li>Display error messages per field</li>
					<li>Disable submit until form is valid</li>
					<li>Show success state on valid submit</li>
					<li>Password confirmation matching</li>
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
