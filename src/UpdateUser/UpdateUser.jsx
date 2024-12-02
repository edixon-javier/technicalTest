import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "mr",
    firstName: "",
    lastName: "",
    picture: "",
    gender: "male",
    email: "",
    dateOfBirth: "",
    phone: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://dummyapi.io/data/v1/user/${id}`, {
          headers: {
            "app-id": "63473330c1927d386ca6a3a5",
          },
        });
        const data = await response.json();
        setFormData({
          id: data.id || "",
          title: data.title || "mr",
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          picture: data.picture || "",
          gender: data.gender || "male",
          email: data.email || "",
          dateOfBirth: data.dateOfBirth || "",
          phone: data.phone || "",
        });
      } catch (error) {
        console.error("Error al cargar los datos del usuario:", error);
        alert("Error al cargar los datos del usuario");
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`https://dummyapi.io/data/v1/user/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "app-id": "63473330c1927d386ca6a3a5",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Usuario actualizado:", data);
      alert("Usuario actualizado exitosamente");
      navigate("/");
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
      alert("Error al actualizar el usuario");
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Modificar Usuario</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Id:</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Título:</label>
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          >
            <option value="mr">Mr</option>
            <option value="ms">Ms</option>
            <option value="mrs">Mrs</option>
            <option value="miss">Miss</option>
            <option value="dr">Dr</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Nombres:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Apellidos:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Imagen:</label>
          <input
            type="text"
            name="picture"
            value={formData.picture}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Género:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Correo:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Fecha de Nacimiento:
          </label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Teléfono:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
      </div>
      <div className="flex justify-end space-x-4 mt-4">
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Guardar
        </button>
        <button
          onClick={handleCancel}
          className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default UpdateUser;
