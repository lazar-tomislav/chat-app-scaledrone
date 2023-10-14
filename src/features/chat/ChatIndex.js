import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {UserAuthentication} from "../user-authentication";
import {getScaledroneChannelId} from "../../config/env-helper";
import Messages from "../../components/Messages";
import ActiveUsers from "../../components/Users/ActiveUsers";
import SendMessageInput from "../../components/SendMessageInput";

const initialState = {
	text: [],
	member: {
		username: UserAuthentication.getUsername(),
		avatar: UserAuthentication.getUserAvatar(),
	},
	activeUsers: [],
};

function ChatIndex() {
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

		setState((prevState) => ({...prevState, activeUsers}));
	};

	const onChatOpenAddNewMember = (newDrone) => {
		const member = {...state.member, avatar: UserAuthentication.getUserAvatar()};
		member.id = newDrone.clientId;
		setState((prevState) => ({...prevState, member}));
	}

	const loadMessages = (data, member) => {
		setState((prevState) => {
			const newMessages = [...prevState.text, {member, text: data}];
			return {...prevState, text: newMessages};
		});
	}

	useEffect(() => {
		const channelID = getScaledroneChannelId();

		const newDrone = new window.Scaledrone(channelID, {
			data: state.member,
		});

		setDrone(newDrone);
		const room = newDrone.subscribe("observable-room");

		newDrone.on("open", (error) => {
			if (error) {
				return console.error(error);
			}
			onChatOpenAddNewMember(newDrone);
		});

		room.on("data", (data, member) => {
			loadMessages(data, member);
		});

		room.on("members", (members) => {
			updateActiveUsers(members);
		});

		return () => {
			room.unsubscribe();
			newDrone.close();
		};
	}, []);

	const onSendMessage = (message) => {
		drone.publish({
			room: "observable-room",
			message,
		});
	};

	return (
		<Row style={{paddingTop: "1rem"}}>
			<Col xs={9}>
				<div className="text-container">
					<Messages text={state.text} currentUser={state.member}/>
				</div>
				<SendMessageInput onSendMessage={onSendMessage}/>
			</Col>
			<Col xs={3}>
				<ActiveUsers
					activeUsers={Array.from(uniqueActiveUsers).map((username) =>
						state.activeUsers.find((user) => user.username === username)
					)}
					updateActiveUsers={updateActiveUsers}
				/>
			</Col>
		</Row>
	);
}

export default ChatIndex;
