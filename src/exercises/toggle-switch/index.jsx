import { Link } from "react-router-dom";
import "./styles.css";

export default function ToggleSwitch() {
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
				{/* Build your solution here */}
				<p className="placeholder">Start coding!</p>
			</section>
		</div>
	);
}
