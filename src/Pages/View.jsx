import React, { useState, useEffect } from "react";
import ProfileHeader from '../Components/ProfileHeader';
import Board from '../Components/Board';
import { AuthContext } from '../Auth';
import axios from "axios"

function View(props) {
  const bubl_id = props.match.params.bubl;
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({
    'displayName': '',
    'photoURL': '',
    'uid': 'empty'
  });

  useEffect(() => {
    const url =
      process.env.REACT_APP_BACKEND_URL + "users/get?bubl=" + bubl_id;
    axios.get(url).then((res) => {
      setCurrentUser(res.data.user);
      setLoading(false);
    });
  }, []);


  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {
        loading ? <div>Loading...</div> : 
        <><ProfileHeader currentUser={currentUser} />
          <Board currentUser={currentUser} editMode={false} /></>
      }
    </div>
  );
}

export default View;
