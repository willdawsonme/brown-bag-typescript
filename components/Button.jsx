import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <div
      style={{
        display: "inline-block",
        padding: "16px 24px",
        background: "slategray",
        borderRadius: 4,
        fontWeight: "bold",
        fontSize: "0.75em",
        userSelect: "none"
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
