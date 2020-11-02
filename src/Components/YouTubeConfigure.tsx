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
      <Form>
        <Container>
          <Form.Group>
            <Row>
              <Col>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="search for youtube content."
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
                    style={{ backgroundColor: "red" }}
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
      <ListGroup
        style={{
          maxHeight: 200,
          overflowY: "auto",
        }}
      >
        {[
          ["Video Title", "Artist Name"],
          ["Video Title", "Artist Name"],
          ["Video Title", "Artist Name"],
          ["Video Title", "Artist Name"],
          ["Video Title", "Artist Name"],
          ["Video Title", "Artist Name"],
          ["Video Title", "Artist Name"],
          ["Video Title", "Artist Name"],
          ["Video Title", "Artist Name"],
          ["Video Title", "Artist Name"],
          ["Video Title", "Artist Name"],
          ["Video Title", "Artist Name"],
          ["Video Title", "Artist Name"],
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
                backgroundColor: index === activeIndex ? "red" : "#FFF",
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
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}
