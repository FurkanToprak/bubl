import React, { useEffect, useState } from "react";
import {auth} from "./firebase/test_cred";
import axios from 'axios';

export const AuthContext = React.createContext({
  currentUser: null,
});

export const AuthProvider = ({ children }: { children: any }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    // Auth Change
    // runs on page refresh
    auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
      console.log('new user!!!!', user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <h1>Loading...</h1>
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};