import React from "react";
import Sidebar from "../components/Header/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <div className="h-full w-full bg-gray-100">
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pe-2 xl:mr-[313px] `}
        >
          <div className="h-full">
            Navbar
            <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
              CONTENIDO
              {children}
            </div>
            <div className="p-3">Footer</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
