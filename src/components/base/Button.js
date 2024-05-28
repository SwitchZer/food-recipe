import React from "react";

const Button = ({ name = "Button", className, ...props }) => {
  return (
    <button
      {...props}
      className={`btn bg-[#EFC81A] text-white hover:bg-yellow-500 ${className}`}
    >
      {name}
    </button>
  );
};

export default Button;
