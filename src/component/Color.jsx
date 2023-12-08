import React from "react";

export default function Color({ color, handleColor }) {
    console.log(color)

  const inputStyles = {
    position:"absolute",
    left:"55%",
    transform:"translateX(-50%)",
    top:"11%",
    zIndex:"10",
	border: "0",
	width: "50px",
	height: "32px",
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
