import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen grid lg:grid-cols-8 gap-4">
      sidebar
      <div className="lg:col-span-7 px-4 h-full">
        navbar
        <main className="rounded-xl h-[90vh] overflow-y-scroll">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
