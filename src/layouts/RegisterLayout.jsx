import React from "react";

const RegisterLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="md:border-2 border-gray-100 shadow-2xl  md:rounded-xl md:p-4">{children}</div>
    </div>
  );
};

export default RegisterLayout;
