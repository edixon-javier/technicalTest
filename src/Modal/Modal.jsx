import { createPortal } from "react-dom";

const Modal = ({ onClose, message, onConfirm }) => {
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded shadow-md text-center w-64">
        <p className="mb-4">{message}</p>
        <div className="flex justify-between space-x-4">
          <button
            onClick={onConfirm}
            className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600"
          >
            Aceptar
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
