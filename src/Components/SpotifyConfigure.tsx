import React, { useState } from "react";
import {
  Form,
  Container,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
  Button,
  ListGroup,
} from "react-bootstrap";

export default function GiphyConfigure(props: {
  onDone: (backgroundColor: string, color: string, text: string) => void;
}) {
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <div style={{ marginTop: 10 }}>
      <div>
        <Form>
          <Container>
            <Form.Group>
              <Row>
                <Col>
                  <Form.Control
                    size="lg"
                    type="text"
                    placeholder="search for spotify songs."
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
                    <Button
                      style={{ backgroundColor: "#1DB954" }}
                      type="submit"
                      size="lg"
                    >
                      search.
                    </Button>
                  </OverlayTrigger>
                </Col>
              </Row>
            </Form.Group>
          </Container>
        </Form>
      </div>
      <ListGroup
        style={{
          maxHeight: 200,
          overflowY: "auto",
        }}
      >
        {[
          ["Song Title", "Album Title", "Artist Name"],
          ["Song Title", "Album Title", "Artist Name"],
          ["Song Title", "Album Title", "Artist Name"],
          ["Song Title", "Album Title", "Artist Name"],
          ["Song Title", "Album Title", "Artist Name"],
          ["Song Title", "Album Title", "Artist Name"],
        ].map((value: string[], index: number) => {
          return (
            <ListGroup.Item
              active={index === activeIndex}
              onClick={() => {
                setActiveIndex(index);
                props.onDone("", "", "");
              }}
              style={{
                color: "#000",
                backgroundColor: index === activeIndex ? "#1DB954" : "#FFF",
                borderColor: index === activeIndex ? "#000" : "#C0C0C0"
              }}
            >
              <div
                style={{
                  fontSize: "1.5em",
                  fontWeight: "bold",
                }}
              >
                {value[0]}
              </div>
              <div>{value[1]}</div>
              <div>{value[2]}</div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}
