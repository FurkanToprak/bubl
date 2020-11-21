import React from "react";

export default function Bubble(props: {
  text: string;
  txtColor: string;
  bgColor: string;
  borderColor: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        backgroundColor: props.bgColor,
        borderWidth: 3,
        borderColor: props.borderColor,
        borderStyle: "solid"
      }}
    >
      <div
        style={{
          color: props.txtColor,
          textAlign: "center",
          paddingTop: "50%",
        }}
      >
        {props.text}
      </div>
    </div>
  );
}
