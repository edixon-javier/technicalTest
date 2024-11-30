import React, { useEffect, useState } from "react";
import Paginator from "../paginator/paginator";
import { useFetch } from "../hooks/useFech";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const { data, loading, deleteData } = useFetch();
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/user/${id}`);
  };

  useEffect(() => {
    if (data && data.data) {
      setUsers(data.data);
    }
  }, [data]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  const handleDelete = (user) => {
    setSelectedUser(user);
    setModalMessage(
      `¿Estás seguro de que quieres eliminar a ${user.firstName}?`
    );
    setShowModal(true);
  };

  const confirmDelete = async () => {
    if (selectedUser) {
      const success = await deleteData(selectedUser.id);
      if (success) {
        setUsers(users.filter((user) => user.id !== selectedUser.id));
        setShowModal(false);
      } else {
        console.error("Error eliminando usuario");
      }
    }
  };

  const capitalizeFirstLetter = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div className="p-4 mb-4">
      <div className="flex justify-end space-x-4 pb-4">
        <input
          type="text"
          placeholder="Buscar usuarios"
          className="border border-gray-300 rounded-md p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={() => navigate("/create-user")}
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
        >
          Crear Usuario
        </button>
      </div>
      <div className="border border-gray-300 rounded-md p-4 mb-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Nombres y Apellidos</th>
              <th className="py-2 px-4 border-b">Foto</th>
              <th className="text-end py-2 px-4 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b">
                  <strong>{user.id}</strong>
                </td>
                <td className="py-2 px-4 border-b">
                  {capitalizeFirstLetter(user.title)}. {user.firstName}{" "}
                  {user.lastName}
                </td>
                <td className="py-2 px-4 border-b">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user.picture}
                    alt="Foto"
                  />
                </td>
                <td className="text-right py-2 px-4 border-b">
                  <div className="space-x-2">
                    <button
                      onClick={() => handleView(user.id)}
                      className="bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600"
                    >
                      Ver
                    </button>
                    <button
                      onClick={() => navigate(`/update-user/${user.id}`)}
                      className="bg-yellow-500 text-white py-1 px-2 rounded-md hover:bg-yellow-600"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(user)}
                      className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600"
                    >
                      Borrar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Paginator />

      {showModal && (
        <Modal
          message={modalMessage}
          onClose={() => setShowModal(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
};

export default Content;
