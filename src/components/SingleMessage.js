import React from "react";

export default function SingleMessage({ message, currentUser }) {

	const member = message.member.clientData;
	const text = message.text;
	const myMessage = member.username === currentUser.username;
	const className = myMessage 
		? "text-message current-user" 
		: "text-message";

	return (
		<li className={className}>
		<img className="avatar" src={member.avatar} alt={member.avatar} />
		<div className="message-content">
			<div className="username">{member.username}</div>
			<div className="text">{text}</div>
		</div>
		</li>
	);
}
