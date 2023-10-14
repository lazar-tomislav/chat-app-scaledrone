import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

export default function SendMessageInput({ onSendMessage }) {
	const [text, setText] = useState("");
	const [showAlert, setShowAlert] = useState(false);

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (text.trim() === "") {
			setShowAlert(true);
			setTimeout(() => {
				setShowAlert(false); // Hide alert after 3 seconds
			}, 3000); // 3000 milliseconds (3 seconds)
		} else {
			onSendMessage(text);
			setText("");
			setShowAlert(false);
		}
	};

	return (
		<div className="custom-input">
			<form onSubmit={handleSubmit} style={{ margin: 0, maxWidth: "inherit" }}>
				<div className="input-group mb-3">
					<input
						onChange={handleChange}
						value={text}
						type="text"
						className="form-control custom-form-control"
						placeholder="Type your message here..."
						autoFocus
					/>
					<Button variant="info" type="submit" className="custom-button">
						Send
					</Button>
				</div>
			</form>
			{showAlert && (
				<div className="alert alert-danger custom-alert">
					Please enter a message before sending.
				</div>
			)}
		</div>
	);
}
