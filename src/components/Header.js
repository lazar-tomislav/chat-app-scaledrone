import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {useEffect, useState} from "react";
import {UserAuthentication} from "../features/user-authentication";

export default function Header() {
	const [currentUsername, setUsername] = useState('');

	useEffect(() => {
		const username = UserAuthentication.getUsername();
		setUsername(username);
	}, []);



	const signOut = ()=>{
		setUsername('');
		UserAuthentication.signOut();
		window.location.href = "/";
	}


	return (
		<Navbar style={{background:"#4e4e4e"}} variant="dark">
			<Container>
				<div style={{display: "flex", alignItems: "center"}}>
					<img
						alt="logo"
						src="/logo.png"
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>
					<Navbar.Brand className={"appName"}>Welcome {currentUsername ?? "Anonymous"}</Navbar.Brand>
				</div>
				<Nav className="ml-auto">
					{/*TODO: Insert nav link here in the future for profile, logout..*/}
					{currentUsername&&(
						<Nav.Link className={"text-white"} onClick={()=>signOut()}>Log Out</Nav.Link>
					)}
				</Nav>
			</Container>
		</Navbar>
	);
}