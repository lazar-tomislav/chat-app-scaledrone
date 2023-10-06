import React from "react";
import SingleMessage from "./SingleMessage";

export default function Messages({ text, currentUser }) {
	return (
		<ul className="text-list">
			{text.map((m, index) => (
				<SingleMessage key={index} message={m} currentUser={currentUser} />
			))}
		</ul>
	);
}
