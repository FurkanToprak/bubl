import React, { useState} from "react";
import { Modal, Button } from "react-bootstrap";

export default function SettingsModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>settings info goes here</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          close
        </Button>
        <Button style={{
            backgroundColor: "#69B1BF",
            border: "none"
        }} onClick={handleClose}>
          save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
