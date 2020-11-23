import React, { useState, useContext } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
  Image,
  Card,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from '../Auth';

function Search() {
  const { currentUser } = useContext(AuthContext);
  const [searchRes, setSearchRes] = useState([]);
  const [query, setQuery] = useState('');

  function handleSearch(searchQ: string) {
    const url =
      process.env.REACT_APP_BACKEND_URL + "users/search?query=" + searchQ;
    axios.get(url).then((res) => {
      if (res.data.result.length > 0) {
        setSearchRes(res.data.result);
      }
      else {
        setSearchRes([{
          profile_image: '',
          name: "no results found.",
          bio: '',
          google_id: '',
          bubl_name: 'DO NOT PROCEED'
        }])
      }
    });
  }

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
                        showing top 10 results.
                      </Tooltip>
                    }
                  >
                    <Button variant="primary" type="button" size="lg" onClick={() => handleSearch(query)}>
                      search.
                    </Button>
                  </OverlayTrigger>
                </Col>
              </Row>
            </Form.Group>
          </Container>
        </Form>
        <Container>
          {searchRes.map((person: any) => {
            if (currentUser !== undefined && currentUser.uid === person.google_id) {
              return;
            }
            if (person.bubl_name === 'DO NOT PROCEED') {
              return <Row style={{ display: "block", marginTop: 30 }}>
                  <Card>
                    <Card.Body>
                      <Image src={person.profile_image} thumbnail />
                      <Card.Title>{person.name}</Card.Title>
                      <Card.Text>{person.bio}</Card.Text>
                    </Card.Body>
                  </Card>
              </Row>
            }  
            return (
              <Row style={{ display: "block", marginTop: 30 }}>
                <NavLink to={`/b/` + person.bubl_name}>
                  <Card>
                    <Card.Body>
                      <Image src={person.profile_image} thumbnail />
                      <Card.Title>{person.name}</Card.Title>
                      <Card.Text>{person.bio}</Card.Text>
                    </Card.Body>
                  </Card>
                </NavLink>
              </Row>
            );
          })}
        </Container>
      </div>
    </div>
  );
}

export default Search;
