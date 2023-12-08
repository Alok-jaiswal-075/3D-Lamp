import React from "react";

export default function Button({ toggleLamp, lampOn }) {
  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: lampOn ? '#FF6347' : '#32CD32',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.5rem',
    outline: 'none',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
    position: 'absolute',
    left : '50%',
    transform : 'translateX(-50%)',
    top:'10%',
    zIndex:'10',

  };

  return (
    <div className="">
      <button style={buttonStyle} onClick={toggleLamp}>
        {lampOn ? "OFF" : "ON"}
      </button>
    </div>
  );
}
