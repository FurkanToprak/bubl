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
import { v4 } from "uuid";


export default function GiphyConfigure(props: {
  onDone: (link: string) => void;
}) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([] as string[]);

  function handleSearch(query: string) {
    if (!query.length) return;
    const url =
      process.env.REACT_APP_BACKEND_URL +
      "giphy/search?query=" +
      encodeURIComponent(query);
    axios.get(url).then((res) => {
      setResults(res.data.result);
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
                  placeholder="search for giphy posts."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
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
                    style={{ backgroundColor: "black" }}
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
          maxHeight: 200,
          overflowY: "auto",
        }}
      >
        {results.map((value: any, index: number) => {
          return (
            <ListGroup.Item
              key={v4()}
              active={index === activeIndex}
              onClick={() => {
                setActiveIndex(index);
                props.onDone(value.url);
              }}
              style={{
                color: index === activeIndex ? "#FFF" : "#000",
                backgroundColor: index === activeIndex ? "#000" : "#FFF",
                borderColor: index === activeIndex ? "#000" : "#C0C0C0",
              }}
            >
              <div>{value.title}</div>
              <img src={value.url} style={{ width: "80%", height: "80%"}}>
              </img>
              
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}
