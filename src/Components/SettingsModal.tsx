import React, { useState, useContext, useEffect } from "react";
import { Modal, Button, Tabs, Tab } from "react-bootstrap";
import ProfileUpdateBiography from "./profile/ProfileUpdateBiography";
import SpotifyConnect from "./spotify/SpotifyConnect";
import axios from 'axios';
import { AuthContext } from '../Auth';

export default function SettingsModal(props: { handleClose: () => void }) {
  const [readyToSave, setReadyToSave] = useState(false);
  const [bio, setBio] = useState('');
  const { currentUser } = useContext(AuthContext);

  function handleSave() {
    props.handleClose();
      axios.post(
        process.env.REACT_APP_BACKEND_URL + "users/bio/update",
        {
          uuid: currentUser.uid,
          updated_bio: bio,
        }
      );
  }

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
            <SpotifyConnect />
          </Tab>
          <Tab tabClassName="youtube-tab" eventKey="youtube" title="YouTube">
            YouTube Stuff Here
          </Tab>
          <Tab tabClassName="giphy-tab" eventKey="giphy" title="Giphy">
            Giphy Stuff Here
          </Tab>
          <Tab tabClassName="profile-tab" eventKey="profile" title="Profile">
            <ProfileUpdateBiography setReadyToSave={setReadyToSave} bio={bio} setBio={setBio} />
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
          onClick={handleSave}
        >
          save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
