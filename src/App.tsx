import React from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import LogIn from "./Pages/LogIn";

const signOut = () => {};
function App() {
  const isSignedIn = false;
  return (
    <div
      style={{
        backgroundColor: "#F0F0F0",
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
                  <Nav.Link onClick={signOut} as={Link} to="/">
                    sign out
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </>
          )}
        </Navbar>
        <Switch>
          <Route exact path="/">
            {isSignedIn ? <Home /> : <LogIn />}
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
