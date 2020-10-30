import React, { useState } from "react";

export default function Bubble(props: {
  text: string;
  bgColor: string;
  txtColor: string;
}) {
  return (
    <div style={{ backgroundColor: props.bgColor, color: props.txtColor }}>
      {props.text}
    </div>
  );
}
