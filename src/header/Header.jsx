import React from "react";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center  py-4 bg-green-600 text-white">
      <h1 className="text-xl font-bold pl-4">
        MÓDULO DE CONSULTA Y REGISTRO DE USUARIOS AL SISTEMA
      </h1>
      <div className="flex items-center space-x-4 pr-4">
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4h6v6H4V4Zm10 10h6v6h-6v-6Zm0-10h6v6h-6V4Zm-4 10h.01v.01H10V14Zm0 4h.01v.01H10V18Zm-3 2h.01v.01H7V20Zm0-4h.01v.01H7V16Zm-3 2h.01v.01H4V18Zm0-4h.01v.01H4V14Z"
          />
          <path
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 7h.01v.01H7V7Zm10 10h.01v.01H17V17Z"
          />
        </svg>

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
