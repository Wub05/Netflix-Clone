import React from "react";

export const Button = ({ btn_title }) => {
  return (
    <div className="text-semibold rounded-sm ring-1 text-black px-4 py-1 bg-white cursor-pointer">
      {btn_title}
    </div>
  );
};

Button;
