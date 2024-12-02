import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFech";
import Loading from "../Loading/Loading";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(`/${id}`);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  if (error || !user) {
    return <div>Error al cargar los datos o usuario no encontrado.</div>;
  }

  return (
    <div className="p-4">
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Regresar
      </button>
      <div className="border border-gray-300 rounded-md p-4 mt-4">
        <h1 className="text-2xl font-bold mb-4">
          Detalles del Usuario: {user.firstName} {user.lastName}
        </h1>
        <img
          src={user.picture}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-24 h-24 rounded-full mb-4"
        />
        <p>
          <strong>ID:</strong> {user.id}
        </p>
        <p>
          <strong>Titulo:</strong> {user.title}
        </p>
        <p>
          <strong>Nombre:</strong> {user.firstName}
        </p>
        <p>
          <strong>Apellidos:</strong> {user.lastName}
        </p>
        <p>
          <strong>Imagen:</strong> {user.picture}
        </p>
        <p>
          <strong>Genero:</strong> {user.gender}
        </p>
        <p>
          <strong>Correo:</strong> {user.email || "No disponible"}
        </p>
        <p>
          <strong>Fecha de nacimiento:</strong> {user.dateOfBirth}
        </p>
        <p>
          <strong>Fecha de nacimiento:</strong> {user.phone}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
