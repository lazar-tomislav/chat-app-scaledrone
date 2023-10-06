import React, { useState, useEffect } from "react";
import "./App.css";

import Messages from "./components/Messages";
import Input from "./components/Input";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PopUp from "./components/PopUp";

import ActiveUsers from "./components/Users/ActiveUsers";
import randomName from "./components/Users/RandomName";
import randomAvatar from "./components/Users/RandomAvatar";

import Container from "react-bootstrap/Container";

function App() {

const initialState = {
	text: [],
	member: {
	username: randomName(),
	avatar: randomAvatar(),
	},
	activeUsers: [],
};

const [state, setState] = useState(initialState);
const [drone, setDrone] = useState(null);

const [uniqueActiveUsers, setUniqueActiveUsers] = useState(new Set());

const updateActiveUsers = (members) => {
	const activeUsers = members.map((member) => ({
	username: member.clientData.username,
	avatar: member.clientData.avatar,
	}));

	const uniqueUsersSet = new Set(activeUsers.map((user) => user.username));
	setUniqueActiveUsers(uniqueUsersSet);

	setState((prevState) => ({ ...prevState, activeUsers }));
};

const [showImagePopup, setShowImagePopup] = useState(true);

const popupImageUrl = "./assets/images/anychat.png";

useEffect(() => {
	const newDrone = new window.Scaledrone("wiCb9iY1E4xejxZe", {
	data: state.member,
	});

	setDrone(newDrone);
	const room = newDrone.subscribe("observable-room");

	newDrone.on("open", (error) => {
	if (error) {
		return console.error(error);
	}
	const member = { ...state.member, avatar: randomAvatar() };
	member.id = newDrone.clientId;
	setState((prevState) => ({ ...prevState, member }));
	});

	room.on("data", (data, member) => {
	setState((prevState) => {
		const newMessages = [...prevState.text, { member, text: data }];
		return { ...prevState, text: newMessages };
	});
	});

	room.on("members", (members) => {
		updateActiveUsers(members);
	});

	const timer = setTimeout(() => {
		setShowImagePopup(false);
	}, 3000);

	return () => {
	room.unsubscribe();
	newDrone.close();
	clearTimeout(timer);
	};
}, []);

const onSendMessage = (message) => {
	drone.publish({
	room: "observable-room",
	message,
	});
};

return (
	<Container fluid="lg" style={{ backgroundColor: "#2c2c2c" }}>
			<div className="App">
				<Navigation />
					<div className="text-container">
						<Messages text={state.text} currentUser={state.member} />
					</div>
				<Input onSendMessage={onSendMessage} />
				<ActiveUsers
					activeUsers={Array.from(uniqueActiveUsers).map((username) =>
						state.activeUsers.find((user) => user.username === username)
						)}
						updateActiveUsers={updateActiveUsers}
				/>
				{showImagePopup && <PopUp imageUrl={popupImageUrl} />}
			</div>
		<Footer />
	</Container>
);
} 

export default App;
