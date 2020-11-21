import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { auth } from "../firebase/test_cred";
import { AuthContext } from "../Auth";

export default function BublNavbar(props: {
  toggleSettings: (to: boolean) => void;
}) {
  const { currentUser } = useContext(AuthContext);

  function handleSignout() {
    auth.signOut();
  }

  if (currentUser) {
    return (
      <>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{ display: "flex", width: "100%" }}>
            <Nav.Link
              style={{ flex: 1, justifyContent: "flex-end" }}
              as={Link}
              to="/"
            >
              board
            </Nav.Link>
            <Nav.Link
              style={{ flex: 1, justifyContent: "flex-end" }}
              as={Link}
              to="/search"
            >
              search
            </Nav.Link>
            <Nav.Link
              style={{ flex: 1, justifyContent: "flex-end" }}
              onClick={handleSignout}
              as={Link}
              to="/"
            >
              sign out
            </Nav.Link>
            <Nav.Link
              style={{ flex: 1, justifyContent: "flex-end" }}
              onClick={() => props.toggleSettings(true)}
            >
              <span className="glyphicon glyphicon-cog" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </>
    );
  } else {
    return <div></div>;
  }
}
