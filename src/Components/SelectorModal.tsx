import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import BubbleConfigure from "./BubbleConfigure";

export default function SelectorModal(props: { handleClose: () => void }) {
  const [mediaType, setMediaType] = useState("");
  const [readyToSave, setReadyToSave] = useState(false);
  return (
    <Modal show={true} onHide={props.handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title style={{ fontSize: "3em" }}>add board</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            size="lg"
            onClick={() => setMediaType("spotify")}
            style={{
              backgroundColor: "#1DB954",
              width: "30%",
              fontSize: "1.5em",
            }}
          >
            Spotify
          </Button>
          <Button
            size="lg"
            onClick={() => setMediaType("youtube")}
            style={{
              backgroundColor: "#FF0000",
              width: "30%",
              fontSize: "1.5em",
            }}
          >
            YouTube
          </Button>
          <Button
            size="lg"
            onClick={() => setMediaType("giphy")}
            style={{
              background: "black",
              width: "30%",
              fontSize: "1.5em",
            }}
          >
            GIPHY
          </Button>
        </div>
        <div style={{marginTop: "10px"}}>
          <Button
            size="lg"
            onClick={() => setMediaType("bubble")}
            style={{
              background: "#69B1BF",
              width: "100%",
              fontSize: "1.5em",
            }}
          >
            bubble
          </Button>
        </div>
        {mediaType === "spotify" && <div>spotify</div>}
        {mediaType === "youtube" && <div>youtube</div>}
        {mediaType === "giphy" && <div>giphy Giphy</div>}
        {mediaType === "bubble" && <BubbleConfigure onDone={(backgroundColor: string, color: string, text: string) => {
          setReadyToSave(true)
        }}/>}
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
