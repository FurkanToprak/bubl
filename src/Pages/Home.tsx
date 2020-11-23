import React, { useContext } from "react";
import ProfileHeader from '../Components/ProfileHeader';
import Board from '../Components/Board';
import { AuthContext } from '../Auth';

function Home() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div style={{height: "100%", display: "flex", flexDirection: "column"}}>
      <ProfileHeader currentUser={currentUser}/>
      <Board currentUser={currentUser} editMode={true}/>
    </div>
  );
}

export default Home;
