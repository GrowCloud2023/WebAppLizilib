import React from "react";

const RegisterLayout = ({ children }) => {
  return (
    <div className="register flex flex-col items-center justify-center min-h-screen">
      {children}
    </div>
  );
};

export default RegisterLayout;
