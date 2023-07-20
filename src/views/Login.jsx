import React from "react";
import { Link } from "react-router-dom";
import { BsEnvelope, BsLock } from "react-icons/bs";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-lg">
        <div className="flex justify-center mb-8">
          <h1 className="text-6xl font-bold text-[#6EC63B]">LIZILIB</h1>
        </div>
        <h1 className="text-3xl text-gray-900 mb-8 flex justify-center">
          Inicia sesión en tu cuenta
        </h1>
        <div className="bg-white w-full rounded-xl p-10 mb-8">
          <div className="flex flex-col items-center gap-1 mb-8">
            <p className="text-gray-400 text-md font-bold">
              Introduce tu dirección de correo electrónico de trabajo
            </p>
          </div>
          <form className="flex flex-col gap-4">
            <div className="relative">
              <input
                type="email"
                className="w-full border py-2 px-10 rounded-md outline-none"
                placeholder="Ingresa tu correo"
              />
              <BsEnvelope className="w-5 h-5 absolute left-2 top-[50%] -translate-y-[50%] text-[#6EC63B]" />
            </div>
            <div className="relative">
              <input
                type="password"
                className="w-full border py-2 px-10 rounded-md outline-none"
                placeholder="Ingresa tu contraseña"
              />
              <BsLock className="w-5 h-5 absolute left-2 top-[50%] -translate-y-[50%] text-[#6EC63B]" />
            </div>
            <div>
              <Link to="/">
                <button
                  type="submit"
                  className="w-full bg-[#6EC63B] py-2 px-4 text-white rounded-md hover:bg-green-600 transition-all duration-500"
                >
                  Iniciar sesión
                </button>
              </Link>
            </div>
            <span className="flex items-center justify-center gap-2">
              ¿Olvidaste tu contraseña?{" "}
              <a
                href="#"
                className="text-[#6EC63B] hover:text-green-600  transition-all duration-500"
              >
                Recuperar
              </a>
            </span>
          </form>
        </div>

        <div className="my-10">
          <p className="text-center relative text-gray-500 bg-white before:max-w-[50px] md:before:max-w-[120px] before:w-full before:-left-[60px] md:before:-left-[140px] before:h-[1px] before:bg-current before:absolute before:top-[50%] after:max-w-[50px] md:after:max-w-[120px] after:w-full after:h-[1px] after:bg-current after:absolute after:top-[50%] after:-right-[60px] md:after:-right-[140px]">
            O inicia sesión con
          </p>
        </div>

        <div className="flex items-center justify-center mb-8">
          <div>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border-2 border-slate-200 p-2 px-4 rounded-full hover:bg-gray-200 transition-all duration-500"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                width="20"
                height="20"
              />
              <span className="ml-2">Ingresar con Google</span>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <span>
            ¿No tienes cuenta?{" "}
            <Link
              to="/register"
              className="text-[#6EC63B] hover:text-green-600  transition-all duration-500"
            >
              Registrate
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
