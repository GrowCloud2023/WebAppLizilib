import React from "react";
import MainLayout from "../layouts/MainLayout";
import MainPage from "./Competidores";

const Dashboard = () => {
  return (
    <MainLayout>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Main page</p>
      <div className="grid lg:flex gap-5 mb-16">
        <div className="rounded lg:w-1/4 bg-white h-40 shadow-sm">
          <p>Cantidad de oportunidades abiertas</p>
          <p>346</p>
        </div>
        <div className="rounded bg-white h-52 md:h-40 shadow-sm w-full">
          <h1>BUSCAR</h1>
          <div className="flex flex-col md:flex-row justify-between items-center md:p-8">
            <div className="rounded border-2 border-black h-10 shadow-sm">
              ID O NOMBRE
            </div>
            <div className="rounded border-2 border-black h-10 shadow-sm">
              FAMILIA
            </div>
            <div className="rounded border-2 border-black h-10 shadow-sm">
              CLASE
            </div>
            <div className="rounded border-2 border-black h-10 shadow-sm">
              ENTRE FECHAS
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 lg:flex gap-5 mb-16">
        <div className="rounded bg-white lg:w-1/4 h-80 shadow-sm">FILTROS</div>
        <div className="rounded bg-yellow-300 h-82 lg:w-full shadow-sm">
          TARJETA LICITACION
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
