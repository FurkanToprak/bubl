import React, { useState, useRef } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
  Card,
} from "react-bootstrap";

function Search() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        search.
      </h1>
      <div>
        <Form>
          <Container>
            <Form.Group>
              <Row>
                <Col>
                  <Form.Control
                    size="lg"
                    type="text"
                    placeholder="search for friends."
                  />
                </Col>
                <Col md="auto">
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={
                      <Tooltip id="button-tooltip">
                        showing top 10 results.
                      </Tooltip>
                    }
                  >
                    <Button variant="primary" type="submit" size="lg">
                      search.
                    </Button>
                  </OverlayTrigger>
                </Col>
              </Row>
            </Form.Group>
          </Container>
        </Form>
        <Container>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i: number) => (
            <Row style={{ display: "block", marginTop: 30 }}>
              <Card>
                <Card.Body>
                  <Card.Title>Result {i}</Card.Title>
                  <Card.Subtitle>Result {i}</Card.Subtitle>
                  <Card.Text>Result {i}</Card.Text>
                </Card.Body>
              </Card>
            </Row>
          ))}
        </Container>
      </div>
    </div>
  );
}

export default Search;
