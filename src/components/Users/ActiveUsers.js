import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ActiveUsers = ({ activeUsers }) => {
    return (
        <Container
            fluid
            className="active-users text-center"
        >
            <h2 style={{color:"white"}}>Users</h2>
            <Row className="g-4">
                {activeUsers.map((user, index) => (
                    <Col key={index} xs={12} style={{padding:0}}>
                        <Card
                            style={{
                                backgroundColor: "#0474ab",
                                borderRadius: "5px",
                                padding: "5px",
                            }}
                            className="card-small text-center"
                        >
                            <div className="d-flex">
                                <div className="p-2">
                                    <Card.Img
                                        className="avatar img-fluid"
                                        variant="top"
                                        src={user.avatar}
                                        alt={user.username}
                                    />
                                </div>
                                <div className="p-2">
                                    <Card.Body>
                                        <Card.Title className="card-title">
                                            {user.username}
                                        </Card.Title>
                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ActiveUsers;
