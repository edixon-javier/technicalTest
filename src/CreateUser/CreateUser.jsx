import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "mr",
    firstName: "",
    lastName: "",
    picture: "https://xsgames.co/randomusers/avatar.php?g=male&random=0.10123486973872264",
    gender: "male",
    email: "",
    dateOfBirth: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch("https://dummyapi.io/data/v1/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "app-id": "63473330c1927d386ca6a3a5",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Usuario creado:", data);
      alert("Usuario creado exitosamente");
      navigate("/"); // Redirige a la página principal
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      alert("Error al crear el usuario");
    }
  };

  const handleCancel = () => {
    navigate("/"); // Redirige a la página principal sin guardar
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Crear Usuario</h1>
      <div className="space-y-4">
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
          <label className="block text-sm font-medium mb-1">Nombre:</label>
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
          <label className="block text-sm font-medium mb-1">Correo Electrónico:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Fecha de Nacimiento:</label>
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
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
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

export default CreateUser;
