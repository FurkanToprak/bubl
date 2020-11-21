import React, { useState, useEffect, useContext } from 'react';
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
import axios from "axios";
import { AuthContext } from '../../Auth';

export default function ProfileUpdateBiography(props) {
  const { currentUser } = useContext(AuthContext);
  const [charsLeft, setCharsLeft] = useState(255);

  useEffect(() => {
      const url =
      process.env.REACT_APP_BACKEND_URL + "users/bio/get?uuid=" + currentUser.uid;
      axios.get(url).then((res) => {
        props.setBio(res.data.bio);
        setCharsLeft(255 - res.data.bio.length);
      });
  }, []);

  function handleChange(e) {
    e.preventDefault();
    props.setBio(e.target.value);
    setCharsLeft(255 - e.target.value.length);
    props.setReadyToSave(true);
  }


  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>update your bio</Form.Label>
          <div>characters left: {charsLeft}</div>
          <Form.Control as="textarea" rows={3} value={props.bio} onChange={handleChange} maxLength={255}/>
        </Form.Group>
      </Form>
    </Container>
  )
}