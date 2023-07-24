import React from "react";

const RegisterLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {children}
      <div className="hidden lg:flex items-center justify-center border-t border-r border-b rounded-tr-lg rounded-br-lg ">
        <img
          src="https://img.lovepik.com/element/45009/8997.png_860.png"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default RegisterLayout;
