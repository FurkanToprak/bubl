import React, { useContext, useState } from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import LogIn from "./Pages/LogIn";
import SettingsModal from "./Components/SettingsModal";
import { AuthProvider } from "./Auth";
import BublNavbar from "./Components/BublNavbar";
import PrivateRoute from "./PrivateRoute.jsx";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [settings, toggleSettings] = useState(false);
  return (
    <AuthProvider>
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
            <BublNavbar toggleSettings={toggleSettings} />
          </Navbar>
          {settings && <SettingsModal handleClose={() => toggleSettings(false)} />}
          <Switch>
            <PrivateRoute exact path="/bubl" component={Home} /> 
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/*"><LogIn /></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
