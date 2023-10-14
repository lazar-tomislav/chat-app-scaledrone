import React, {useEffect} from "react";

export default function SingleMessage({message, currentUser}) {
	const [isMessageFromCurrentUser, setIsMessageFromCurrentUser] = React.useState(false);
	const [member, setMember] = React.useState(null);

	useEffect(() => {
		const _member = message?.member?.clientData;
		setMember(_member);
		setIsMessageFromCurrentUser(_member.username === currentUser.username);

	}, [currentUser.username, message?.member?.clientData])

	if (!member) {
		return null;
	}
	return (
		<li className={`${isMessageFromCurrentUser ? "text-message current-user" : "text-message"}`}>
			<img className="avatar" src={member.avatar} alt={member.avatar}/>
			<div className="message-content">
				<div className="username">{member.username}</div>
				<div className="text">{message.text}</div>
			</div>
		</li>
	);
}
