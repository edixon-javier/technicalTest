import React, { useEffect, useState } from "react";
import Paginator from "../paginator/paginator";
import { useFetchFakeData } from "../hooks/useFechFakeData";

const Content = () => {
  const [users, setUsers] = useState([]);
  const { data, loading } = useFetchFakeData();

  useEffect(() => {
    if(data && data.data){
      setUsers(data.data);
    }
  }, [data])
  

  if (loading) {
    return <div>Cargando...</div>;
  }
  

  return (
    <div className="p-4 mb-4">
      <div className="flex justify-end space-x-4 pb-4">
        <input
          type="text"
          placeholder="Buscar usuarios"
          className="border border-gray-300 rounded-md p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
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
                <td className="py-2 px-4 border-b">{user.id}</td>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user.photo}
                    alt="Foto"
                  />
                </td>
                <td className="text-right py-2 px-4 border-b">
                  <div className="space-x-2">
                    <button className="bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600">
                      Ver
                    </button>
                    <button className="bg-yellow-500 text-white py-1 px-2 rounded-md hover:bg-yellow-600">
                      Editar
                    </button>
                    <button className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600">
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
    </div>
  );
};

export default Content;
