import React from "react";

const Sidebar = () => {
  return (
    <sidebar className="flex flex-col justify-between gap-8 min-h-screen max-h-screen w-80 p-4">
      <section>
        <div className="logo flex items-center gap-4 mb-8">
          <img
            src="/logo-white.png"
            className="w-10 h-10 bg-primary p-2 rounded-xl"
          />
          <div>
            <h3 className="font-bold text-primary">Lizilib</h3>
            <p className="text-gray-800 text-xs">
              Visualización y Análisis de Datos de licitaciones
            </p>
          </div>
        </div>
        <ul className="mt-4 mb-8">
          <li>
            <a
              href="#"
              className="flex items-center gap-4 p-2 hover:bg-gray-200 transition-colors rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                />
              </svg>
              <span>Competidores</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-4 p-2 hover:bg-gray-200 transition-colors rounded-lg"
            >
              <span>Instituciones</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-4 p-2 hover:bg-gray-200 transition-colors rounded-lg"
            >
              <span>Proveedores</span>
            </a>
          </li>
        </ul>
      </section>
    </sidebar>
  );
};

export default Sidebar;
