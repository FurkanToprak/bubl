import React, { useState } from 'react';
import {
  Form,
  Container,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
  Button,
  ListGroup,
  Image,
  Dropdown,
} from "react-bootstrap";
import axios from 'axios';

export default function SpotifySongSearch(props) {

  const [activeIndex, setActiveIndex] = useState(-1);
  const [results, setResults] = useState([]);

  function handleSearch(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    const url = process.env.REACT_APP_BACKEND_URL + 'spotify/search?query=' + encodeURIComponent(formDataObj.query.toString()) + '&search_type=track';
    axios.get(url).then(
      (res) => {
        setResults(res.data.result);
      }
    );

  }

  return (
    <div>
    <Container>
      <Form onSubmit={handleSearch}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control
                size="lg"
                type="text"
                placeholder="search for spotify songs."
                name="query"
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
      </Form>
    </Container>
  <ListGroup
    style={{
      maxHeight: 200,
      overflowY: "auto",
    }}
  >
    {results.map((value, index) => {
      return (
        <ListGroup.Item
          active={index === activeIndex}
          onClick={() => {
            props.onDone(value.embed_url);
            setActiveIndex(index);
          }}
          style={{
            color: "#000",
            backgroundColor: index === activeIndex ? "#1DB954" : "#FFF",
            borderColor: index === activeIndex ? "#000" : "#C0C0C0"
          }}
        >
          <Container fluid>
            <Row>
              <Col xs={9}>
                <div
                  style={{
                    fontSize: "1.5em",
                    fontWeight: "bold",
                  }}
                >
                  {value.track}
                </div>
                <div>{value.album}</div>
                <div>{value.artist}</div>
              </Col>
              <Col xs={3}>
                <Image src={value.track_img} thumbnail />
              </Col>
            </Row>
          </Container>
        </ListGroup.Item>
      );
    })}
  </ListGroup>
  </div>
  );
}