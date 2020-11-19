import React, { useContext } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer
} from "@react-firebase/auth";
import * as firebase from "firebase/app";
import axios from "axios";
import { AuthContext } from '../Auth';

// FIREBASE 

export default function LogIn() {
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/bubl" />
  }
  return (
    <div
      style={{
        backgroundColor: "#CAF1FE",
        flex: 1,
      }}
    >
      <Jumbotron
        style={{
          marginTop: 100,
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
          backgroundColor: "#69B1BF",
        }}
      >
        <div
          style={{
            width: "70%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            color: "white",
            fontSize: "2rem",
          }}
        >
          bubl
        </div>
      </Jumbotron>

      <Jumbotron
        style={{
          marginTop: 50,
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
          backgroundColor: "#69B1BF",
        }}
      >
        <div
          style={{
            width: "70%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
          }}
        >

          <div>
            <div>
              <div>
                <Button style={{ width: "100%", marginBottom: 20 }}
                  onClick={() => {
                    const provider = new firebase.auth.GoogleAuthProvider();
                    firebase
                      .auth()
                      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
                      .then(() => {
                        firebase
                          .auth()
                          .signInWithPopup(provider).then((result: any) => {
                            axios.post(process.env.REACT_APP_BACKEND_URL + 'create-user', {
                              uuid: result.user.uid,
                            })
                          })

                      })
                  }}>
                  <img
                    src={require("../Media/google.png")}
                    style={{ maxHeight: 20, marginRight: "5%" }}
                    alt="google logo"
                  />
                            log in with google
                          </Button>
              </div>
            </div>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
}
