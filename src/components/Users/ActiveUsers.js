import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ActiveUsers = ({activeUsers}) => {
	return (
		<Container
			fluid
			className="active-users text-center p-0 m-0"
		>
			<h2 style={{color: "white"}}>Users</h2>
			<Row className="g-4">
				{activeUsers.map((user, index) => (
					<Col key={index} xs={12} style={{padding: 0,marginRight:"10px",paddingRight:"10px"}}>
						<Card
							style={{
								borderRadius: "5px",
							}}
							className=" text-center"
						>
							<div className="d-flex">
								<div style={{alignItems: "center", display: "flex",paddingLeft:"5px"}}>
									<Card.Img
										style={{width:"43px"}}
										className="avatar img-fluid"
										variant="top"
										src={user.avatar}
										alt={user.username}
									/>
								</div>
								<Card.Body className={"line-clamp-1"}>
									<Card.Title className="card-title ">
										{user.username}
									</Card.Title>
								</Card.Body>
							</div>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default ActiveUsers;
