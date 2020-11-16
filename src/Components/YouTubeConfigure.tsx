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
import axios from "axios";

export default function YouTubeConfigure(props: {
  onDone: (backgroundColor: string, color: string, text: string) => void;
}) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [results, setResults] = useState([]);

  function handleSearch(e: any) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    const url =
      process.env.REACT_APP_BACKEND_URL +
      "youtube/search?query=" +
      encodeURIComponent(formDataObj.query.toString()) +
      "&search_type=track";
    axios.get(url).then((res) => {
      setResults(res.data.result);
    });
  }

  return (
    <div style={{ marginTop: 10 }}>
      <Form onSubmit={handleSearch}>
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
                      showing top 20 results.
                    </Tooltip>
                  }
                >
                  <Button
                    style={{ backgroundColor: "red" }}
                    type="button"
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
        {results.map((value: any, index: number) => {
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
                borderColor: index === activeIndex ? "#000" : "#C0C0C0",
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
