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
import ReactPlayer from "react-player";

export default function YouTubeConfigure(props: {
  onDone: (link: string) => void;
}) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([] as string[]);

  function handleSearch(query: string) {
    if (!query.length) return;
    const url = process.env.REACT_APP_BACKEND_URL +
      "youtube/search?query=" +
      encodeURIComponent(query);
    axios.get(url).then((res) => {
      console.log(res);
      setResults(res.data.videos);
    });
  }

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
                  value={query}
                  onChange={e => setQuery(e.target.value)}
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
                    onClick={() => handleSearch(query)}
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
          height: 200,
          overflowY: "auto",
        }}
      >
        {results.map((value: string, index: number) => {
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
                <ReactPlayer url={value} style={{maxWidth: "60%", display: "float", margin: "auto"}}/>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}
