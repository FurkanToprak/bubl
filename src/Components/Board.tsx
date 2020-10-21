import React from "react";
import AddButton from "./AddButton";

function Board() {
  return (
    <div style={{
        height: 3000
    }}>
        <div style={{ paddingTop: 20, paddingBottom: 20}}><AddButton/></div>
        
    </div>
  );
}

export default Board;
