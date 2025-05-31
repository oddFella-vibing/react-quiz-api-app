import React from "react";

interface ButtonPropsType {
  label: string;
  handleClick: () => {};
}

const MyButt = ({ label, handleClick }: ButtonPropsType) => {
  return (
    <button className="border" onClick={() => handleClick}>
      {label}
    </button>
  );
};

export default MyButt;
