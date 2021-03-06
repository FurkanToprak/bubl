import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import BubbleConfigure from "./BubbleConfigure";
import GiphyConfigure from "./GiphyConfigure";
import YouTubeConfigure from "./YouTubeConfigure";
import SpotifyConfigure from "./SpotifyConfigure";

interface BoardContent {
  contentType: 'bubble' | 'spotify' | 'youtube' | 'giphy';
  text?: string;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  link?: string;
};

export default function SelectorModal(props: { handleClose: (content: any) => void }) {
  const initialType: string = "";
  const [mediaType, setMediaType] = useState(initialType);
  const initialValue: any = undefined;
  const [readyToSave, setReadyToSave] = useState(initialValue);
  return (
    <Modal show={true} onHide={() => props.handleClose(null)} centered>
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
        {mediaType === "spotify" && <div><SpotifyConfigure onDone={(link: string) => {
          setReadyToSave({
            contentType: mediaType,
            link: link,
          });
        }} /></div>}
        {mediaType === "youtube" && <div><YouTubeConfigure onDone={(link: string) => {
          setReadyToSave({
            contentType: mediaType,
            link: link,
          });
        }} /></div>}
        {mediaType === "giphy" && <div><GiphyConfigure onDone={(link: string) => {
          setReadyToSave({
            contentType: mediaType,
            link: link,
          });
        }} /></div>}
        {mediaType === "bubble" && <BubbleConfigure onDone={(backgroundColor: string, color: string, text: string, borderColor: string) => {
          setReadyToSave({
            contentType: mediaType,
            text,
            backgroundColor,
            color,
            borderColor,
          });
        }}/>}
      </Modal.Body>
      <Modal.Footer style={{ display: "flex" }}>
        <Button
          variant="secondary"
          onClick={() => props.handleClose(null)}
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
          onClick={() => {
            props.handleClose(readyToSave)}
          }
        >
          save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
