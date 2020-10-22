import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

export default function LogIn() {
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
          <Button style={{ width: "100%", marginBottom: 20 }}>
            <img
              src={require("../Media/google.png")}
              style={{ maxHeight: 20, marginRight: "5%" }}
              alt="google logo"
            />
            log in with google
          </Button>
          <Button style={{ width: "100%" }}>
            <img
              src={require("../Media/google.png")}
              style={{ maxHeight: 20, marginRight: "5%" }}
              alt="google logo"
            />
            sign up with google
          </Button>
        </div>
      </Jumbotron>
    </div>
  );
}
