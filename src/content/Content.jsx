import { useEffect, useState } from "react";
import { SlPencil, SlTrash } from "react-icons/sl";
import { VscOpenPreview } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFech";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";
import Paginator from "../paginator/paginator";

const Content = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [page, setPage] = useState(0);  
  const { data, loading, deleteData } = useFetch("", page, 5);
  const navigate = useNavigate();


  const totalPages = data ? Math.ceil(data.total / 5) : 1;
  

  const handleView = (id) => {
    navigate(`/user/${id}`);
  };

  useEffect(() => {
    if (data && data.data) {
      setUsers(data.data);
      setFilteredUsers(data.data); 
    }
  }, [data]);

  useEffect(() => {
    const filtered = users.filter((user) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  if (loading) {
    return <Loading />;
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
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="border border-gray-300 rounded-md p-2 w-80 focus:outline-none focus:ring-2 focus:ring-green-500"
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
            {filteredUsers.map((user) => (
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
                      className="bg-blue-500 text-white py-2 px-2 rounded-md hover:bg-blue-600 w-8 h-8"
                    >
                      <VscOpenPreview />
                    </button>
                    <button
                      onClick={() => navigate(`/update-user/${user.id}`)}
                      className="bg-yellow-500 text-white py-2 px-2 rounded-md hover:bg-yellow-600 w-8 h-8"
                    >
                      <SlPencil />
                    </button>
                    <button
                      onClick={() => handleDelete(user)}
                      className="bg-red-500 text-white py-2 px-2 rounded-md hover:bg-red-600 w-8 h-8"
                    >
                      <SlTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Paginator
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />

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
