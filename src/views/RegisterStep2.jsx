import React from "react";
import Steps from "../components/Steps";
import { Link } from "react-router-dom";

const RegisterStep2 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Steps step2 />
      <div className="mt-3">
        <h1 className="text-gray-700 text-3xl font-medium tracking-widest">
          Lizilib
        </h1>
      </div>
      <div className="max-w-lg w-full p-8">
          <h1 className="text-6xl text-gray-700  font-medium mb-2">
            Comencemos<span className="text-[#6EC63B]">.</span>
          </h1>
          <form className="mt-8">
            <div className="mb-4">
              <span className="text-gray-500 font-medium">
                Cuentanos sobre tu empresa
              </span>
            </div>
            <div className="max-w-lg mb-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <input
                type="text"
                autoComplete="off"
                className="w-full py-3 px-4 rounded-xl outline-none bg-gray-100 text-[#343434] group"
                placeholder="Nombre legal"
              />
              <input
                type="text"
                autoComplete="off"
                className="w-full py-3 px-4 rounded-xl outline-none bg-gray-100 text-[#343434] group"
                placeholder="Nombre de fantasía"
              />
            </div>
            <div className="max-w-lg mb-4">
              <input
                type="text"
                autoComplete="off"
                className="w-full py-3 px-4 rounded-xl outline-none bg-gray-100 text-[#343434] group"
                placeholder="Rut"
              />
            </div>
            <div className="max-w-lg mb-4">
              <input
                type="email"
                autoComplete="off"
                className="w-full py-3 px-4 rounded-xl outline-none bg-gray-100 text-[#343434] group"
                placeholder="Email institucional"
              />
            </div>
            <div className="max-w-lg mb-4">
              <input
                type="text"
                autoComplete="off"
                className="w-full py-3 px-4 rounded-xl outline-none bg-gray-100 text-[#343434] group"
                placeholder="Telefono"
              />
            </div>
            <Link to="/register/3">
              <div className="max-w-lg">
                <button className="bg-[#6EC63B] text-white w-full py-3 px-4 rounded-full hover:bg-green-600 transition-all duration-500">
                  Siguiente
                </button>
              </div>
            </Link>
          </form>
      </div>
    </div>
  );
};

export default RegisterStep2;
