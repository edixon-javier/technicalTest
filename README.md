User Management App
Esta aplicación permite gestionar usuarios, incluyendo su creación, actualización, visualización y eliminación. Desarrollada con React, incluye funcionalidades como paginación, manejo de rutas, y sincronización de datos.

Características
Listado de usuarios con paginación.
Visualización de detalles de un usuario.
Creación de nuevos usuarios.
Actualización de información de usuarios.
Navegación sencilla a través de rutas.
Requisitos Previos
Antes de iniciar, asegúrate de tener instalado:

Node.js (versión 14 o superior)
npm (gestor de paquetes incluido con Node.js)
Instalación
Clona este repositorio en tu máquina local:

bash
Copiar código
git clone https://github.com/tu-usuario/user-management-app.git
Navega al directorio del proyecto:

bash
Copiar código
cd user-management-app
Instala las dependencias necesarias:

bash
Copiar código
npm install
Ejecución del Proyecto
Para iniciar el proyecto en un entorno de desarrollo, ejecuta:

bash
Copiar código
npm run dev
Esto iniciará el servidor de desarrollo. Abre tu navegador y accede a:

arduino
Copiar código
http://localhost:3000
(El puerto puede variar dependiendo de tu configuración).

Estructura del Proyecto
css
Copiar código
src/
├── components/
│   ├── header/
│   │   └── Header.js
│   ├── content/
│   │   └── Content.js
│   ├── UserDetails/
│   │   └── UserDetails.js
│   ├── CreateUser/
│   │   └── CreateUser.js
│   └── UpdateUser/
│       └── UpdateUser.js
├── App.js
└── index.js

Componentes Principales

Header: Barra de navegación principal.
Content: Lista de usuarios con paginación.
CreateUser: Formulario para crear nuevos usuarios.
UpdateUser: Formulario para editar la información de un usuario existente.
UserDetails: Detalles individuales de un usuario.
Dependencias Principales
React Router Dom: Manejo de rutas y navegación.
Fetch API: Para la comunicación con el API.

API Utilizada
Se utiliza el servicio de Dummy API para gestionar los datos de usuarios. Configura tu app-id en las solicitudes a la API.
