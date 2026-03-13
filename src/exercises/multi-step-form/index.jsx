import { Link } from "react-router-dom";
import "./styles.css";

export default function MultiStepForm() {
	return (
		<div className="exercise">
			<header className="exercise-header">
				<Link to="/" className="back-link">
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
				{/* Build your solution here */}
				<p className="placeholder">Start coding!</p>
			</section>
		</div>
	);
}
