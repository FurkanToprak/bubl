import React, { useState } from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import LogIn from "./Pages/LogIn";

function App() {
  const [isSignedIn, setIsSignedIn ] = useState(true);
  return (
    <div
      style={{
        backgroundColor: "#F0F0F0",
        display: "flex",
        flexDirection: "column",
        height: "100%"
      }}
    >
      <BrowserRouter>
        <Navbar
          expand="lg"
          sticky="top"
          variant="dark"
          style={{
            backgroundColor: "#69B1BF",
          }}
        >
          <Navbar.Brand
            style={{
              color: "#FFFFFF",
            }}
          >
            bubl
          </Navbar.Brand>
          {isSignedIn && (
            <>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link as={Link} to="/">
                    board
                  </Nav.Link>
                  <Nav.Link as={Link} to="/search">
                    search
                  </Nav.Link>
                  <Nav.Link onClick={() => setIsSignedIn(false)} as={Link} to="/">
                    sign out
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </>
          )}
        </Navbar>
        <Switch>
          {isSignedIn ? (
            <>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/search">
                <Search />
              </Route>
            </>
          ) : (
            <Route path="/*"><LogIn/></Route>
          )}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
