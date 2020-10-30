import React, { useState } from "react";
import { Modal, Button, Tabs, Tab } from "react-bootstrap";

export default function SettingsModal(props: { handleClose: () => void }) {
  const [readyToSave, setReadyToSave] = useState(false);
  return (
    <Modal show={true} onHide={props.handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title style={{ fontSize: "3em" }}>settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          style={{ fontSize: "1.5em", color: "white" }}
        >
          <Tab tabClassName="spotify-tab" eventKey="spotify" title="Spotify">
            Spotify Stuff Here
          </Tab>
          <Tab tabClassName="youtube-tab" eventKey="youtube" title="YouTube">
            YouTube Stuff Here
          </Tab>
          <Tab tabClassName="giphy-tab" eventKey="giphy" title="Giphy">
            Giphy Stuff Here
          </Tab>
          <Tab tabClassName="profile-tab" eventKey="profile" title="Profile">
            Profile Stuff Here
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer style={{ display: "flex" }}>
        <Button
          variant="secondary"
          onClick={props.handleClose}
          style={{ flex: 1, fontSize: "1.5em" }}
        >
          close
        </Button>
        <Button
          disabled={!readyToSave}
          style={{
            backgroundColor: "#69B1BF",
            border: "none",
            flex: 1,
            fontSize: "1.5em",
          }}
          onClick={props.handleClose}
        >
          save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
