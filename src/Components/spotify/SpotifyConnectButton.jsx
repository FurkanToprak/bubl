import React from 'react';
import { Button } from "react-bootstrap";

export default function SpotifyConnectButton(props) {
  return (
    <Button
    style={{
      width: "100%",
      marginBottom: 20,
      marginTop: 20,
      backgroundColor: "black",
    }}
    onClick={() => {
      window.open(
        process.env.REACT_APP_BACKEND_URL +
          "/spotify/connect?uuid=" +
          props.currentUuid,
        "_blank"
      );
    }}
  >
    <img
      src={require("../../Media/spotify_logo.png")}
      style={{ maxHeight: 20, marginRight: "5%" }}
      alt="spotify logo"
    />
    connect your spotify account
  </Button>
  );
}