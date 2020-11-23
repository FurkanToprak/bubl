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
import { NavLink } from "react-router-dom";
import axios from "axios";
import { AuthContext } from '../../Auth';
import { firestore } from "../../firebase/test_cred";
import "firebase/firestore";
import {
  useDocumentData,
} from "react-firebase-hooks/firestore";

export default function ProfileUpdateBiography(props) {
  const { currentUser } = useContext(AuthContext);
  const [charsLeft, setCharsLeft] = useState(255);
  const [userData] = useDocumentData(
    firestore.collection("users").doc(currentUser.uid)
  );
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
          {userData ? 
          <div>
            <Row>
              <Col>
              <div>
                bubl name: {userData.bubl_name}
              </div>
              <div>
                <NavLink to={`/b/` + userData.bubl_name}>
                  Preview Board
                </NavLink>
              </div>
              </Col>
            </Row>
            <br />
          </div>
          : <div></div>}
          <Form.Label>update your bio</Form.Label>
          <div>characters left: {charsLeft}</div>
          <Form.Control as="textarea" rows={3} value={props.bio} onChange={handleChange} maxLength={255}/>
        </Form.Group>
      </Form>
    </Container>
  )
}