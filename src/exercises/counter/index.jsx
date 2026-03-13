import { Link } from "react-router-dom";
import "./styles.css";
import { useState } from "react";

export default function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div className="exercise">
			<header className="exercise-header">
				<Link to="/" className="back-link">
					&larr; Back
				</Link>
				<h1>Counter</h1>
				<p className="difficulty beginner">Novice</p>
			</header>

			<section className="requirements">
				<h2>Requirements</h2>
				<ul>
					<li>Display a count starting at 0</li>
					<li>Increment button increases count by 1</li>
					<li>Decrement button decreases count by 1</li>
					<li>Reset button sets count back to 0</li>
				</ul>
			</section>

			<section className="workspace">
				<h2>Your Solution</h2>
				<h3>Current count: {count}</h3>
				<div className="button-group">
					<button
						onClick={() => {
							setCount(count + 1);
						}}
						className="button-positive"
					>
						Increment
					</button>
					<button
						onClick={() => {
							setCount(count - 1);
						}}
						className="button-negative"
					>
						Decrement
					</button>
					<button
						onClick={() => {
							setCount(0);
						}}
					>
						Reset
					</button>
				</div>
			</section>
		</div>
	);
}
