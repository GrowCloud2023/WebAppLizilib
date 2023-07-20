import React from "react";

const RegisterLayout = ({ children }) => {
  return (
    <div className="register flex flex-col min-h-screen rounded-lg md:p-8"> 
      {children}
    </div>
  );
};

export default RegisterLayout;
