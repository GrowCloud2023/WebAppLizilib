import React from "react";
import Steps from "../components/Steps";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Steps />
        <div className="mt-3">
          <h1 className="text-gray-700 text-3xl font-medium tracking-widest">
            Lizilib
          </h1>
        </div>
        <div className="p-8">
          <div className="p-8">
            <h3 className="text-gray-500 uppercase text-sm font-bold mb-2">
              Empieza gratis
            </h3>
            <h1 className="text-6xl text-gray-700  font-medium mb-2">
              Comencemos<span className="text-[#6EC63B]">.</span>
            </h1>
            <span className="text-gray-500 font-medium">
              ¿Ya eres usuario?{" "}
              <a href="#" className="text-[#6EC63B] hover:underline">
                Ingresa
              </a>
            </span>
            <form className="mt-8">
              <div className="mb-4">
                <span className="text-gray-500 font-medium">
                  Cuentanos sobre ti
                </span>
              </div>
              <div className="max-w-lg mb-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <input
                  type="text"
                  autoComplete="off"
                  className="w-full py-3 px-4 rounded-xl outline-none bg-gray-100 text-[#343434] group"
                  placeholder="Nombre(s)"
                />
                <input
                  type="text"
                  autoComplete="off"
                  className="w-full py-3 px-4 rounded-xl outline-none bg-gray-100 text-[#343434] group"
                  placeholder="Apellidos"
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
                  placeholder="Email"
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
              <div className="max-w-lg mb-4">
                <input
                  type="password"
                  autoComplete="off"
                  className="w-full py-3 px-4 rounded-xl outline-none bg-gray-100 text-[#343434] group"
                  placeholder="Contraseña"
                />
              </div>
              <div className="max-w-lg mb-4">
                <input
                  type="password"
                  autoComplete="off"
                  className="w-full py-3 px-4 rounded-xl outline-none bg-gray-100 text-[#343434] group"
                  placeholder="Repetir contraseña"
                />
              </div>
              <Link to="/">
                <div className="max-w-lg">
                  <button className="bg-[#6EC63B] text-white w-full py-3 px-4 rounded-full hover:bg-green-600 transition-colors">
                    Siguiente
                  </button>
                </div>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
