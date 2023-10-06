import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Navigation() {
return (
	<Navbar bg="dark" data-bs-theme="dark">
		<Container>
			<Navbar.Brand
				style={{
					backgroundColor: "#f47c6d",
					borderRadius: "5px",
					padding: "5px",
				}}
				href="#home"
				>
				<img
					alt="logo"
					src="assets/images/pngegg.png"
					width="30"
					height="30"
					className="d-inline-block align-top"
				/>{" "}
				AnyChat
			</Navbar.Brand>
			<Nav className="justify-content-end">
				<Nav.Link href="https://react.dev/">React</Nav.Link>
				<Nav.Link href="https://www.scaledrone.com/">Scaledrone</Nav.Link>
			</Nav>
		</Container>
	</Navbar>
);
}
