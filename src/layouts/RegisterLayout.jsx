import React from "react";

const RegisterLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-slate-100">
      {children}
      <div className="hidden lg:flex items-center justify-center border-t border-r border-b rounded-tr-lg rounded-br-lg ">
        <img
          src="https://www.izied.com/pluginfile.php/1/theme_moove/sliderimage1/1679071661/Green%20welcome%20to%20our%20classroom%20banner%20%281%29.png"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default RegisterLayout;
