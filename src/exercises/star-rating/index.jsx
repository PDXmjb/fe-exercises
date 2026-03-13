import { Link } from "react-router-dom";
import "./styles.css";

export default function StarRating() {
	return (
		<div className="exercise">
			<header className="exercise-header">
				<Link to="/" className="back-link">
					&larr; Back
				</Link>
				<h1>Star Rating</h1>
				<p className="difficulty beginner">Novice</p>
			</header>

			<section className="requirements">
				<h2>Requirements</h2>
				<ul>
					<li>Display 5 stars</li>
					<li>Hover to preview rating</li>
					<li>Click to set rating</li>
					<li>Display current rating value</li>
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
