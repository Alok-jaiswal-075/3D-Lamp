import React from "react";

export default function Color({ color, handleColor }) {
    console.log(color)

  const inputStyles = {
    position:"absolute",
    left:"50%",
    transform:"translateX(-50%)",
    top:"12%",
    zIndex:"10",
	border: "0",
	width: "4rem",
	height: "2.2rem",
    padding:"0",
    borderRadius:"10px"
  };

  return (
    <>
      <input
        type="color"
        onChange={handleColor}
        value={color}
        style={inputStyles}
      />
    </>
  );
}
