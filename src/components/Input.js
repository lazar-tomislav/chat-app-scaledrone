import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";

export default function Input({ onSendMessage }) {
	const [text, setText] = useState("");
	const [showAlert, setShowAlert] = useState(false);

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (text.trim() === "") {
			setShowAlert(true);
		} else {
			onSendMessage(text);
			setText("");
			setShowAlert(false);
		}
	};

	const hideAlert = () => {
		setShowAlert(false);
	};

	return (
		<div className="input">
			<form onSubmit={handleSubmit}>
				<div className="input-group mb-3">
					<input
						onChange={handleChange}
						value={text}
						type="text"
						className="form-control"
						placeholder="Enter your message and press ENTER"
						autoFocus
					/>
					<Button variant="success" type="input">
						Send
					</Button>
				</div>
			</form>

			<Modal show={showAlert} onHide={hideAlert} centered>
				<Modal.Header closeButton>
					<Modal.Title>Alert</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Please enter a message before sending.
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={hideAlert}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}
