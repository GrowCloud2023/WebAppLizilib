import React from "react";
import { Link } from "react-router-dom";

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 absolute left-2 top-[50%] -translate-y-[50%] text-[#6EC63B]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div className="relative">
              <input
                type="password"
                className="w-full border py-2 px-10 rounded-md outline-none"
                placeholder="Ingresa tu contraseña"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 absolute left-2 top-[50%] -translate-y-[50%] text-[#6EC63B]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <div>
              <Link to="/">
                <button
                  type="submit"
                  className="w-full bg-[#6EC63B] py-2 px-4 text-white rounded-md hover:bg-green-600 transition-colors"
                >
                  Iniciar sesión
                </button>
              </Link>
            </div>
            <span className="flex items-center justify-center gap-2">
              ¿Olvidaste tu contraseña?{" "}
              <a
                href="#"
                className="text-[#6EC63B] hover:text-green-600  transition-colors"
              >
                Recuperar
              </a>
            </span>
          </form>
        </div>

        <div className="my-14">
          <p className="text-center relative text-gray-500 bg-white before:max-w-[50px] md:before:max-w-[120px] before:w-full before:-left-[60px] md:before:-left-[140px] before:h-[1px] before:bg-current before:absolute before:top-[50%] after:max-w-[50px] md:after:max-w-[120px] after:w-full after:h-[1px] after:bg-current after:absolute after:top-[50%] after:-right-[60px] md:after:-right-[140px]">
            O inicia sesión con
          </p>
        </div>

        <div className="flex items-center justify-center mb-8">
          <div>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border-2 border-slate-200 p-2 px-4 rounded-full"
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
              className="text-[#6EC63B] hover:text-green-600  transition-colors"
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
