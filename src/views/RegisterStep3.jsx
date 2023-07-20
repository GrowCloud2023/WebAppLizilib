import React from "react";
import Steps from "../components/Steps";
import { Link } from "react-router-dom";

const RegisterStep3 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Steps step3 />
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
          <h1 className="text-6xl text-gray-700 font-medium mb-2">
            Comencemos<span className="text-[#6EC63B]">.</span>
          </h1>
          <form className="mt-8">
            <div className="mb-4">
              <span className="text-gray-500 font-medium">
                Cuéntanos sobre los rubros de tu interés, esto nos ayudará a
                brindarte las licitaciones más personalizadas
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
              <div>
                <button className="block w-11/12 text-center text-2xl border border-[#6EC63B] rounded-full text-green-600 p-6 shadow-xl transition-all duration-500 hover:border-[#6EC63B]/50 hover:shadow-[#6EC63B]/50">
                  Educación
                </button>
              </div>
              <div>
                <button className="block w-11/12 text-center text-2xl border border-[#6EC63B] rounded-full text-green-600 p-6 shadow-xl transition-all duration-500 hover:border-[#6EC63B]/50 hover:shadow-[#6EC63B]/50">
                  Softwares
                </button>
              </div>
              <div>
                <button className="block w-11/12 text-center text-2xl border border-[#6EC63B] rounded-full text-green-600 p-6 shadow-xl transition-all duration-500 hover:border-[#6EC63B]/50 hover:shadow-[#6EC63B]/50">
                  Construcción
                </button>
              </div>
              <div>
                <button className="block w-11/12 text-center text-2xl border border-[#6EC63B] rounded-full text-green-600 p-6 shadow-xl transition-all duration-500 hover:border-[#6EC63B]/50 hover:shadow-[#6EC63B]/50">
                  Salud
                </button>
              </div>
              <div>
                <button className="block w-11/12 text-center text-2xl border border-[#6EC63B] rounded-full text-green-600 p-6 shadow-xl transition-all duration-500 hover:border-[#6EC63B]/50 hover:shadow-[#6EC63B]/50">
                  Ventas
                </button>
              </div>
            </div>
            <div className="max-w-lg mx-auto mt-8">
              <Link to="/">
                <button className="bg-[#6EC63B] text-white w-full py-3 px-4 rounded-full transition-all duration-500 hover:bg-green-600 ">
                  Finalizar
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterStep3;
