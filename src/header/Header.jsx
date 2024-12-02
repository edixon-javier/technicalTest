import { TiThSmallOutline } from "react-icons/ti";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center  py-4 bg-green-600 text-white">
      <h1 className="text-xl font-bold pl-4">
        MÓDULO DE CONSULTA Y REGISTRO DE USUARIOS AL SISTEMA
      </h1>
      <div className="flex items-center space-x-4 pr-4">
          <TiThSmallOutline className="w-8 h-8" />

        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <img
            className="w-10 h-10 rounded-full"
            src="https://xsgames.co/randomusers/avatar.php?g=male&random=0.10123486973872264"
            alt="Person"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
