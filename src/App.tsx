import React, { useState } from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import LogIn from "./Pages/LogIn";
import SettingsModal from "./Components/SettingsModal";

function App() {
  const [isSignedIn, setIsSignedIn ] = useState(true);
  const [settings, toggleSettings] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <BrowserRouter>
        <Navbar
          expand="lg"
          sticky="top"
          variant="dark"
          style={{
            backgroundColor: "#69B1BF",
            fontSize: "2em"
          }}
        >
          <Navbar.Brand
            style={{
              color: "#FFFFFF",
              fontSize: "3em"
            }}
          >
            bubl
          </Navbar.Brand>
          {isSignedIn && (
            <>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" style={{ display: "flex", width: "100%"}}>
                  <Nav.Link style={{ flex: 1, justifyContent: "flex-end"}} as={Link} to="/">
                    board
                  </Nav.Link>
                  <Nav.Link style={{ flex: 1, justifyContent: "flex-end"}} as={Link} to="/search">
                    search
                  </Nav.Link>
                  <Nav.Link style={{ flex: 1, justifyContent: "flex-end"}} onClick={() => setIsSignedIn(false)} as={Link} to="/">
                    sign out
                  </Nav.Link>
                  <Nav.Link style={{ flex: 1, justifyContent: "flex-end"}} onClick={() => toggleSettings(true)}><span className="glyphicon glyphicon-cog"/></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </>
          )}
        </Navbar>
        {settings && <SettingsModal handleClose={() => toggleSettings(false)}/>}
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
            <Route path="/*"><LogIn setIsSignedIn={setIsSignedIn}/></Route>
          )}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
