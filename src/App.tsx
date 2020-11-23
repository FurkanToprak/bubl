import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import LogIn from "./Pages/LogIn";
import SettingsModal from "./Components/SettingsModal";
import { AuthProvider } from "./Auth";
import BublNavbar from "./Components/BublNavbar";
import PrivateRoute from "./PrivateRoute.jsx";
import View from "./Pages/View";

function App() {
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
              href="/"
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
            <Route exact path="/b/:bubl" component={View} />
            <Route path="/*"><LogIn /></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
