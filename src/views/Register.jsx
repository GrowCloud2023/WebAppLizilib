import React from "react";
import Steps from "../components/Steps";
import { Link } from "react-router-dom";
import RegisterLayout from "../layouts/RegisterLayout";

const Register = () => {
  return (
    <>
      <RegisterLayout>
        <div className="flex flex-col items-center">
          <div className="my-8">
            <h1 className="text-primary text-3xl font-medium tracking-widest mb-3">
              Lizilib
            </h1>
          </div>
          <Steps step1 />
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-6xl text-tertiary font-medium">
              Comencemos<span className="text-primary">.</span>
            </h1>
            <span className="text-tertiary font-medium mb-2">
              ¿Ya eres usuario?{" "}
              <a href="#" className="text-primary hover:underline">
                Ingresa
              </a>
            </span>
          </div>
          <div className="w-full mb-2">
            <form>
              <div className="flex justify-center mb-2">
                <input
                  type="text"
                  className="w-full max-w-sm py-2 px-4 rounded-lg outline-none border border-tertiary"
                  placeholder="Nombre completo"
                />
              </div>
              <div className="flex justify-center mb-2">
                <input
                  type="text"
                  className="w-full max-w-sm py-2 px-4 rounded-lg outline-none border border-tertiary"
                  placeholder="Rut"
                />
              </div>
              <div className="flex justify-center mb-2">
                <input
                  type="email"
                  className="w-full max-w-sm py-2 px-4 rounded-lg outline-none border border-tertiary"
                  placeholder="Correo electrónico"
                />
              </div>
              <div className="flex justify-center mb-2">
                <input
                  type="text"
                  className="w-full max-w-sm py-2 px-4 rounded-lg outline-none border border-tertiary"
                  placeholder="Telefono"
                />
              </div>
              <div className="flex justify-center mb-2">
                <input
                  type="password"
                  className="w-full max-w-sm py-2 px-4 rounded-lg outline-none border border-tertiary"
                  placeholder="Contraseña"
                />
              </div>
              <div className="flex justify-center mb-2">
                <input
                  type="password"
                  className="w-full max-w-sm py-2 px-4 rounded-lg outline-none border border-tertiary"
                  placeholder="Repetir contraseña"
                />
              </div>
              <div className="w-full max-w-sm mx-auto flex justify-end items-center text-primary mb-8">
                <a href="#" className="hover:underline transition-all">
                  ¿Olvidaste tu password?
                </a>
              </div>
              <div className="w-full max-w-sm mx-auto">
                <Link to="/register/2">
                  <button
                    type="submit"
                    className="w-full bg-primary py-2 px-4 rounded-lg text-white hover:bg-tertiary transition-all duration-500"
                  >
                    Siguiente
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </RegisterLayout>
    </>
  );
};

export default Register;
