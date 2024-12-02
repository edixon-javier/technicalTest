import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "mr",
    firstName: "",
    lastName: "",
    picture:
      "https://xsgames.co/randomusers/avatar.php?g=male&random=0.10123486973872264",
    gender: "male",
    email: "",
    dateOfBirth: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "El nombre es requerido.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Los apellidos son requeridos.";
    if (!formData.email.trim()) {
      newErrors.email = "El correo es requerido.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El formato del correo no es válido.";
    }
    if (!formData.dateOfBirth.trim()) {
      newErrors.dateOfBirth = "La fecha de nacimiento es requerida.";
    } else if (!/^\d{4}-\d{2}-\d{2}$/.test(formData.dateOfBirth)) {
      newErrors.dateOfBirth = "El formato debe ser YYYY-MM-DD.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono es requerido.";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "El teléfono debe contener entre 10 y 15 dígitos.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) return;

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
      navigate("/");
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      alert("Error al crear el usuario");
    }
  };

  const handleCancel = () => {
    navigate("/");
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
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
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
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
          )}
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
          <label className="block text-sm font-medium mb-1">
            Correo Electrónico:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
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
          {errors.dateOfBirth && (
            <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>
          )}
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
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
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
