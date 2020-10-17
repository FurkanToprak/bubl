import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

function Profile() {
  return (
    <div>
        <h1
        style={{
          textAlign: "center",
        }}
      >
        profile.
      </h1>
        <Card>
          <Card.Body>
            <Card.Title>
              <Container>
                <Row>
                  <Col>
                    John Doe
                  </Col>
                  <Col>
                    john@doe.com
                  </Col>
                  <Col>
                  </Col>
                </Row>
              </Container>
            </Card.Title>
            <Container>
              <Row>
                <Col>
                  <Button>Change Name</Button>
                </Col>
                <Col>
                  <Button>Change Email</Button>
                </Col>
                <Col>
                  <Button>Change Password</Button>
                </Col>
              </Row>
            </Container>
            <Card.Text>
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  );
}

export default Profile;
