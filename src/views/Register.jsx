import React from "react";
import Steps from "../components/Steps";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="register flex flex-col min-h-screen rounded-lg md:p-8">
        <div className="p-8">
          <h1 className="text-primary text-3xl font-medium tracking-widest mb-3">
            Lizilib
          </h1>
          <Steps step1 />
        </div>
        <div className="p-8">
          <h3 className="text-gray-500 uppercase text-sm font-bold mb-2">
            Empieza gratis
          </h3>
          <h1 className="text-6xl text-white font-medium mb-2">
            Comencemos<span className="text-primary">.</span>
          </h1>
          <span className="text-gray-500 font-medium">
            ¿Ya eres usuario?{" "}
            <a href="#" className="text-primary hover:underline">
              Ingresa
            </a>
          </span>
          <form>
            <div className="max-w-lg mb-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <input
                type="text"
                autoComplete="off"
                className="w-full py-3 px-4 rounded-xl outline-none bg-text-gray-100 text-[#343434] group"
                placeholder="Nombre(s)"
              />
              <input
                type="text"
                autoComplete="off"
                className="w-full py-3 px-4 rounded-xl outline-none bg-text-gray-100 text-[#343434] group"
                placeholder="Apellidos"
              />
            </div>
            <div className="max-w-lg mb-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <input
                type="text"
                autoComplete="off"
                className="w-full py-3 px-4 rounded-xl outline-none bg-text-gray-100 text-[#343434] group"
                placeholder="Rut"
              />
              <input
                type="email"
                autoComplete="off"
                className="w-full py-3 px-4 rounded-xl outline-none bg-text-gray-100 text-[#343434] group"
                placeholder="Email"
              />
            </div>
            <div className="max-w-lg mb-4">
              <input
                type="text"
                autoComplete="off"
                className="w-full py-3 px-4 rounded-xl outline-none bg-text-gray-100 text-[#343434] group"
                placeholder="Telefono"
              />
            </div>
            <div className="max-w-lg mb-4">
              <input
                type="password"
                autoComplete="off"
                className="w-full py-3 px-4 rounded-xl outline-none bg-text-gray-100 text-[#343434] group"
                placeholder="Contraseña"
              />
            </div>
            <div className="max-w-lg mb-4">
              <input
                type="password"
                autoComplete="off"
                className="w-full py-3 px-4 rounded-xl outline-none bg-text-gray-100 text-[#343434] group"
                placeholder="Repetir contraseña"
              />
            </div>
            <div className="max-w-lg flex justify-center md:justify-end mb-6">
              <a
                href="#"
                className="text-primary font-medium hover:text-green-600 transition-all duration-500"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <div className="max-w-lg">
              <Link to="/register/2">
                <button className="bg-primary text-white w-full py-3 px-4 rounded-full hover:bg-green-700 transition-all duration-500">
                  Siguiente
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
