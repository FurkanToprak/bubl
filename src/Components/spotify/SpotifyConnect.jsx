import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { AuthContext } from "../../Auth";
import { firestore } from "../../firebase/test_cred";
// import * as firebase from "firebase/app";
import "firebase/firestore";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import SpotifyConnectButton from "./SpotifyConnectButton";

export default function SpotifyConnect() {
  const { currentUser } = useContext(AuthContext);
  const [userData] = useDocumentData(
    firestore.collection("users").doc(currentUser.uid)
  );
  return (
    <>
      {userData ? (
        userData.is_spotify_connected ? (
          <div>Spotify account connected.</div>
        ) : (
          <SpotifyConnectButton currentUuid={currentUser.uid} />
        )
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
