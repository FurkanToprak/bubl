import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { AuthContext } from "../../Auth";
import { firestore } from "../../firebase/test_cred";
import * as firebase from "firebase/app";
import "firebase/firestore";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";

export default function SpotifyConnect() {
  const { currentUser } = useContext(AuthContext);
  const [userData] = useDocumentData(
    firebase.firestore().collection("users").doc(currentUser.uid)
  );
  return (
    <>
      {userData ? (
        userData.is_spotify_connected ? (
          <div>Spotify account connected.</div>
        ) : (
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
                  currentUser.uid,
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
        )
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
