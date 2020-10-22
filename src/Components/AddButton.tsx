import React, { useState } from "react";
import { Button } from "react-bootstrap";

const unClickedColor = "#69B1BF";
const clickedColor = "#CAF1FE";

export default function AddButton(props: {
  onAdd: () => void
}) {
  const [buttonColor, setButtonColor] = useState(unClickedColor);
  return (
    <div>
      <Button
        size="lg"
        style={{
          margin: "auto",
          display: "block",
          borderRadius: "50%",
          width: 100,
          height: 100,
          fontWeight: "bold",
          fontSize: "3em",
          backgroundColor: buttonColor,
          border: "none",
        }}
        onClick={props.onAdd}
        onMouseEnter={(
          event: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => {
          setButtonColor(clickedColor);
        }}
        onMouseLeave={(
          event: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => {
          setButtonColor(unClickedColor);
        }}
      >
        +
      </Button>
    </div>
  );
}
