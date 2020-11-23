import React, { useState, useRef } from "react";
import { ChromePicker } from "react-color";
import { Button, Form, Overlay, Tooltip } from "react-bootstrap";

export default function BubbleConfigure(props: {
  onDone: (backgroundColor: string, color: string, text: string, borderColor: string) => void;
}) {
  const target = useRef(null);
  const [backgroundColor, setBackgroundColor] = useState("#69B1BF");
  const [borderColor, setBorderColor] = useState("#000");
  const [color, setColor] = useState("#FFF");
  const [selected, setSelected] = useState(0);
  const [showTip, setShowTip] = useState(false);
  return selected === 3 ? (
    <div
      style={{
        display: "flex",
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "center",
      }}
    >
      <Form>
        <Form.Group>
          <Form.Control
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor,
              color: color,
              textAlign: "center",
              fontSize: "1.5rem",
              borderColor,
              borderStyle: "solid",
              borderWidth: 3,
            }}
            type="text"
            placeholder="Enter text"
            onChange={(event) => {
              props.onDone(backgroundColor, color, event.target.value, borderColor);
            }}
          />
        </Form.Group>
      </Form>
    </div>
  ) : (
    <div style={{ textAlign: "center", fontSize: "1.5rem" }}>
      <div
        style={{
          display: "flex",
          marginTop: 10,
          marginBottom: 10,
          justifyContent: "center",
        }}
      >
        <Button
          ref={target}
          style={{
            backgroundColor,
            borderColor,
            borderStyle: "solid",
            borderWidth: 3,
            color: color,
            fontSize: "1.5rem",
            borderRadius: "50px",
            width: "100px",
            height: "100px",
          }}
          size="lg"
          onClick={() => setSelected(selected + 1)}
        >
          {selected === 2 ? "Border" : selected === 1 ? "Background" : "Text"}
        </Button>
        <Overlay target={target.current} show={showTip} placement="right">
          <Tooltip id="overlay">
            Click to set {selected === 2 ? "border" : selected === 0 ? "background" : ""} color
          </Tooltip>
        </Overlay>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <ChromePicker
          color={selected === 2 ? borderColor : selected === 1 ? backgroundColor : color}
          onChange={(color, event) => {
            setShowTip(true);
            if (selected === 1) setBackgroundColor(color.hex);
            else if (selected === 2) setBorderColor(color.hex);
            else setColor(color.hex);
          }}
        />
      </div>
    </div>
  );
}
//https://davidmathlogic.com/colorblind/#%23D81B60-%231E88E5-%23FFC107-%23004D40