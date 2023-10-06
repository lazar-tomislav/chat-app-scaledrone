import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ActiveUsers = ({ activeUsers }) => {
return (
    <Container style={{ paddingBottom: "20px", borderRadius: "5px", color: "white" }} fluid className="active-users text-center">
        <h2>Active Users</h2>
        <Row sm={3} className="g-4">
            {activeUsers.map((user, index) => (
            <Col key={index}>
                <Card style={{ backgroundColor: "#0474ab", borderRadius: "5px", padding: "5px" }} className="card-small text-center">
                    <Card.Img
                        className="avatar"
                        variant="top"
                        src={user.avatar}
                        alt={user.username}
                    />
                    <Card.Body>
                        <Card.Title className="card-title">
                        {user.username}
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        ))}
        </Row>
    </Container>
);
};

export default ActiveUsers;
