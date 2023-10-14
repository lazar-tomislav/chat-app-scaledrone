import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Container from "react-bootstrap/Container";
import ChatIndex from "./features/chat/ChatIndex";

function App() {
	return (
		<div className="App app-wrapper">
			<Container fluid="lg" style={{backgroundColor: "#2c2c2c"}}>
				<Navigation/>

				<ChatIndex/>
				<Footer/>
			</Container>
		</div>
	);
}

export default App;
