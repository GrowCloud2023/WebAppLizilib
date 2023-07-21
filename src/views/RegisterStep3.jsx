import React from "react";
import Steps from "../components/Steps";
import { Link } from "react-router-dom";
import RegisterLayout from "../layouts/RegisterLayout";

const RegisterStep3 = () => {
  return (
    <RegisterLayout>
      <div className="flex flex-col items-center justify-center">
        <div className="my-8">
          <h1 className="text-primary text-3xl font-medium tracking-widest mb-3">
            Lizilib
          </h1>
        </div>
        <Steps step3 />
        <div className="flex flex-col items-center gap-8 mb-8">
          <h1 className="text-6xl text-tertiary font-medium">
            Comencemos<span className="text-primary">.</span>
          </h1>
        </div>
        <div className="w-full mb-2">
          <form>
            <div className="mb-4 lg:mx-8 sm:mx-20 mx-3">
              <span className="text-gray-500 font-medium">
                Cuéntanos sobre los rubros de tu interés, esto nos ayudará a
                brindarte las licitaciones más personalizadas
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
              <div>
                <button className="block w-11/12 bg-white text-center text-sm lg:text-xl xl:text-2xl border border-primary rounded-full text-green-600 p-6 shadow-xl transition-all duration-500 hover:border-primary/50 hover:shadow-primary/50">
                  Educación
                </button>
              </div>
              <div>
                <button className="block w-11/12 bg-white text-center text-sm lg:text-xl xl:text-2xl border border-primary rounded-full text-green-600 p-6 shadow-xl transition-all duration-500 hover:border-primary/50 hover:shadow-primary/50">
                  Softwares
                </button>
              </div>
              <div>
                <button className="block w-11/12 bg-white text-center text-sm lg:text-xl xl:text-2xl border border-primary rounded-full text-green-600 p-6 shadow-xl transition-all duration-500 hover:border-primary/50 hover:shadow-primary/50">
                  Construcción
                </button>
              </div>
              <div>
                <button className="block w-11/12 bg-white text-center text-sm lg:text-xl xl:text-2xl border border-primary rounded-full text-green-600 p-6 shadow-xl transition-all duration-500 hover:border-primary/50 hover:shadow-primary/50">
                  Salud
                </button>
              </div>
              <div>
                <button className="block w-11/12 bg-white text-center text-sm lg:text-xl xl:text-2xl border border-primary rounded-full text-green-600 p-6 shadow-xl transition-all duration-500 hover:border-primary/50 hover:shadow-primary/50">
                  Ventas
                </button>
              </div>
            </div>
            <div className="w-full max-w-sm mx-auto">
              <Link to="/">
                <button
                  type="submit"
                  className="w-full bg-primary py-2 px-4 rounded-lg text-secondary hover:bg-tertiary transition-all duration-500"
                >
                  Finalizar
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </RegisterLayout>
  );
};

export default RegisterStep3;
