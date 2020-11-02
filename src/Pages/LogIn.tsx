import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer
} from "@react-firebase/auth";
import * as firebase from "firebase/app";
import { firebaseConfig } from "../firebase/test_cred";
import axios from "axios";

// FIREBASE 

export default function LogIn(props: { setIsSignedIn: (to: boolean) => void;}) {
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
            <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
              <div>
                <FirebaseAuthConsumer>
                  {({ isSignedIn, firebase }) => {
                    // if (isSignedIn === true) {
                    //   return (
                    //     <div>
                    //       <Button style={{ width: "100%", marginBottom: 20 }}
                    //         onClick={() => {
                    //           firebase
                    //             .app()
                    //             .auth()
                    //             .signOut();
                    //         }}
                    //       >
                    //         Sign out
                    // </Button>
                    //     </div>
                    //   );
                    // } else {
                      return (
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
                                      console.log(result.user.uid);
                                      axios.post('https://bubl-backend.herokuapp.com/create-user', {
                                        uuid: result.user.uid,
                                      })
                                      //set isSignedIn 
                                      props.setIsSignedIn(true) 
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
                      );
                    }
                  }
                </FirebaseAuthConsumer>
              </div>
            </FirebaseAuthProvider>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
}
