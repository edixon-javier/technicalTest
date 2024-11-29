import React from "react";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center  py-4 bg-green-600 text-white">
      <h1 className="text-xl font-bold pl-4">
      MÓDULO DE CONSULTA Y REGISTRO DE USUARIOS AL SISTEMA
      </h1>
      <div className="flex items-center space-x-4 pr-4">
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 4h6v6H4V4Zm10 10h6v6h-6v-6Zm0-10h6v6h-6V4Zm-4 10h.01v.01H10V14Zm0 4h.01v.01H10V18Zm-3 2h.01v.01H7V20Zm0-4h.01v.01H7V16Zm-3 2h.01v.01H4V18Zm0-4h.01v.01H4V14Z"
          />
          <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 7h.01v.01H7V7Zm10 10h.01v.01H17V17Z"
          />
        </svg>

        <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg
            class="absolute w-12 h-12 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
