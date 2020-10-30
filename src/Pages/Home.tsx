import React from "react";
import ProfileHeader from '../Components/ProfileHeader';
import Board from '../Components/Board';

function Home() {
  return (
    <div style={{height: "100%", display: "flex", flexDirection: "column"}}>
      <ProfileHeader />
      <Board/>
    </div>
  );
}

export default Home;
