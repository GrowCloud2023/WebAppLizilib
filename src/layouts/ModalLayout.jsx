import React from "react";
import useModalStore from "../store/modalStore";

const ModalLayout = () => {
  const showModal = useModalStore((state) => state.showModal);
  const toggleModal = useModalStore((state) => state.toggleModal);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">TITULO</h2>
            <p className="mb-4">
              SE PERSONALIZARÁ Y SE AGREGARÁ PARA SUS DEBIDAS FUNCIONES COMO EL
              FORM Y ENCUESTAS, ETC. AQUÍ PONDRE CHILDRENS PORQUE SE USARA COMO LAYOUT.
            </p>
            <button
              onClick={toggleModal}
              className="bg-primary text-white px-4 py-2 rounded-md"
            >
              Cerrar Modal
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalLayout;
