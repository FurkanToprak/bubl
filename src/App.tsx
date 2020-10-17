import React from "react";
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Search from './Pages/Search';
import SignOut from './Pages/Signout';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>bubl</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                <Nav.Link as={Link} to="/search">Search</Nav.Link>
                <Nav.Link as={Link} to="/signout">Sign Out</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
          <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/profile"><Profile /></Route>
          <Route path="/search"><Search /></Route>
          <Route path="/signout"><SignOut /></Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
