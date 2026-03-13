import { Link } from "react-router-dom";
import "./styles.css";

export default function Spreadsheet() {
	return (
		<div className="exercise">
			<header className="exercise-header">
				<Link to="/" className="back-link">
					&larr; Back
				</Link>
				<h1>Spreadsheet / Grid Editor</h1>
				<p className="difficulty expert">Expert</p>
			</header>

			<section className="requirements">
				<h2>Requirements</h2>
				<ul>
					<li>Grid of editable cells (rows × columns)</li>
					<li>Click to select, double-click to edit</li>
					<li>Keyboard navigation (arrows, Tab, Enter)</li>
					<li>Basic formulas: =SUM(A1:A5), =A1+B1</li>
					<li>Cell references update when dependencies change</li>
					<li>Copy/paste support</li>
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
