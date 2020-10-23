import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function SelectorModal(props: { handleClose: () => void }) {
    const [ mediaType, setMediaType ] = useState("");
  return (
    <Modal show={true} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>add board</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button size="lg" onClick={() => setMediaType("spotify")}>Spotify</Button>
          <Button size="lg" onClick={() => setMediaType("youtube")}>YouTube</Button>
          <Button size="lg" onClick={() => setMediaType("giphy")}>Giphy</Button>
        </div>
        {
              mediaType === "spotify" && <div>spotify</div>
          }
          {
              mediaType === "youtube" && <div>youtube</div>
          }
          {
              mediaType === "giphy" && <div>giphy</div>
          }
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
