import React from "react";
import { Link } from "react-router-dom";
import ModalLayout from "../layouts/ModalLayout";
import useModalStore from "../store/modalStore";

const Home = () => {
  const toggleModal = useModalStore((state) => state.toggleModal);

  return (
    <div className="flex justify-center mt-10">
      <Link to="login">
        <button className="border-2 border-gray-950 p-5 mx-10" type="button">
          LOGIN
        </button>
      </Link>
      <Link to="register">
        <button className="border-2 border-gray-950 p-5 mx-10" type="button">
          REGISTER
        </button>
      </Link>
      <Link to="dashboard">
        <button className="border-2 border-gray-950 p-5 mx-10" type="button">
          DASHBOARD
        </button>
      </Link>

      <div className="transition-all duration-500">
        <h1 className="text-4xl font-bold mb-4">
          Ejemplo de Modal con Zustand y Tailwind CSS
        </h1>
        <button
          onClick={toggleModal}
          className="bg-primary text-white px-4 py-2 rounded-md"
        >
          Abrir Modal
        </button>
        <ModalLayout />
      </div>
    </div>
  );
};

export default Home;
