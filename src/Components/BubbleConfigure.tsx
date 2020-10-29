import React, { useState, useRef } from "react";
import { ChromePicker } from "react-color";
import { Button, Form, Overlay, Tooltip } from "react-bootstrap";

export default function BubbleConfigure(props: {
  onDone: (backgroundColor: string, color: string, text: string) => void;
}) {
  const target = useRef(null);
  const [backgroundColor, setBackgroundColor] = useState("#69B1BF");
  const [color, setColor] = useState("#FFF");
  const [selected, setSelected] = useState(0);
  const [showTip, setShowTip] = useState(false);
  return selected === 2 ? (
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
              backgroundColor: backgroundColor,
              color: color,
              textAlign: "center",
              fontSize: "1.5rem",
            }}
            type="text"
            placeholder="Enter text"
            onChange={(event) =>
              props.onDone(backgroundColor, color, event.target.value)
            }
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
            backgroundColor: backgroundColor,
            color: color,
            fontSize: "1.5rem",
            borderRadius: "50px",
            width: "100px",
            height: "100px",
          }}
          size="lg"
          onClick={() => setSelected((selected + 1) % 3)}
        >
          {selected ? "Background" : "Text"}
        </Button>
        <Overlay target={target.current} show={showTip} placement="right">
          <Tooltip id="overlay">
            Click to set {selected === 0 ? "background" : ""} color
          </Tooltip>
        </Overlay>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <ChromePicker
          color={selected ? backgroundColor : color}
          onChange={(color, event) => {
						setShowTip(true);
            if (selected) setBackgroundColor(color.hex);
            else setColor(color.hex);
          }}
        />
      </div>
    </div>
  );
}
