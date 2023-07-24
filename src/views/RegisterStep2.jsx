import React from "react";
import Steps from "../components/Steps";
import RegisterLayout from "../layouts/RegisterLayout";
import { Link } from "react-router-dom";

const RegisterStep2 = () => {
  return (
    <RegisterLayout>
      <div className="flex flex-col items-center justify-center">
        <div className="my-8">
          <h1 className="text-primary text-3xl font-medium tracking-widest mb-3">
            Lizilib
          </h1>
        </div>
        <Steps step2 />
        <div className="flex flex-col items-center gap-8 mb-8">
          <h1 className="text-6xl text-tertiary font-medium">
            Comencemos<span className="text-primary">.</span>
          </h1>
        </div>
        <div className="w-full mb-2">
          <form>
            <div className="flex justify-center mb-4">
              <input
                type="text"
                className="w-full max-w-sm py-2 px-4 rounded-lg outline-none border border-tertiary"
                placeholder="Nombre legal"
              />
            </div>
            <div className="flex justify-center mb-4">
              <input
                type="text"
                className="w-full max-w-sm py-2 px-4 rounded-lg outline-none border border-tertiary"
                placeholder="Nombre de fantasía"
              />
            </div>
            <div className="flex justify-center mb-4">
              <input
                type="text"
                className="w-full max-w-sm py-2 px-4 rounded-lg outline-none border border-tertiary"
                placeholder="Rut"
              />
            </div>
            <div className="flex justify-center mb-4">
              <input
                type="email"
                className="w-full max-w-sm py-2 px-4 rounded-lg outline-none border border-tertiary"
                placeholder="Correo electrónico institucional"
              />
            </div>
            <div className="flex justify-center mb-4">
              <input
                type="text"
                className="w-full max-w-sm py-2 px-4 rounded-lg outline-none border border-tertiary"
                placeholder="Telefono"
              />
            </div>
            <div className="w-full max-w-sm mx-auto">
              <Link to="/register/3">
                <button
                  type="submit"
                  className="w-full bg-primary py-2 px-4 rounded-lg text-secondary hover:bg-tertiary transition-all duration-500"
                >
                  Siguiente
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </RegisterLayout>
  );
};

export default RegisterStep2;
