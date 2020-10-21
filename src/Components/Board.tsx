import React from "react";
import AddButton from "./AddButton";

function Board() {
  return (
    <div
      style={{
        height: 3000,
        backgroundColor: "#F0F0F0",
      }}
    >
      <div style={{ paddingTop: 20, paddingBottom: 20 }}>
        <AddButton />
      </div>
    </div>
  );
}

export default Board;
