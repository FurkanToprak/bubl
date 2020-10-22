import React from "react";
import { Modal, Button, Tabs, Tab } from "react-bootstrap";

export default function SettingsModal(props: { handleClose: () => void }) {
  return (
    <Modal show={true} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="spotify" title="Spotify">
            <img
              src={require("../Media/spotify.png")}
              style={{ maxHeight: 100, margin: "auto", display: "block" }}
              alt="spotify logo"
            />
          </Tab>
          <Tab eventKey="giphy" title="Giphy">
            <img
              src={require("../Media/giphy.svg")}
              style={{ maxHeight: 100, margin: "auto", display: "block" }}
              alt="giphy logo"
            />
          </Tab>
          <Tab eventKey="youtube" title="YouTube">
            <img
              src={require("../Media/youtube.png")}
              style={{ maxHeight: 100, margin: "auto", display: "block" }}
              alt="youtube logo"
            />
          </Tab>
          <Tab eventKey="profile" title="Profile">
            Profile Stuff Here
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          close
        </Button>
        <Button
          style={{
            backgroundColor: "#69B1BF",
            border: "none",
          }}
          onClick={props.handleClose}
        >
          save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
