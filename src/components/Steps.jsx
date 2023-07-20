import React from "react";
import { Link } from "react-router-dom";

const Steps = ({ step1, step2, step3 }) => {
  return (
    <div>
      <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100">
        <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
          {step1 ? (
            <Link to="/register">
              <li className="flex items-center gap-2 bg-white p-2">
                <span className="h-6 w-6 rounded-full bg-[#6EC63B] text-white text-center text-[10px]/6 font-bold">
                  1
                </span>
                <span className="hidden sm:block"> Información personal </span>
              </li>
            </Link>
          ) : (
            <li className="flex items-center gap-2 bg-white p-2">
              <span className="h-6 w-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold">
                1
              </span>
              <span className="hidden sm:block"> Información personal </span>
            </li>
          )}
          {step2 ? (
            <Link to="/register/2">
              <li className="flex items-center gap-2 bg-white p-2">
                <span className="h-6 w-6 rounded-full bg-[#6EC63B] text-center text-[10px]/6 font-bold text-white">
                  2
                </span>
                <span className="hidden sm:block">
                  {" "}
                  Información empresarial{" "}
                </span>
              </li>
            </Link>
          ) : (
            <li className="flex items-center gap-2 bg-white p-2">
              <span className="h-6 w-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold">
                3
              </span>
              <span className="hidden sm:block"> Información empresarial </span>
            </li>
          )}

          {step3 ? (
            <Link to="/register/3">
              <li className="flex items-center gap-2 bg-white p-2">
                <span className="h-6 w-6 rounded-full bg-[#6EC63B] text-white text-center text-[10px]/6 font-bold">
                  2
                </span>
                <span className="hidden sm:block"> Personalización </span>
              </li>
            </Link>
          ) : (
            <li className="flex items-center gap-2 bg-white p-2">
              <span className="h-6 w-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold">
                3
              </span>
              <span className="hidden sm:block"> Personalización </span>
            </li>
          )}
        </ol>
      </div>
    </div>
  );
};

export default Steps;
