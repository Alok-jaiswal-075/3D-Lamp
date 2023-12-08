import React from "react";

export default function Brightness({ level, handleLevel }) {
  const inputStyles = {
    width: "10rem", 
    height: "2rem", 
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
    ":hover": {
      boxShadow: "0px 0px 5px 0px #ccc",
    },
    ":focus": {
      boxShadow: "0px 0px 5px 0px #007bff",
    },
    position:"absolute",
    left:"50%",
    transform:"translateX(-50%)",
    top:"18%",
    zIndex:"10"
  };

  return (
    <>
      <input
        type="range"
        min={0}
        max={100}
        onChange={handleLevel}
        value={level}
        style={inputStyles}
      />
    </>
  );
}
